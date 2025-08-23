import { useEffect, useRef, useCallback } from "react";
import { useWebSocket } from "@/hooks/use-websocket";
import Cursor from "./Cursor";

// Generate consistent colors for usernames
const getUserColor = (username: string): string => {
	const colors = [
		"#3b82f6", // blue
		"#ef4444", // red
		"#10b981", // green
		"#f59e0b", // yellow
		"#8b5cf6", // purple
		"#06b6d4", // cyan
		"#f97316", // orange
		"#84cc16", // lime
		"#ec4899", // pink
		"#6366f1", // indigo
	];

	let hash = 0;
	for (let i = 0; i < username.length; i++) {
		hash = username.charCodeAt(i) + ((hash << 5) - hash);
	}

	return colors[Math.abs(hash) % colors.length];
};

interface CursorTrackerProps {
	wsUrl?: string;
}

const CursorTracker = ({
	wsUrl = "ws://localhost:3001",
}: CursorTrackerProps) => {
	const { isConnected, cursors, sendCursorPosition, userCount } =
		useWebSocket(wsUrl);
	const lastSentPositionRef = useRef({ x: 0, y: 0 });
	const throttleTimeoutRef = useRef<NodeJS.Timeout>();

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			if (!isConnected) return;

			const { clientX, clientY } = event;
			const lastPos = lastSentPositionRef.current;

			// Only send if position changed by at least 5 pixels (reduces network traffic)
			const distance = Math.sqrt(
				Math.pow(clientX - lastPos.x, 2) + Math.pow(clientY - lastPos.y, 2)
			);

			if (distance >= 5) {
				// Throttle cursor position updates to avoid overwhelming the server
				if (throttleTimeoutRef.current) {
					clearTimeout(throttleTimeoutRef.current);
				}

				throttleTimeoutRef.current = setTimeout(() => {
					sendCursorPosition(clientX, clientY);
					lastSentPositionRef.current = { x: clientX, y: clientY };
				}, 50); // Send at most 20 times per second
			}
		},
		[isConnected, sendCursorPosition]
	);

	useEffect(() => {
		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			if (throttleTimeoutRef.current) {
				clearTimeout(throttleTimeoutRef.current);
			}
		};
	}, [handleMouseMove]);

	return (
		<>
			{/* Connection status indicator */}
			<div className='fixed top-4 right-4 z-40 flex items-center gap-2 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm'>
				<div
					className={`w-2 h-2 rounded-full ${
						isConnected ? "bg-green-500" : "bg-red-500"
					}`}
				/>
				<span>{isConnected ? `${userCount} online` : "Connecting..."}</span>
			</div>

			{/* Render other users' cursors */}
			{Array.from(cursors.entries()).map(([username, position]) => (
				<Cursor
					key={username}
					x={position.x}
					y={position.y}
					username={username}
					color={getUserColor(username)}
				/>
			))}
		</>
	);
};

export default CursorTracker;

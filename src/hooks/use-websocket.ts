import { useEffect, useRef, useState, useCallback } from "react";

interface ChatMessage {
	type: "message";
	username: string;
	message: string;
	timestamp: string;
}

interface UserJoinMessage {
	type: "user_join";
	username: string;
	userCount: number;
}

interface UserLeaveMessage {
	type: "user_leave";
	username: string;
	userCount: number;
}

interface CursorMoveMessage {
	type: "cursor_move";
	username: string;
	x: number;
	y: number;
}

type Message =
	| ChatMessage
	| UserJoinMessage
	| UserLeaveMessage
	| CursorMoveMessage;

interface CursorPosition {
	x: number;
	y: number;
	username: string;
	lastSeen: number;
}

interface UseWebSocketReturn {
	isConnected: boolean;
	userCount: number;
	cursors: Map<string, CursorPosition>;
	sendMessage: (message: string) => void;
	sendCursorPosition: (x: number, y: number) => void;
	messages: ChatMessage[];
}

export const useWebSocket = (url: string): UseWebSocketReturn => {
	const [isConnected, setIsConnected] = useState(false);
	const [userCount, setUserCount] = useState(0);
	const [cursors, setCursors] = useState<Map<string, CursorPosition>>(
		new Map()
	);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const wsRef = useRef<WebSocket | null>(null);
	const reconnectTimeoutRef = useRef<NodeJS.Timeout>();
	const cursorCleanupIntervalRef = useRef<NodeJS.Timeout>();

	const connect = useCallback(() => {
		try {
			wsRef.current = new WebSocket(url);

			wsRef.current.onopen = () => {
				console.log("WebSocket connected");
				setIsConnected(true);
			};

			wsRef.current.onmessage = (event) => {
				try {
					const data: Message = JSON.parse(event.data);

					switch (data.type) {
						case "user_join":
							setUserCount(data.userCount);
							break;

						case "user_leave":
							setUserCount(data.userCount);
							setCursors((prev) => {
								const newCursors = new Map(prev);
								newCursors.delete(data.username);
								return newCursors;
							});
							break;

						case "cursor_move":
							setCursors((prev) => {
								const newCursors = new Map(prev);
								newCursors.set(data.username, {
									x: data.x,
									y: data.y,
									username: data.username,
									lastSeen: Date.now(),
								});
								return newCursors;
							});
							break;

						case "message":
							setMessages((prev) => [...prev, data]);
							break;
					}
				} catch (error) {
					console.error("Failed to parse WebSocket message:", error);
				}
			};

			wsRef.current.onclose = () => {
				console.log("WebSocket disconnected");
				setIsConnected(false);

				// Attempt to reconnect after 3 seconds
				reconnectTimeoutRef.current = setTimeout(() => {
					connect();
				}, 3000);
			};

			wsRef.current.onerror = (error) => {
				console.error("WebSocket error:", error);
				setIsConnected(false);
			};
		} catch (error) {
			console.error("Failed to connect to WebSocket:", error);
			// Retry connection after 3 seconds
			reconnectTimeoutRef.current = setTimeout(() => {
				connect();
			}, 3000);
		}
	}, [url]);

	const sendMessage = useCallback((message: string) => {
		if (wsRef.current?.readyState === WebSocket.OPEN) {
			wsRef.current.send(
				JSON.stringify({
					type: "message",
					message,
				})
			);
		}
	}, []);

	const sendCursorPosition = useCallback((x: number, y: number) => {
		if (wsRef.current?.readyState === WebSocket.OPEN) {
			wsRef.current.send(
				JSON.stringify({
					type: "cursor_move",
					x,
					y,
				})
			);
		}
	}, []);

	useEffect(() => {
		connect();

		// Clean up old cursor positions every 5 seconds
		cursorCleanupIntervalRef.current = setInterval(() => {
			const now = Date.now();
			setCursors((prev) => {
				const newCursors = new Map();
				prev.forEach((cursor, username) => {
					// Keep cursors that were seen in the last 10 seconds
					if (now - cursor.lastSeen < 10000) {
						newCursors.set(username, cursor);
					}
				});
				return newCursors;
			});
		}, 5000);

		return () => {
			if (reconnectTimeoutRef.current) {
				clearTimeout(reconnectTimeoutRef.current);
			}
			if (cursorCleanupIntervalRef.current) {
				clearInterval(cursorCleanupIntervalRef.current);
			}
			if (wsRef.current) {
				wsRef.current.close();
			}
		};
	}, [connect]);

	return {
		isConnected,
		userCount,
		cursors,
		sendMessage,
		sendCursorPosition,
		messages,
	};
};

import { useEffect, useState } from "react";

interface CursorProps {
	x: number;
	y: number;
	username: string;
	color?: string;
}

const Cursor = ({ x, y, username, color = "#3b82f6" }: CursorProps) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(true);
		const timer = setTimeout(() => setVisible(false), 100);
		return () => clearTimeout(timer);
	}, [x, y]);

	return (
		<div
			className={`fixed pointer-events-none z-50 transition-all duration-200 ${
				visible ? "opacity-100 scale-110" : "opacity-70 scale-100"
			}`}
			style={{
				left: `${x}px`,
				top: `${y}px`,
				transform: "translate(-6px, -6px)",
			}}
		>
			{/* Circle cursor */}
			<div
				className='w-3 h-3 rounded-full border-2 border-white shadow-lg'
				style={{ backgroundColor: color }}
			/>
		</div>
	);
};

export default Cursor;

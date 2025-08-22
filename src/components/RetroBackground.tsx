import { useEffect, useRef } from "react";

const RetroBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const draw = () => {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw pixel grid background
			const gridSize = 32;
			const colors = ["#1a1a1a", "#2a2a2a", "#3a3a3a", "#0f1419"];
			for (let x = 0; x < canvas.width; x += gridSize) {
				for (let y = 0; y < canvas.height; y += gridSize) {
					const colorIndex =
						(Math.floor(x / gridSize) + Math.floor(y / gridSize)) %
						colors.length;
					ctx.fillStyle = colors[colorIndex];
					ctx.fillRect(x, y, gridSize, gridSize);
				}
			}
		};

		draw();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return (
		<>
			<canvas
				ref={canvasRef}
				className='fixed inset-0 pointer-events-none z-0 opacity-20'
				style={{ mixBlendMode: "screen" }}
			/>
			<div className='fixed inset-0 pointer-events-none z-0 retro-scanlines' />
			<div className='fixed inset-0 pointer-events-none z-0 retro-noise' />
		</>
	);
};

export default RetroBackground;

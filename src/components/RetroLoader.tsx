import { useEffect, useState } from "react";

const RetroLoader = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) return 100;
				return prev + 1;
			});
		}, 20);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='fixed inset-0 z-[100] bg-black text-purple-400 font-mono text-sm flex items-center justify-center'>
			<div className='text-center space-y-2'>
				<div>Loading...</div>
				<div className='flex'>
					<span>[</span>
					<div className='w-64 flex'>
						{Array.from({ length: 32 }, (_, i) => (
							<span
								key={i}
								className={
									progress > i * 3.125 ? "text-purple-400" : "text-gray-600"
								}
							>
								█
							</span>
						))}
					</div>
					<span>]</span>
				</div>
				<div>{progress.toFixed(0)}%</div>
			</div>
		</div>
	);
};

export default RetroLoader;

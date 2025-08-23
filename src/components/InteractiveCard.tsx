import { useState } from "react";

interface InteractiveCardProps {
	children: React.ReactNode;
	className?: string;
}

const InteractiveCard = ({
	children,
	className = "",
}: InteractiveCardProps) => {
	return (
		<div
			className={`brutalist-block transition-all duration-300 hover-tilt ${className}`}
		>
			{children}
		</div>
	);
};

export default InteractiveCard;

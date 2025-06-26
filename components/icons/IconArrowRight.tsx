import React from "react";

interface IconArrowRightProps {
  className?: string;
  size?: number;
}

export const IconArrowRight: React.FC<IconArrowRightProps> = ({
  className = "",
  size = 16,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    className={`ml-1 ${className}`}
  >
    <path d="M9.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L9.293 4.707a1 1 0 010-1.414z" />
  </svg>
);

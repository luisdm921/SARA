import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 ${
        hover ? "card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};


import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <div className={`inline-block ${centered ? "mx-auto" : ""}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
      </div>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

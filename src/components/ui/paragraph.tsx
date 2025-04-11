import React from "react";

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
    return (
        <p className={`text-lg text-gray-700 max-w-4xl mx-auto mb-6 ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;
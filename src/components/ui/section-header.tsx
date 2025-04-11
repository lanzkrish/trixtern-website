import React from "react";

interface SectionHeaderProps {
    title: string;
    alignment?: "left" | "center" | "right";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, alignment = "center" }) => {
    const alignmentClass =
        alignment === "left"
            ? "text-left"
            : alignment === "right"
            ? "text-right"
            : "text-center";

    return (
        <h2 className={`text-3xl font-bold mb-8 text-gray-800 ${alignmentClass}`}>
            {title}
        </h2>
    );
};

export default SectionHeader;
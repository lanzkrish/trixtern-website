import React from "react";

interface ListProps {
    items: string[];
    className?: string;
}

const List: React.FC<ListProps> = ({ items, className = "" }) => {
    return (
        <ul className={`list-disc list-inside text-lg text-gray-700 max-w-4xl mx-auto mb-6 ${className}`}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default List;
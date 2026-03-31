import React from "react";

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
    return (
        <div className={`bg-white shadow-md rounded-xl p-6 border border-gray-200 w-full max-w-2xl ${className}`}>
            {title && (
                <>
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
                    <div className="w-full h-px bg-slate-100 mb-4" />
                </>
            )}
            {children}
        </div>
    );
}
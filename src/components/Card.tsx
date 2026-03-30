interface CardProps {
    title?: string;
    children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            {title && (
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
            )}
            {children}
        </div>
    );
}

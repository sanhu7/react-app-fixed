import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">

            <h1 className="text-8xl font-bold text-pink-300">404</h1>
            <h2 className="text-2xl font-bold text-pink-700 mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2 mb-8">Page you search is Not Found</p>

            <NavLink to="/" className="bg-pink-700 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
                Back to Home page
            </NavLink>

        </div>
    );
}
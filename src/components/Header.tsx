import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-pink-700 shadow-md">

            <div className="flex items-center justify-between px-4 py-3">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <HiSparkles className="text-xl text-amber-300" />
                    <h2 className="text-base font-bold text-white">MiniReactApp</h2>
                </div>

                {/* Desktop nav — döljs på mobil */}
                <nav className="hidden md:flex gap-4 text-white text-sm font-medium uppercase">
                    <NavLink to="/" className="hover:bg-pink-500 px-3 py-1 rounded-md">Home</NavLink>
                    <NavLink to="/about" className="hover:bg-pink-500 px-3 py-1 rounded-md">About</NavLink>
                    <NavLink to="/todos" className="hover:bg-pink-500 px-3 py-1 rounded-md">Todos</NavLink>
                    <NavLink to="/counter" className="hover:bg-pink-500 px-3 py-1 rounded-md">Counter</NavLink>
                </nav>

                {/* Hamburger — visas bara på mobil */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
                    {open ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobil dropdown — visas bara när open=true */}
            {open && (
                <nav className="md:hidden bg-pink-800 flex flex-col px-4 py-2 gap-1 text-white text-sm font-medium uppercase">
                    <NavLink to="/" onClick={() => setOpen(false)} className="hover:bg-pink-600 px-3 py-2 rounded-md">Home</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)} className="hover:bg-pink-600 px-3 py-2 rounded-md">About</NavLink>
                    <NavLink to="/todos" onClick={() => setOpen(false)} className="hover:bg-pink-600 px-3 py-2 rounded-md">Todos</NavLink>
                    <NavLink to="/counter" onClick={() => setOpen(false)} className="hover:bg-pink-600 px-3 py-2 rounded-md">Counter</NavLink>
                </nav>
            )}

        </header>
    );
}
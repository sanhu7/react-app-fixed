import { NavLink } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";



export default function Header() {
    return (
        <header className=" sticky top-0 z-50 flex items-center justify-between px-10 py-6 bg-pink-700 shadow-md h-20">

            <div className="flex items-center gap-3">
                <HiSparkles className="text-6xl text-amber-300" /> {/*logo*/}
                <h2 className="text-xl font-bold text-white">MiniReactApp</h2>
            </div>

            <nav className="flex gap-8 text-white font-medium text-base uppercase tracking-wider">
                <NavLink to="/" className="hover:bg-pink-500 px-2 py-2 rounded-md">Home</NavLink>
                <NavLink to="/about" className="hover:bg-pink-500 px-2 py-2 rounded-md">About</NavLink>
                <NavLink to="/todos" className="hover:bg-pink-500 px-2 py-2 rounded-md">Todos</NavLink>
                <NavLink to="/counter" className="hover:bg-pink-500 px-2 py-2 rounded-md">Counter</NavLink>
            </nav>
        </header>
    );
}

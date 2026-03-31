import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import { FaPencilAlt, FaBolt, FaInfoCircle } from "react-icons/fa"; //icons 

export default function HomePage() {
    return (
        <div className="flex flex-col items-center gap-6 py-10 px-4">


            <Card title="Welcome to MiniReactApp 👋" className="w-full max-w-2xl">
                <div className="text-slate-500 text-sm leading-relaxed flex flex-col gap-3">
                    <p>
                        This is a small web application built with <strong className="text-slate-700">React</strong> and <strong className="text-slate-700">TypeScript</strong> as part of <strong className="text-slate-700">Mini-project 1</strong>.
                    </p>
                    <p>
                        The app contains multiple pages, reusable components, stateful logic and navigation using <strong className="text-slate-700">React Router</strong>.
                        Use the menu above to explore the app.
                    </p>
                </div>
            </Card>


            <Card title="Explore the App" className="w-full max-w-xl">
                <div className="flex flex-col gap-3">

                    <NavLink to="/about"
                        className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 hover:bg-pink-50 hover:text-pink-800 transition-all duration-200 text-slate-600 text-sm font-medium">
                        <FaInfoCircle className="text-pink-400 text-lg shrink-0" />
                        <span><strong>About</strong> — Learn more about the project and developer</span>
                    </NavLink>

                    <NavLink to="/todos"
                        className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 hover:bg-orange-50 hover:text-orange-800 transition-all duration-200 text-slate-600 text-sm font-medium">
                        <FaPencilAlt className="text-orange-400 text-lg shrink-0" />
                        <span><strong>Todo List</strong> — Add, edit and remove tasks</span>
                    </NavLink>

                    <NavLink to="/counter"
                        className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 hover:bg-yellow-50 hover:text-yellow-800 transition-all duration-200 text-slate-600 text-sm font-medium">
                        <FaBolt className="text-yellow-400 text-lg shrink-0" />
                        <span><strong>Counter</strong> — A stateful counter saved in LocalStorage</span>
                    </NavLink>

                </div>
            </Card>

        </div>
    );
}
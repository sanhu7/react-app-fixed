import { useState, useEffect } from "react";
import { FaBolt } from "react-icons/fa";

export default function Counter() {

    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem("counter");
        return saved ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("counter", String(count));
    }, [count]);

    return (
        <section className="flex items-center justify-center py-16">

            <div className="bg-white rounded-2xl shadow-lg p-8 w-80 flex flex-col items-center gap-6">

                <div className="flex items-center justify-center gap-2">
                    <FaBolt className="text-orange-400 text-xl" />
                    <h1 className="text-2xl font-bold text-slate-800">Counter</h1>
                </div>

                <div className="w-full h-px bg-slate-100" />

                <div className={`text-7xl font-bold transition-colors duration-300 ${count > 0 ? "text-green-500" :
                    count < 0 ? " text-red-500" :
                        "text-slate-300"
                    }`}>
                    {count}
                </div>

                <div className="w-full h-px bg-slate-100" />


                <div className="flex items-center gap-3 w-full">


                    <button
                        onClick={() => setCount(count - 1)}
                        className="w-14 h-14 text-2xl font-bold bg-red-100 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200"
                    >
                        −
                    </button>

                    {/* Reset — grå */}
                    <button
                        onClick={() => setCount(0)}
                        className="flex-1 py-2 text-sm font-semibold uppercase tracking-wider bg-slate-100 text-slate-500 rounded-full hover:bg-slate-500 hover:text-white transition-all duration-200"
                    >
                        Reset
                    </button>

                    {/* Plus — grön */}
                    <button
                        onClick={() => setCount(count + 1)}
                        className="w-14 h-14 text-2xl font-bold bg-green-100 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-200"
                    >
                        +
                    </button>

                </div>

            </div>
        </section>
    );
}
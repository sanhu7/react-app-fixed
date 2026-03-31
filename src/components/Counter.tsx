import { useState, useEffect } from "react";



export default function Counter() {

    // ladda från LocalStorage
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem("counter");
        return saved ? Number(saved) : 0;
    });

    //  spara  auto i LocalStorage vid ändring
    useEffect(() => {
        localStorage.setItem("counter", String(count));
    }, [count]);


    return (
        <section style={{ textAlign: "center" }}>
            <h1>Counter (Räknare) </h1>
            <p>Value: {count}</p>

            <button onClick={() => setCount(count - 1)}>
                -
            </button>

            <button onClick={() => setCount(0)} style={{ margin: "0 1rem" }}>
                Reset
            </button>

            <button onClick={() => setCount(count + 1)}>+</button>

        </section>
    );
}

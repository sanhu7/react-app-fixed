import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <section style={{ textAlign: "center" }}>
            <h1>Counter (Räknare)</h1>
            <p>Value: {count}</p>

            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: "1rem" }}>
                -
            </button>
        </section>
    );
}

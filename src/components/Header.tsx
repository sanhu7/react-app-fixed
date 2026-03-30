import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header
            style={{
                padding: "1rem",
                background: "#ea9797",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                justifyItems: "center",

            }}
        >
            <h2>logo</h2>

            <nav style={{ display: "flex", gap: "1rem" }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/todos">Todos</NavLink>
                <NavLink to="/counter">Counter</NavLink>
            </nav>
        </header>
    );
}

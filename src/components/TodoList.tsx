import { Link } from "react-router";

export default function TodoList() {
    return (
        <header>
            <Link to="/" className="text-xl">
                BRAND
            </Link>
            <nav>
                <Link to="/pricing">Pricing</Link>
            </nav>
        </header>
    );
}
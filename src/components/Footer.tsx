import { Link } from "react-router";

export default function Footer() {
    return (
        <header>
            <Link to="/" className="text-xl">
                footer
            </Link>
            <nav>
                <Link to="/homepage">HomePage</Link>
            </nav>
        </header>
    );
}
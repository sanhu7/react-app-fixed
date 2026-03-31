import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function PagesLayout() {

    return (
        <div className="min-h-screen flex flex-col">

            <Header />

            <main className="flex-1 bg-pink-100 ">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}
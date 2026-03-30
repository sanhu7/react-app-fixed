import { Outlet } from "react-router-dom";

export default function PagesLayout() {

    return (
        <div style={{ padding: "1rem" }}>

            <Outlet />

        </div>
    );

}

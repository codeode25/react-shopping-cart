import { Outlet } from "react-router";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

const MainLayout: React.FC = () => {
    return <>
        <MainNavbar />
        <main className="max-w-5xl mx-auto px-4 py-24">
            <Outlet />
        </main>
        <MainFooter/>
    </>
}

export default MainLayout;
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
    return <>
        navbar
        <main className="max-w-5xl mx-auto px-4 py-24">
            <Outlet />
        </main>
        footer
    </>
}

export default MainLayout;
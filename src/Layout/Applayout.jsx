import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Appbar from "../Components/Appbar";

const AppLayout = () => {
    return (
        <div className="flex flex-col">
            <Appbar email="admin@gmail.com" />
            <div className="flex flex-row w-full h-screen  ">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;

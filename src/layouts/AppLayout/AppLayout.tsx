import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";

export const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        {/* <Topbar/> */}
        <Outlet />
        
      </div>
    </div>
  );
};

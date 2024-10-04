import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar/Sidebar";

export const AppLayout = () => {
  return (
    <div className="flex-col-reverse flex sm:flex-row h-full">
      <Sidebar />
      <div className="bg-secondary01/5 flex-grow">
        {/* <Topbar/> */}
        <Outlet />
      </div>
    </div>
  );
};

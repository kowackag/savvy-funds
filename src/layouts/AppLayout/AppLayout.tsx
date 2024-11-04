import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar/Sidebar";
import { Topbar } from "./Topbar/Topbar";

export const AppLayout = () => {
	return (
		<div className="flex min-h-full flex-col-reverse sm:flex-row">
			<Sidebar />
			<div className="flex-grow bg-secondary01/5">
				<Topbar />
				<Outlet />
			</div>
		</div>
	);
};

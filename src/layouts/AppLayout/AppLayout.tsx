import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar/Sidebar";

export const AppLayout = () => {
	return (
		<div className="flex h-full flex-col-reverse sm:flex-row">
			<Sidebar />
			<div className="flex-grow bg-secondary01/5">
				{/* <Topbar/> */}
				<Outlet />
			</div>
		</div>
	);
};

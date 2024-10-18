import { Outlet } from "react-router-dom";

import { Logo } from "@components/icons/Logo";

export const AuthLayout = () => {
	return (
		<div className="relative flex min-h-full justify-center bg-neutral20 p-6 sm:items-center">
			<div className="absolute left-6 top-6 hidden items-center gap-3 sm:flex">
				<Logo />
				<h1 className="text-primary">
					Savvy <span className="text-neutral700">Funds</span>
				</h1>
			</div>

			<div className="xl:auth-layout w-full max-w-screen-2xl md:py-24 md:pl-32 md:pr-44">
				<div className="h-full min-h-[500px] rounded-xl p-6 sm:bg-neutral00 sm:shadow-[0px_6px_30px_0px_rgba(0,0,0,0.04)] xl:p-12">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

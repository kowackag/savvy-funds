import { Outlet } from "react-router-dom";

import { Logo } from "@components/icons/Logo";

export const AuthLayout = () => {
	return (
		<div className="relative flex min-h-full justify-center p-6 sm:items-center sm:bg-neutral20">
			<div className="absolute left-6 top-6 hidden items-center gap-3 sm:flex">
				<Logo />
				<h1 className="text-headline-3 text-primary">
					Savvy<span className="text-neutral700">Funds</span>
				</h1>
			</div>

			<div className="xl:auth-layout w-full max-w-xl lg:max-w-screen-2xl lg:p-12 xl:py-24 xl:pl-32 xl:pr-44">
				<div className="h-full min-h-[500px] rounded-xl sm:bg-neutral00 sm:p-10 sm:shadow-[0px_6px_30px_0px_rgba(0,0,0,0.04)] xl:p-12">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

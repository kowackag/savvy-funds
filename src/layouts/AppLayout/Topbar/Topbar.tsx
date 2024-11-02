import { useContext } from "react";
import { AuthContext } from "./../../../context/AuthContext";

export const Topbar = () => {
	const context = useContext(AuthContext);

	return (
		<div className="flex h-[84px] justify-end px-8 py-[18px] leading-[48px]">
			<div className="flex h-12 items-center gap-3">
				{/* <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral40 bg-neutral20 text-xs tracking-tight">
					48x48
				</span> */}
				<p className="text-l font-medium text-neutral700">
					{`${context?.user?.firstName} ${context?.user?.lastName}`}
				</p>
				<div className="rounded-[32px] bg-neutral00 px-6 py-3 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.02)] outline-none">
			
					<select className="hidden">
						<option>English</option>
						<option>Polski</option>
					</select>
				</div>
			</div>
		</div>
	);
};

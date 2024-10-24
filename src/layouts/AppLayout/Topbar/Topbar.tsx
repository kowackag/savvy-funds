export const Topbar = () => {
	return (
		<div className="flex h-[84px] justify-end px-8 py-[18px] leading-[48px]">
			<div className="flex h-12 items-center gap-3">
				<span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral40 bg-neutral20 text-xs tracking-tight">
					48x48
				</span>
				<p className="text-l font-medium text-neutral700">Jan Kot</p>
			</div>
		</div>
	);
};

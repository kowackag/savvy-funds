import { useState } from "react";
import { NavLink } from "react-router-dom";
import clx from "classnames";
import { getAuth, signOut } from "firebase/auth";

import { IconSidebar } from "../IconSidebar/IconSidebar";
import { ArrowRight } from "@components/icons/ArrowRight";
import { Logo } from "@components/icons/Logo";

import { appRoutes } from "./../../../routes";
import { firebaseApp } from "./../../../config/firebase";

export const Sidebar = () => {
	const [isOpen, setISOpen] = useState<boolean>(true);
	const auth = getAuth(firebaseApp);

	const handleLogout = () => {
		signOut(auth);
	};

	return (
		<div
			className={clx(
				"relative flex flex-col items-stretch sm:px-6 sm:py-6 sm:pb-4 md:px-8",
				{
					["sm:w-72"]: isOpen,
				},
			)}
		>
			<button
				onClick={() => setISOpen((state) => !state)}
				className="absolute -right-6 top-[18px] hidden h-12 w-6 rounded-br-2xl rounded-tr-2xl bg-primary text-neutral10 sm:flex sm:items-center sm:justify-center "
			>
				<ArrowRight className={`${isOpen ? "rotate-180" : ""}`} />
			</button>
			<div className="hidden px-3 text-headline-4 sm:flex sm:items-center sm:gap-3 sm:pb-6">
				<Logo />
				<h1
					className={clx("text-primary", {
						["hidden"]: !isOpen,
					})}
				>
					Savvy <span className="text-neutral700">Funds</span>
				</h1>
			</div>

			<ul className="flex grow flex-wrap items-start justify-stretch border-t border-t-primary/10 sm:flex-col sm:items-stretch sm:gap-4">
				<hr className="hidden border-dashed text-primary opacity-40 sm:inline-block"></hr>
				<div className="flex grow sm:flex-col sm:items-stretch sm:gap-3">
					{appRoutes
						.filter(
							({ layout, title }) => layout === "app" && title !== "logout",
						)
						.map(({ path, icon, title }) => (
							<li
								key={path}
								className="hover:bg-secondary01/5 sm:hover:bg-neutral00"
							>
								<NavLink
									to={path}
									className={({ isActive }) =>
										clx(
											`flex items-center justify-center gap-2 text-neutral500 sm:justify-start`,
											{
												["flex-grow bg-primary !text-neutral10 sm:rounded-full [&>*:first-child]:text-neutral10"]:
													isActive && isOpen,
												["bg-primary !text-neutral10  sm:bg-transparent [&>*:first-child]:bg-primary [&>*:first-child]:text-neutral10"]:
													isActive && !isOpen,
											},
										)
									}
								>
									<IconSidebar
										name={icon}
										className={clx({
											["border sm:!border-neutral40 sm:bg-primary/5"]: !isOpen,
										})}
									/>
									<p
										className={clx(
											"hidden text-m  font-medium capitalize sm:block",
											{
												["sm:hidden"]: !isOpen,
											},
										)}
									>
										{title}
									</p>
								</NavLink>
							</li>
						))}
				</div>
				<li className="hover:bg-secondary01/5 sm:hover:bg-neutral00">
					<button
						className="flex items-center justify-center gap-2 text-neutral500 sm:justify-start"
						onClick={handleLogout}
					>
						<IconSidebar
							name="logout"
							className={clx({
								["border sm:!border-neutral40 sm:bg-primary/5"]: !isOpen,
							})}
						/>
						<p
							className={clx("hidden text-m  font-medium capitalize sm:block", {
								["sm:hidden"]: !isOpen,
							})}
						>
							Logout
						</p>
					</button>
				</li>
			</ul>
		</div>
	);
};

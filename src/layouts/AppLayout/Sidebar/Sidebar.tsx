import { useState } from "react";
import { NavLink } from "react-router-dom";
import clx from "classnames";

import { IconSidebar } from "../IconSidebar/IconSidebar";
import { ArrowRight } from "@components/icons/ArrowRight";
import { Logo } from "@components/icons/Logo";

import { appRoutes } from "./../../../routes";

export const Sidebar = () => {
	const [isOpen, setISOpen] =
		useState<boolean>(true);
	return (
		<div
			className={clx(
				"relative sm:px-6 sm:py-6 md:px-8 ",
				{ ["sm:w-72"]: isOpen },
			)}
		>
			<button
				onClick={() =>
					setISOpen((state) => !state)
				}
				className="absolute -right-6 top-[18px] hidden h-12 w-6 rounded-br-2xl rounded-tr-2xl bg-primary text-neutral10 sm:flex sm:items-center sm:justify-center "
			>
				<ArrowRight
					className={`${isOpen ? "rotate-180" : ""}`}
				/>
			</button>
			<div className="hidden px-3 text-headline-4 sm:flex sm:items-center sm:gap-3 sm:pb-6">
				<Logo />
				<h1
					className={clx("text-primary", {
						["hidden"]: !isOpen,
					})}
				>
					Savvy
					<span className="text-neutral700">
						Funds
					</span>
				</h1>
			</div>

			<ul className="flex items-stretch justify-stretch border-t border-t-primary/10 sm:flex-col sm:gap-4">
				<hr className="hidden border-dashed text-primary opacity-40 sm:inline-block"></hr>
				{appRoutes
					.filter(
						({ layout }) => layout === "app",
					)
					.map(({ path, title }) => (
						<li
							key={path}
							className="flex-grow hover:bg-secondary01/5 sm:hover:bg-neutral00"
						>
							<NavLink
								to={path}
								className={({ isActive }) =>
									clx(
										`flex items-center justify-center gap-2 text-neutral500 sm:justify-start`,
										{
											["bg-primary !text-neutral10 sm:rounded-full [&>*:first-child]:text-neutral10"]:
												isActive && isOpen,
											["bg-primary !text-neutral10  sm:bg-transparent [&>*:first-child]:bg-primary [&>*:first-child]:text-neutral10"]:
												isActive && !isOpen,
										},
									)
								}
							>
								<IconSidebar
									title={title}
									className={clx({
										["border sm:!border-neutral40 sm:bg-primary/5"]:
											!isOpen,
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
			</ul>
		</div>
	);
};

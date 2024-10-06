import clx from "classnames";

import {
	Dashboard,
	Goals,
	Income,
	Payment,
	Savings,
	Settings,
} from "@components/icons/sidebar";
import { AppRoute } from "src/routes";

type Props = {
	title: AppRoute["title"];
	className?: string;
};

const Icons = {
	dashboard: <Dashboard />,
	goals: <Goals />,
	income: <Income />,
	payment: <Payment />,
	savings: <Savings />,
	settings: <Settings />,
};

export const IconSidebar = ({
	title,
	className,
}: Props) => {
	return (
		<div
			className={clx(
				"inline-block border-transparent p-3 text-primary sm:rounded-[30px] sm:border",
				className,
			)}
		>
			{title in Icons ? Icons[title] : null}
		</div>
	);
};

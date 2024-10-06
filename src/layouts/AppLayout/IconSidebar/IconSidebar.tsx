import clx from "classnames";

import {
	CurrencySavingsCalc,
	Dashboard,
	Goals,
	Income,
	IrregularExpensesFunds,
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
	"irregular expenses founds": (
		<IrregularExpensesFunds />
	),
	savings: <Savings />,
	"currency savings calculator": (
		<CurrencySavingsCalc />
	),
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

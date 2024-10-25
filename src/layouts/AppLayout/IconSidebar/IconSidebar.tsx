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
	Logout
} from "@components/icons/sidebar";
import { AppRoute } from "src/routes";

type Props = {
	name: AppRoute["icon"];
	className?: string;
};

const Icons = {
	dashboard: <Dashboard />,
	goals: <Goals />,
	income: <Income />,
	payment: <Payment />,
	irregularExpensesFunds: <IrregularExpensesFunds />,
	savings: <Savings />,
	currencySavingsCalculator: <CurrencySavingsCalc />,
	settings: <Settings />,
	logout: <Logout/>
};

export const IconSidebar = ({ name, className }: Props) => {
	return (
		<div
			className={clx(
				"inline-block border-transparent p-3 text-primary sm:rounded-[30px] sm:border",
				className,
			)}
		>
			{name in Icons ? Icons[name] : null}
		</div>
	);
};

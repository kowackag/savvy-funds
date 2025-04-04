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
	Logout,
} from "@components/icons/sidebar";
import { AppRoute } from "src/routes";

type Props = {
	name: "logout" | AppRoute["icon"];
	className?: string;
};

const Icons = {
	dashboard: <Dashboard className="h-6 w-6" />,
	goals: <Goals className="h-6 w-6" />,
	income: <Income className="h-6 w-6" />,
	payment: <Payment className="h-6 w-6" />,
	irregularExpensesFunds: <IrregularExpensesFunds className="h-6 w-6" />,
	savings: <Savings />,
	currencySavingsCalculator: <CurrencySavingsCalc className="h-6 w-6" />,
	settings: <Settings className="h-6 w-6" />,
	logout: <Logout className="h-6 w-6" />,
};

export const IconSidebar = ({ name, className }: Props) => {
	return (
		<div
			className={clx(
				"inline-block border-transparent p-[10px] text-primary sm:rounded-[30px] sm:border sm:p-3",
				className,
			)}
		>
			{name in Icons ? Icons[name] : null}
		</div>
	);
};

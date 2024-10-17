import clx from "classnames";

import CurrencySavingsCalc from "./../../../components/icons/sidebar/currency-savings-calc.svg?react";
import Dashboard from "@components/icons/sidebar/dashboard.svg?react";
import Goals from "@components/icons/sidebar/goals.svg?react";
import Income from "@components/icons/sidebar/income.svg?react";
import Payment from "@components/icons/sidebar/payment.svg?react";
import Savings from "@components/icons/sidebar/savings.svg?react";
import Settings from "@components/icons/sidebar/settings.svg?react";
import IrregularExpensesFunds from "@components/icons/sidebar/irregular-exp-funds.svg?react";

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
	"irregular expenses founds": <IrregularExpensesFunds />,
	savings: <Savings />,
	"currency savings calculator": <CurrencySavingsCalc />,
	settings: <Settings />,
};

export const IconSidebar = ({ title, className }: Props) => {
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

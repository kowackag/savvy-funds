import { NavLink } from "react-router-dom";
import { PathType } from "../../../paths";
import { AppRoute } from "../../../routes";
import {
	Dashboard,
	Goals,
	Income,
	Payment,
	Savings,
	Settings,
} from "../../../components/icons/sidebar";

type Props = {
	title: AppRoute["title"];
	path: PathType;
};

const Icons = {
	dashboard: <Dashboard />,
	goals: <Goals />,
	income: <Income />,
	payment: <Payment />,
	savings: <Savings />,
	settings: <Settings />,
};

export const IconLink = ({ title, path }: Props) => {
	console.log(title);
	return (
		<NavLink to={path} className="">
			{title in Icons ? Icons[title] : null}
		</NavLink>
	);
};

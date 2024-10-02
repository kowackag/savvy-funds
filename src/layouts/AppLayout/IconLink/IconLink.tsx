import { NavLink } from "react-router-dom";
import { PathType } from "../../../paths";
import { Route, routes } from "../../../routes";
import {
  Dashboard,
  Goals,
  Income,
  Payment,
  Savings,
  Settings,
} from "../../../components/icons/sidebar";

// import { Dashboard } from "components/icons/sidebar";
// import { Income } from "/pages/Income/Income";

type Props = {
  title: Route["title"];
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
      {title && Icons[title]}
    </NavLink>
  );
};

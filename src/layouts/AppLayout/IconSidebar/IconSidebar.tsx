import clx from "classnames";

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

export const IconSidebar = ({ title, className }: Props) => {
  return (
    <div
      className={clx(
        "p-3 sm:border border-neutral00 inline-block sm:rounded-[30px] text-primary",
        className
      )}
    >
      {title in Icons ? Icons[title] : null}
    </div>
  );
};

import { ReactNode } from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Expenses } from "./pages/Expenses/Expenses";
import { Income } from "./pages/Income/Income";
import { IrregularExpensesFund } from "./pages/IrregularExpensesFund/IrregularExpensesFund";
import { NotFound } from "./pages/NotFound/NotFound";
import { Savings } from "./pages/Savings/Savings";
import { Settings } from "./pages/Settings/Settings";
import { Paths, PathType } from "./paths";

type Route = {
  path: PathType;
  element: ReactNode;
};

export const routes: Route[] = [
  { path: Paths.DASHBOARD, element: <Dashboard /> },
  { path: Paths.EXPENSES, element: <Expenses /> },
  { path: Paths.INCOME, element: <Income /> },
  { path: Paths.IRREGULAR_EXPENSES, element: <IrregularExpensesFund /> },
  { path: Paths.SAVINGS, element: <Savings /> },
  { path: Paths.SETTINGS, element: <Settings /> },
  { path: Paths.NOT_FOUND, element: <NotFound /> },
];

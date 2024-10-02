import { ReactNode } from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Expenses } from "./pages/Expenses/Expenses";
import { Income } from "./pages/Income/Income";
import { IrregularExpensesFund } from "./pages/IrregularExpensesFund/IrregularExpensesFund";
import { NotFound } from "./pages/NotFound/NotFound";
import { Savings } from "./pages/Savings/Savings";
import { Settings } from "./pages/Settings/Settings";
import { Paths, PathType } from "./paths";
import { LoginPage } from "./pages/Login/Login";
import { RegisterPage } from "./pages/Register/RegisterPage";

type Route = {
  path: PathType;
  element: ReactNode;
  isProtected: boolean;
};

export const routes: Route[] = [
  { path: Paths.DASHBOARD, element: <Dashboard />, isProtected: true },
  { path: Paths.EXPENSES, element: <Expenses />, isProtected: true },
  { path: Paths.INCOME, element: <Income />, isProtected: true },
  {
    path: Paths.IRREGULAR_EXPENSES,
    element: <IrregularExpensesFund />,
    isProtected: true,
  },
  { path: Paths.SAVINGS, element: <Savings />, isProtected: true },
  { path: Paths.SETTINGS, element: <Settings />, isProtected: true },
  { path: Paths.NOT_FOUND, element: <NotFound />, isProtected: true },
  { path: Paths.LOGIN, element: <LoginPage />, isProtected: false },
  { path: Paths.REGISTER, element: <RegisterPage />, isProtected: false },
];

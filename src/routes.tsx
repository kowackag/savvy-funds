import { ReactNode } from "react";

import { Dashboard } from "./pages/Dashboard/Dashboard";
// import { Expenses } from "./pages/Expenses/Expenses";
import { Payment } from "./pages/Payment/Payment";
import { Income } from "./pages/Income/Income";
import { IrregularExpensesFund } from "./pages/IrregularExpensesFund/IrregularExpensesFund";
import { NotFound } from "./pages/NotFound/NotFound";
import { Savings } from "./pages/Savings/Savings";
import { Settings } from "./pages/Settings/Settings";
import { LoginPage } from "./pages/Login/Login";
import { RegisterPage } from "./pages/Register/RegisterPage";

import { Paths, PathType } from "./paths";

export type Route = {
  path: PathType;
  element: ReactNode;
  isProtected: boolean;
  title?: string;
  icon?: string;
};

export const routes: Route[] = [
  {
    path: Paths.DASHBOARD,
    element: <Dashboard />,
    title: "Dashboard",
    isProtected: true,
  },
  {
    path: Paths.INCOME,
    element: <Income />,
    title: "Income",
    isProtected: true,
  },
  // { path: Paths.EXPENSES, element: <Expenses />, title: "Expenses", isProtected: true },
  {
    path: Paths.PAYMENT,
    element: <Payment />,
    title: "Payment",
    isProtected: true,
  },
  {
    path: Paths.IRREGULAR_EXPENSES,
    element: <IrregularExpensesFund />,
    title: "",
    isProtected: true,
  },
  // { path: Paths.GOALS, element: <Goals />, title: "Goals", isProtected: true },
  {
    path: Paths.SAVINGS,
    element: <Savings />,
    title: "Savings",
    isProtected: true,
  },
  {
    path: Paths.SETTINGS,
    element: <Settings />,
    title: "Settings",
    isProtected: true,
  },
  {
    path: Paths.NOT_FOUND,
    element: <NotFound />,
    title: "",
    isProtected: true,
  },
  {
    path: Paths.LOGIN,
    element: <LoginPage />,
    title: "Login",
    isProtected: false,
  },
  {
    path: Paths.REGISTER,
    element: <RegisterPage />,
    title: "Register",
    isProtected: false,
  },
];

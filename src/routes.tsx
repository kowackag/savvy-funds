import { ReactNode } from "react";

import { Dashboard } from "./pages/Dashboard/Dashboard";
// import { Expenses } from "./pages/Expenses/Expenses";
import { Payment } from "./pages/Payment/Payment";
import { Income } from "./pages/Income/Income";
// import { IrregularExpensesFund } from "./pages/IrregularExpensesFund/IrregularExpensesFund";
// import { NotFound } from "./pages/NotFound/NotFound";
import { Savings } from "./pages/Savings/Savings";
import { Settings } from "./pages/Settings/Settings";
import { LoginPage } from "./pages/Login/Login";
import { RegisterPage } from "./pages/Register/RegisterPage";

import { Paths, PathType } from "./paths";
import { Goals } from "./pages/Goals/Goals";

type TitleRoute =
	| "dashboard"
	| "income"
	| "payment"
	| "goals"
	| "savings"
	| "settings"
	| "Login"
	| "Register";

export type Route = {
	path: PathType;
	element: ReactNode;
	isProtected: boolean;
	title: TitleRoute;
	icon?: string;
	layout: "app" | "auth";
};

export type AppRoute = Extract<Route, { layout: "app" }>;

export const routes: Route[] = [
	{
		path: Paths.DASHBOARD,
		element: <Dashboard />,
		title: "dashboard",
		isProtected: true,
		layout: "app",
	},
	{
		path: Paths.INCOME,
		element: <Income />,
		title: "income",
		isProtected: true,
		layout: "app",
	},
	// { path: Paths.EXPENSES, element: <Expenses />, title: "Expenses", isProtected: true },
	{
		path: Paths.PAYMENT,
		element: <Payment />,
		title: "payment",
		isProtected: true,
		layout: "app",
	},
	// {
	//   path: Paths.IRREGULAR_EXPENSES,
	//   element: <IrregularExpensesFund />,
	//   title: "",
	//   isProtected: true,
	// },
	{
		path: Paths.GOALS,
		element: <Goals />,
		title: "goals",
		isProtected: true,
		layout: "app",
	},
	{
		path: Paths.SAVINGS,
		element: <Savings />,
		title: "savings",
		isProtected: true,
		layout: "app",
	},
	{
		path: Paths.SETTINGS,
		element: <Settings />,
		title: "settings",
		isProtected: true,
		layout: "app",
	},
	// {
	//   path: Paths.NOT_FOUND,
	//   element: <NotFound />,
	//   title: "",
	//   isProtected: true,
	// },
	{
		path: Paths.LOGIN,
		element: <LoginPage />,
		title: "Login",
		isProtected: false,
		layout: "auth",
	},
	{
		path: Paths.REGISTER,
		element: <RegisterPage />,
		title: "Register",
		isProtected: false,
		layout: "auth",
	},
];

const isAppRoute = (route: Route): route is AppRoute => route.layout === "app";

export const appRoutes: AppRoute[] = routes.filter(isAppRoute);
export const authRoutes = routes.filter(({ layout }) => layout === "auth");

export const protectedRoutes = routes.filter(({ isProtected }) => isProtected);
export const unprotectedRoutes = routes.filter(({ isProtected }) => !isProtected);

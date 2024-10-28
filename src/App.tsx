import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout/AppLayout";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";

import { AuthContext } from "./context/AuthContext";
import { appRoutes, authRoutes } from "./routes";
import { Paths } from "./paths";
import "./config/i18n";
import { useTranslation } from "react-i18next";

function App() {
	const context = useContext(AuthContext);
	const { i18n } = useTranslation();
	useEffect(()=>{	i18n.changeLanguage("pl");},[])

	return (
		<Routes>
			<Route element={<AppLayout />}>
				{appRoutes.map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={context.user ? element : <Navigate to={Paths.LOGIN} />}
					/>
				))}
			</Route>
			<Route path="/auth" element={<AuthLayout />}>
				{authRoutes.map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={context.user ? <Navigate to={Paths.DASHBOARD} /> : element}
					/>
				))}
			</Route>
		</Routes>
	);
}

export default App;

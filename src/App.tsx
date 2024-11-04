import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout/AppLayout";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";

import { AuthContext } from "./context/AuthContext";
import { appRoutes, authRoutes } from "./routes";
import { Paths } from "./paths";

function App() {
	const context = useContext(AuthContext);

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

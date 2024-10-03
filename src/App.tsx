import { Routes, Route } from "react-router-dom";
import { appRoutes, authRoutes } from "./routes";
import { AppLayout } from "./layouts/AppLayout/AppLayout";
import { AuthLayout } from "./AuthLayout";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        {authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

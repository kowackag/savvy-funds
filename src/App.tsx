import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { AppLayout } from "./AppLayout";
import { AuthLayout } from "./AuthLayout";

function App() {
  const protectedRoutes = routes.filter(({ isProtected }) => isProtected);
  const unprotectedRoutes = routes.filter(({ isProtected }) => !isProtected);
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {protectedRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        {unprotectedRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

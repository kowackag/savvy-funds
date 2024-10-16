import React from 'react'
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { incomeServices } from './services/income';

function App() {

  incomeServices.getAll().then((res) => console.log(res))

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;

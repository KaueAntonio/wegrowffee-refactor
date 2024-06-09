import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./GlobalStyle.css";

import { Routes } from "./Routes/routes";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      {Routes.map((route) => (
        <Route
          key={route.id}
          element={<route.element />}
          path={route.path}
          index={route.isIndex}
        />
      ))}
    </>
  )
);

export default App;

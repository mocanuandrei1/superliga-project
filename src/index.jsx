import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Fixtures from "./pages/Fixtures/Fixtures";
import Results from "./pages/Results/Results";
import Stats from "./pages/Stats/Stats";
import Tables from "./pages/Tables/Tables";
import Transfers from "./pages/Transfers/Transfers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="fixtures/" element={<Fixtures />} />
      <Route path="results/" element={<Results />} />
      <Route path="stats/" element={<Stats />} />
      <Route path="tables/" element={<Tables />} />
      <Route path="transfers/" element={<Transfers />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

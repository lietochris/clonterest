import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Index } from "./pages/landing/Index";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<Index />} />
      </Route>
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

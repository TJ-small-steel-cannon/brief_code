import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Page from "../pages/Page/Page";
import Login from "../component/Login/Login";

export default function Router() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <Page/>,
    },
    {
      path: "/register",
      element: <Page />,
    },
  ]);
  return element;
}

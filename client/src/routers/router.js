import React from "react";
import MainRoot from "../pages/MainRoot";
import Home from "../pages/home";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      }
    ]
  },
];
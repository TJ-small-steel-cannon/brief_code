import React from 'react'
import { useRoutes } from "react-router-dom";
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import Page from '../pages/Page/Page';

export default function PageRouter() {
    const element = useRoutes([
        {
          path: "/login",
          element: <Page/>,
        },
        {
            path: "/Register",
            element: <Register/>,
          },
      ]);
      return element;
}

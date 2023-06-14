import React from 'react'
import { useRoutes } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

export default function PageRouter() {
    const element = useRoutes([
        {
          path: "/login",
          element: <LoginPage/>,
        },
        {
            path: "/Register",
            element: <RegisterPage/>,
          },
      ]);
      return element;
}

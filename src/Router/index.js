import * as React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from '../Login/login';
import RegisterPage from "../Register/register";
import ForgotPassPage from "../ForgotPassword/forgotPassword";
import App from "../App";

function LoggedRouters() {
  return (
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassPage />} />
        <Route path="/" element={<App />} />
      </Routes>
  );
}

export { LoggedRouters }
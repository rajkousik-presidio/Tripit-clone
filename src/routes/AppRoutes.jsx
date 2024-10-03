import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import PricingPage from "../pages/PricingPage/PricingPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Layout from "../components/Layout/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/web" replace />} />
        <Route
          path="/web"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/web/pro/pricing"
          element={
            <Layout>
              <PricingPage />
            </Layout>
          }
        />
        <Route path="/account/login" element={<LoginPage />} />
        <Route path="/account/create" element={<SignupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

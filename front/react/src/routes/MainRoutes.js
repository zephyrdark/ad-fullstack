import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import NotFoundPage from '../pages/error/NotFoundPage';
import LandingPage from "../pages/LandingPage";
import WalletPage from "../pages/WalletPage";
import SupportPage from "../pages/SupportPage";
import SettingsPage from "../pages/settings/SettingsPage";
import BackTestPage from "../admin/pages/Backtest/BacktestPage";
import BackTestResultPage from "../admin/pages/Backtest/BackTestResultPage";

const mainRoutes = [
    <Route key="landing" path="/landing" element={<LandingPage />} />,
    <Route key="home" path="/" element={<HomePage />} />,
    <Route key="news" path="/news" element={<NewsPage />} />,
    <Route key="wallet" path="/wallet" element={<WalletPage />} />,
    <Route key="support" path="/support" element={<SupportPage />} />,
    <Route key="settings" path="/settings" element={<SettingsPage />} />,
  //  <Route key="dashboard" path="/dashboard" element={<DashboardPage />} />,
    <Route key="not-found" path="*" element={<NotFoundPage />} />,
    <Route key="CustomerbackTest" path="/backtest" element={<BackTestPage />} />,
    <Route key="CustomerbackTestResult" path="/backtest-result" element={<BackTestResultPage />} />,
];

export default mainRoutes;
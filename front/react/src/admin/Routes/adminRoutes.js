import AdminViewUsersPage from "../pages/AdminViewUsersPage";
import { Route } from "react-router-dom";
import ManageTickersPage from "../pages/ManageTickersPage";
import BackTestPage from "../pages/Backtest/BacktestPage";
import AdminManageLiveTradingPage from "../pages/LiveTrading/AdminManageLiveTradingPage";
import BackTestResultPage from "../pages/Backtest/BackTestResultPage";
import TransactionsPage from "../pages/LiveTrading/TransactionsPage";
import React from "react";
import HomePage from "../../pages/HomePage";

const adminRoutes = (
    <>
            <Route key="account" path="/admin/manage-user" element={<AdminViewUsersPage />} />
            <Route key="manage-tickers" path="/admin/manage-tickers" element={<ManageTickersPage />} />
             <Route key="home" path="/" element={<HomePage />} />,
            <Route key="backTest" path="/backtest" element={<BackTestPage />} />
            <Route key="manageLiveTrading" path="/admin/managelivetrading" element={<AdminManageLiveTradingPage />} />
            <Route key="backTestResult" path="/backtest-result" element={<BackTestResultPage />} />
            <Route key="transactions" path="/admin/transactions" element={<TransactionsPage />} />
    </>
);

export default adminRoutes;

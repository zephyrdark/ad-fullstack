import React from 'react';
import { BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/elements/alerts/error/ErrorBoundary';
import authRoutes from './routes/AuthRoutes';
import mainRoutes from './routes/MainRoutes';
import NavigationBarForWeb from './pages/NavigationBarForWeb';
import settingsRoutes from './routes/SettingsRoutes';
import NaviRoutes from './routes/NaviRoutes';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </Router>
    );
};

const AppContent = () => {
    const location = useLocation();

    //these routes not need navi bar
    const noNavRoutes = ['/login', '/register', '/forgot-password'];

    return (
        <>
            {!noNavRoutes.includes(location.pathname) && <NavigationBarForWeb />}
            <ErrorBoundary>
                <Routes>
                    {NaviRoutes}
                    {authRoutes}
                    {mainRoutes}
                    {settingsRoutes}
                </Routes>
            </ErrorBoundary>
        </>
    );
};

export default App;

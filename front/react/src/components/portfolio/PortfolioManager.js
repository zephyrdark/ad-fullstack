import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePortfolio from "../../hooks/usePortfolio";
import PortfolioDetails from "../../components/portfolio/PortfolioDetails";
import PortfolioAddFunds from "../../components/portfolio/PortfolioAddFunds";
import PortfolioWithdrawFunds from "../../components/portfolio/PortfolioWithdrawFunds";
import Heading from "../../components/common/text/Heading";

const PortfolioManager = ({ portfolioType, title }) => {
    const { portfolio, addFunds, withdrawFunds } = usePortfolio(portfolioType);
    const navigate = useNavigate();

    const handleNavigateToRules = () => {
        navigate('/portfolio/rules', { state: { portfolioType } });
    };

    return (
        <div>
            <Heading>{title}</Heading>
            <PortfolioDetails portfolio={portfolio} />
            <PortfolioAddFunds addFunds={addFunds} />
            <PortfolioWithdrawFunds withdrawFunds={withdrawFunds} currentBalance={portfolio.allocatedBalance} />
            <button onClick={handleNavigateToRules}>Rules page</button>
        </div>
    );
};

export default PortfolioManager;

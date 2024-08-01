import React, { useEffect, useState } from 'react';
import InvestorProfileService from "../../../../services/InvestorProfileService";

const RecommendedPortfolioType = () => {
    const [recommendedPortfolioType, setRecommendedPortfolioType] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInvestorProfile = async () => {
            try {
                const response = await InvestorProfileService.getInvestorProfile();
                const profileData = response.data.data;
                setRecommendedPortfolioType(profileData.recommendedPortfolioType);
                setLoading(false);
            } catch (error) {
                setError('Error fetching investor profile');
                setLoading(false);
            }
        };

        fetchInvestorProfile();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <p>Your recommended portfolio type is: {recommendedPortfolioType}</p>
        </div>
    );
};

export default RecommendedPortfolioType;

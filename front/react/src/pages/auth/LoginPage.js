import React from 'react';
import LoginForm from '../../components/form/auth/LoginForm';
import Text from '../../components/common/Text';

const LoginPage = () => {
    return (
        <div>
            <Text variant="h2">Login</Text>
            <LoginForm />
        </div>
    );
};

export default LoginPage;

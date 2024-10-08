import React from 'react';
import { Button } from 'react-native-paper';

/**
 * Usage
 * <ButtonPrimary title="Login" onPress={handleLogin} />
 */
const ButtonPrimary = ({ title, onPress, style, ...props }) => {
    return (
        <Button
            mode="contained"
            onPress={onPress}
            style={[{ backgroundColor: '#000' }, style]}
            {...props}
        >
            {title}
        </Button>
    );
};

export default ButtonPrimary;

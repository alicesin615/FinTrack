import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@screens/Home';
import { useTheme } from 'styled-components/native';

const Stack = createStackNavigator();

export function AppNavigator() {
    const theme = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.background,
                    padding: 16
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

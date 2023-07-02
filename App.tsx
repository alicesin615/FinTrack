import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '@styles/theme';
import { AppNavigator } from '@navigation/AppNavigator';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme.light}>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;

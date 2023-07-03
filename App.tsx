import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '@styles/theme';
import { BottomNavigationBar } from '@navigation/BottomNavigationBar';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme.light}>
            <NavigationContainer>
                <BottomNavigationBar />
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import Toast from 'react-native-toast-message';
import { store } from './src/store';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '@styles/theme';
import { AppNavigator } from '@navigation/AppNavigator';
import { toastConfig } from '@components/Toasts';

function App(): JSX.Element {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme.light}>
                <AppNavigator />
                <Toast config={toastConfig} />
            </ThemeProvider>
        </Provider>
    );
}

export default App;

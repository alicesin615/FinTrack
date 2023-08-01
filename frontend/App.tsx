import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import Toast from 'react-native-toast-message';
import { store } from './src/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '@styles/theme';
import { BottomNavigationBar } from '@navigation/BottomNavigationBar';
import { Login, Register } from '@screens/Authentication';
import { toastConfig } from '@components/Toasts';

function App(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const Stack = createStackNavigator();
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme.light}>
                <NavigationContainer>
                    {isLoggedIn ? (
                        <BottomNavigationBar />
                    ) : (
                        <Stack.Navigator
                            initialRouteName="Register"
                            screenOptions={{
                                cardStyle: {
                                    backgroundColor:
                                        theme.light.colors.background,
                                    paddingHorizontal: 24,
                                    paddingVertical: 100,
                                    paddingBottom: 40
                                }
                            }}
                        >
                            <Stack.Screen
                                name="Register"
                                component={Register}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Stack.Screen
                                name="Login"
                                component={Login}
                                options={{
                                    headerShown: false
                                }}
                            />
                        </Stack.Navigator>
                    )}
                </NavigationContainer>
                <Toast config={toastConfig} />
            </ThemeProvider>
        </Provider>
    );
}

export default App;

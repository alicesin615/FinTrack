import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '@styles/theme';
import { BottomNavigationBar } from '@navigation/BottomNavigationBar';
import { Login } from '@screens/Login';

function App(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const Stack = createStackNavigator();
    return (
        <ThemeProvider theme={theme.light}>
            <NavigationContainer>
                {isLoggedIn ? (
                    <BottomNavigationBar />
                ) : (
                    <Stack.Navigator
                        screenOptions={{
                            cardStyle: {
                                backgroundColor: theme.light.colors.background,
                                paddingHorizontal: 24,
                                paddingVertical: 100
                            }
                        }}
                    >
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
        </ThemeProvider>
    );
}

export default App;

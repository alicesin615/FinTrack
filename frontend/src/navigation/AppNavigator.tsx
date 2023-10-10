import React, { useEffect, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { BottomNavigationBar } from './BottomNavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import { Login, Register } from '@screens/Authentication';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export function AppNavigator() {
    const theme = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        Keychain.getGenericPassword().then((credentials) => {
            if (credentials) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [dispatch]);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <BottomNavigationBar />
            ) : (
                <Stack.Navigator
                    initialRouteName="Register"
                    screenOptions={{
                        cardStyle: {
                            backgroundColor: theme.colors.background,
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
    );
}

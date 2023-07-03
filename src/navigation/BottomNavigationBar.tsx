import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Transactions } from '@screens/index';

import styled, { useTheme } from 'styled-components/native';

const Tab = createBottomTabNavigator();

interface TabScreenProps {
    name: string;
    component: any;
}
const TabScreen = ({ name, component }: TabScreenProps) => {
    <Tab.Screen name={name} component={component} />;
};
export function BottomNavigationBar() {
    const theme = useTheme();

    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen name="Dashboard" component={Home} />
            <Tab.Screen name="Transactions" component={Transactions} />
        </Tab.Navigator>
    );
}

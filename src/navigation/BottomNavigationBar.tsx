import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Transactions } from '@screens/index';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'styled-components/native';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

interface TabScreenProps {
    children?: React.ReactNode;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const PostNewRecordTab = ({ children, onPress }: TabScreenProps) => {
    const theme = useTheme();

    return (
        <TouchableOpacity
            style={{
                top: -24,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 48,
                    backgroundColor: theme.colors.primary
                }}
            >
                {children}
            </View>
        </TouchableOpacity>
    );
};
export function BottomNavigationBar() {
    const theme = useTheme();

    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen
                name="Dashboard"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesomeIcon
                                name="bar-chart-o"
                                size={24}
                                color={
                                    focused
                                        ? theme.colors.primary
                                        : theme.colors.lightGray_2
                                }
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Post"
                component={Transactions}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <AntDesignIcon
                                name="plus"
                                size={32}
                                color={theme.colors.white}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => <PostNewRecordTab {...props} />
                }}
            />
            <Tab.Screen
                name="Transactions"
                component={Transactions}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Ionicon
                                name="person"
                                size={24}
                                color={
                                    focused
                                        ? theme.colors.primary
                                        : theme.colors.lightGray_2
                                }
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

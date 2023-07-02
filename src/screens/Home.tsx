import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to Detail" />
        </View>
    );
}

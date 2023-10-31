import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from '@components/Card';

export function Dashboard() {
    return (
        <ScrollView>
            <Card title="Monthly Spending"></Card>
        </ScrollView>
    );
}

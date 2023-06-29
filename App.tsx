import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/theme';
import { ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.light.colors.background
    }
});

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme.light}>
            <ScrollView style={styles.container}></ScrollView>
        </ThemeProvider>
    );
}

export default App;

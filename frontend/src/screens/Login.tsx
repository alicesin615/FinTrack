import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import { PrimaryText } from '@components/Text';
import { Input } from '@components/Input';

export function Login() {
    const theme = useTheme();

    return (
        <View style={loginStyles.container}>
            <PrimaryText
                style={{
                    fontWeight: '600',
                    fontSize: 40,
                    color: theme.colors.primary
                }}
            >
                Log In
            </PrimaryText>
            <View style={loginStyles.inputContainer}>
                <PrimaryText>Email Address</PrimaryText>
                <Input />
            </View>
            <View style={loginStyles.inputContainer}>
                <PrimaryText>Password</PrimaryText>
                <Input />
            </View>
        </View>
    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 24
    },
    inputContainer: {
        flexDirection: 'column',
        gap: 12
    }
});

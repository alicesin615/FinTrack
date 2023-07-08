import { Text, View, StyleSheet, TextInput } from 'react-native';
import { PrimaryText } from '@components/Text';
import { Input } from '@components/Input';

export function Login() {
    return (
        <View style={loginStyles.container}>
            <PrimaryText style={{ fontWeight: '600', fontSize: 40 }}>
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
        // padding: 24,
        // backgroundColor: '#eaeaea'
    },
    inputContainer: {
        flexDirection: 'column',
        gap: 12
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

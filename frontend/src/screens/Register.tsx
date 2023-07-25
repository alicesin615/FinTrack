import { Text, View, StyleSheet, TextInput } from 'react-native';
import { PrimaryText } from '@components/Text';
import { Input } from '@components/Input';

export function Register() {
    return (
        <View style={registerStyles.container}>
            <PrimaryText style={{ fontWeight: '600', fontSize: 40 }}>
                Register
            </PrimaryText>
            <View style={registerStyles.inputContainer}>
                <PrimaryText scale="small">Email Address</PrimaryText>
                <Input />
            </View>
            <View style={registerStyles.inputContainer}>
                <PrimaryText>Password</PrimaryText>
                <Input />
            </View>
        </View>
    );
}

const registerStyles = StyleSheet.create({
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

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@models/navigation.model';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { PrimaryText, MutedText } from '@components/Text';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

function Register() {
    const theme = useTheme();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={registerStyles.container}>
            <PrimaryText style={{ fontWeight: '600', fontSize: 40 }}>
                Register
            </PrimaryText>
            <View style={registerStyles.inputContainer}>
                <PrimaryText>Username</PrimaryText>
                <Field
                    name="username"
                    component={Input}
                    placeholder="Username"
                />
            </View>
            <View style={registerStyles.inputContainer}>
                <PrimaryText>Email Address</PrimaryText>
                <Field
                    name="email"
                    component={Input}
                    placeholder="Email Address"
                />
            </View>
            <View style={registerStyles.inputContainer}>
                <PrimaryText>Password</PrimaryText>
                <Input secureTextEntry placeholder="Secure password only" />
            </View>
            <Button style={registerStyles.buttonContainer}>
                Create Account
            </Button>
            <View style={registerStyles.signInContainer}>
                <MutedText>Already have an account?</MutedText>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <MutedText style={{ color: theme.colors.primary }}>
                        Sign In
                    </MutedText>
                </TouchableOpacity>
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
    },
    buttonContainer: {
        marginTop: 'auto'
    },
    signInContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4
    }
});

export default reduxForm({ form: 'register' })(Register);

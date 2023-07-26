import { View, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { PrimaryText } from '@components/Text';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

function Register() {
    return (
        <View style={registerStyles.container}>
            <PrimaryText style={{ fontWeight: '600', fontSize: 40 }}>
                Register
            </PrimaryText>
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
            <Button style={registerStyles.buttonContainer}>Confirm</Button>
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
    }
});

export default reduxForm({ form: 'register' })(Register);

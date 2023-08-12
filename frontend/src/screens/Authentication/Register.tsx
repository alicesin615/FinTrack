import { View, TouchableOpacity } from 'react-native';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import * as Keychain from 'react-native-keychain';
import Toast from 'react-native-toast-message';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@models/navigation.model';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useRegisterMutation } from '@api/register';
import { RegisterRequestParams } from '@models/apiRequest.model';
import { ApiErrorResonse } from '@models/apiResponse.model';
import { PrimaryText, MutedText } from '@components/Text';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { authStyles } from './styles';

interface RegisterFormProps extends InjectedFormProps {}
function Register({ handleSubmit, submitting }: RegisterFormProps) {
    const theme = useTheme();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [register, { data, isLoading: isRegistering, error }] =
        useRegisterMutation();

    const onSubmit = (values: RegisterRequestParams) => {
        if (!submitting) {
            register(values)
                .unwrap()
                .then(async (payload) => {
                    try {
                        const credentials = await Keychain.setGenericPassword(
                            values?.username,
                            payload?.accessToken
                        );
                    } catch (error) {
                        console.log("Keychain couldn't be access", error);
                    }

                    Toast.show({
                        type: 'success',
                        text1: 'Successfully Registered'
                    });
                    navigation.navigate('Login');
                })
                .catch((error: ApiErrorResonse) => {
                    console.log('error here', error);
                    Toast.show({
                        type: 'error',
                        text1: error?.data?.message
                    });
                });
        }
    };

    return (
        <View style={authStyles.container}>
            <PrimaryText style={{ fontWeight: '600', fontSize: 40 }}>
                Register
            </PrimaryText>
            <View style={authStyles.inputContainer}>
                <PrimaryText>Username</PrimaryText>
                <Field
                    name="username"
                    component={Input}
                    placeholder="Username"
                />
            </View>
            <View style={authStyles.inputContainer}>
                <PrimaryText>Email Address</PrimaryText>
                <Field
                    name="email"
                    component={Input}
                    placeholder="Email Address"
                />
            </View>
            <View style={authStyles.inputContainer}>
                <PrimaryText>Password</PrimaryText>
                <Field
                    name="password"
                    component={Input}
                    placeholder="Password"
                    type="password"
                />
            </View>
            <Button
                style={authStyles.buttonContainer}
                onPress={handleSubmit(onSubmit)}
            >
                Create Account
            </Button>
            <View style={authStyles.signInContainer}>
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

export default reduxForm({ form: 'register' })(Register);

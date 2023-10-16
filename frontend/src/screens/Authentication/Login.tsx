import { View, TouchableOpacity } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { useTheme } from 'styled-components/native';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { MutedText, PrimaryText } from '@components/Text';
import { Input } from '@components/Input';
import { authStyles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@models/navigation.model';
import { Button } from '@components/Button';
import { useLoginMutation } from '@api/login';
import { LoginRequestParams } from '@models/apiRequest.model';
import Toast from 'react-native-toast-message';
import { ApiErrorResonse } from '@models/apiResponse.model';
import { useGetLoggedinUserQuery } from '@api/user';

function Login({ handleSubmit, submitting }: InjectedFormProps) {
    const theme = useTheme();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [login] = useLoginMutation();
    const { data, isLoading, error } = useGetLoggedinUserQuery();

    const onSubmit = async (values: LoginRequestParams) => {
        login(values)
            .unwrap()
            .then(async (payload) => {
                const accessToken = payload?.accessToken;
                await Keychain.setGenericPassword('access_token', accessToken);
                Toast.show({
                    type: 'success',
                    text1: 'Successful Login'
                });
                navigation.navigate('Root');
            })
            .catch((error: ApiErrorResonse) => {
                Toast.show({
                    type: 'error',
                    text1: error?.data?.message
                });
            });
    };
    return (
        <View style={authStyles.container}>
            <PrimaryText
                style={{
                    fontWeight: '600',
                    fontSize: 40,
                    color: theme.colors.primary
                }}
            >
                Log In
            </PrimaryText>
            <View style={authStyles.inputContainer}>
                <PrimaryText>Email Address</PrimaryText>
                <Field name="email" component={Input} placeholder="Email" />
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
                Login
            </Button>
            <View style={authStyles.signInContainer}>
                <MutedText>Don't have an account?</MutedText>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                >
                    <MutedText style={{ color: theme.colors.primary }}>
                        Register
                    </MutedText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default reduxForm({ form: 'login' })(Login);

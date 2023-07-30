import { View } from 'react-native';
import styled from 'styled-components/native';
import { WrappedFieldProps } from 'redux-form';

const StyledInput = styled.TextInput`
    border-color: ${({ theme }) => theme.colors.lightGray3};
    border-width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 12px 16px;
    border-radius: 10px;
    height: 52px;
    font-size: 16px;
`;
interface InputProps extends WrappedFieldProps {
    type?: 'text' | 'password' | 'number';
}
export const Input = (props?: InputProps) => {
    return (
        <View>
            <StyledInput
                value={props?.input.value}
                onChangeText={props?.input.onChange}
                onBlur={props?.input.onBlur}
                secureTextEntry={props?.type === 'password'}
                {...props}
            />
        </View>
    );
};

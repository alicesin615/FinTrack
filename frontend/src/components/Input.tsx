import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
    border-color: ${({ theme }) => theme.colors.lightGray3};
    border-width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 12px 16px;
    border-radius: 10px;
    height: 52px;
    font-size: 16px;
`;

interface InputProps extends TextInputProps {
    style?: object;
}

export const Input = ({ style, ...rest }: InputProps) => {
    return <StyledInput style={style} {...rest} />;
};

import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
    styleType?: 'primary' | 'secondary';
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props) =>
        props?.styleType === 'primary'
            ? props.theme.colors.primary
            : props.theme.colors.secondary};
    padding: 16px 20px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.Text<ButtonProps>`
    font-size: 16px;
    color: ${(props) =>
        props.styleType === 'primary' ? '#ffffff' : '#007bff'};
`;

export const Button: React.FC<ButtonProps> = ({
    styleType = 'primary',
    children,
    ...rest
}) => {
    return (
        <ButtonContainer styleType={styleType} activeOpacity={0.6} {...rest}>
            <ButtonText styleType={styleType}>{children}</ButtonText>
        </ButtonContainer>
    );
};

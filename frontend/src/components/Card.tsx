import styled from 'styled-components/native';
import { CardTitleText } from './Text';

const CardContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: 16px;
`;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
}

export function Card({ title, children, ...rest }: CardProps) {
    return (
        <CardContainer>
            {title && <CardTitleText>{title}</CardTitleText>}
            {children}
        </CardContainer>
    );
}

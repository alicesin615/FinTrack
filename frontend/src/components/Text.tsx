import styled from 'styled-components/native';
import { TextProps } from 'react-native';
import { fonts, FontScale } from '@styles/fonts';

interface CustomTextProps extends TextProps {
    scale?: FontScale;
}
export const PrimaryText = styled.Text<CustomTextProps>`
    color: ${({ theme }) => theme.colors.darkGray2};
    font-size: ${({ scale = 'base' }) => fonts?.[scale]?.fontSize};
    font-weight: 500;
`;

export const CardTitleText = styled.Text<TextProps>`
    color: ${({ theme }) => theme.colors.lightGray2};
    font-size: 16px;
    font-weight: 500;
`;

// const styles = StyleSheet.create({
//     base: { color: BLACK },
//     H1: {
//       fontSize: 30,
//       lineHeight: 41,
//     },
//     H2: {
//       fontSize: 24,
//       lineHeight: 33,
//     },
//     H3: {
//       fontSize: 16,
//       lineHeight: 20,
//     },
//     H4: {
//       fontSize: 14,
//       lineHeight: 19,
//     },
//     P1: {
//       fontSize: 16,
//       lineHeight: 20,
//     },
//     P2: {
//       fontSize: 14,
//       lineHeight: 19,
//     },
//     P3: {
//       fontSize: 10,
//       lineHeight: 14,
//     },
//   });

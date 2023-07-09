import { colors } from './colors';

const lightColors = {
    ...colors,
    background: '#f1f5f9',
    cardBackground: '#ffffff'
};

const darkColors = {
    ...colors
};

export const theme = {
    light: {
        colors: lightColors
    },
    dark: {
        colors: darkColors
    }
};

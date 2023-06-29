import { colors } from './colors';

const lightColors = {
    ...colors,
    background: 'eff6ff'
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

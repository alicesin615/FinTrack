import { colors } from './colors';

export interface Colors {
    [key: string]: string;
}

const lightColors: Colors = {
    ...colors,
    background: '#f1f5f9',
    cardBackground: '#ffffff'
};

const darkColors: Colors = {
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

export type FontScale = 'small' | 'base' | 'large';

interface FontProps {
    fontSize: string;
    fontWeight: string;
}

export const fonts: Record<FontScale, FontProps> = {
    small: {
        fontSize: '14px',
        fontWeight: '400'
    },
    base: {
        fontSize: '16px',
        fontWeight: '400'
    },
    large: {
        fontSize: '20px',
        fontWeight: '700'
    }
};

export type ThemeName = 'light' | 'dark';
type ColorKey = 'primary' | 'background' | 'scondary';

interface Theme {
    name: ThemeName;
    color: Record<ColorKey, string>;
}

export const light: Theme = {
    name: 'light',
    color: {
        primary: 'brown',
        background: 'lightgray',
        scondary: 'blue',
    },
};

export const dark: Theme = {
    name: 'dark',
    color: {
        primary: 'coral',
        background: 'midnightblue',
        scondary: 'darkgreen',
    },
};
type ColorsTheme = {
    primary: {
        20: string;
        50: string;
        100: string;
    };
    darkBrown: {
        300: string /* 300 - #1C1503 */;
    };
    secondary: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
    };
    grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    green: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
    white: {
        100: string;
        200: string;
        300: string;
    };
    black: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        600: string;
        700: string;
    };
    blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        600: string;
    };
    lightBrown: {
        50: string;
        400: string;
    };
    red: {
        /* 100- #FECECD */
        100: string;

        /* 200- #F04438 */
        200: string;

        /* 300- #FDE7E6  */
        300: string;

        /* 400- #F57E77*/
        400: string;
    };
};

type FontSizes = {
    custom: (fontSize: number) => string /* custom */;

    small: string /* small - 0.75 rem */;

    normal: string /* normal 0.88rem */;

    medium: string /* medium 1rem  */;

    heading: string /* heading 2.25rem */;
};

type FontFamily = {
    heading: string; //heading ZodiakBold */

    zodiak: string; //zodiak

    belonid: string; // belonid
};

export type Spacing = {
    small: string;
    normal: string;
    medium: string;
    large: string;
    button: string;
    input: string;
    nav: string;
    double: (value: number, value2: number) => string;
    custom: (val: number) => string;
};

export type FontWeights = "light" | "regular" | "bold" | "black";

export interface CustomTheme {
    colors: ColorsTheme;
    fontSize: FontSizes;
    fontFamily: FontFamily;
    spacing: Spacing;
    media: any;
    borderRadius;
    border;
    fontWeights: { [key in FontWeights]: number };
}

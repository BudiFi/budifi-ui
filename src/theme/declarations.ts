import { Spacing, FontWeights } from "./interfaces/styled";

const colors = {
    primary: {
        20: "#FDEEDD",
        50: "#FBC787",
        100: "#F7941E",
    },
    darkBrown: {
        300: "#1C1503",
    },
    secondary: {
        100: "#FDEEDD",
        200: "#FBFBF0",
        300: "#F2C94C",
        400: "#E2E8F0",
        500: "#FFF1C8",
        600: "#BFBFBF",
        700: "#F5F5F5",
    },
    grey: {
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#F4F4F4",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#ABB0BC",
        600: "#667085",
        700: "#737373",
        800: "#808080",
        900: "rgba(255, 255, 255, 0.3)",
    },
    green: {
        100: "#EFFFE8",
        200: "#EAFFED",
        300: "#8BD297",
        400: "#4ADE80",
        500: "#4CD964",
        600: "#3DC13C",
        700: "#2D912D",
        800: "#406829",
    },
    white: {
        100: "#FFFFFF",
        200: "#F8F9FA",
        300: "rgba(255, 255, 255, 0.4)",
    },
    black: {
        50: "#B3B3B3",
        100: "#343434",
        200: "#121A26",
        300: "#656C75",
        400: "#333333",
        600: "rgba(0, 0, 0, 0.7)",
        700: "#000000",
    },
    blue: {
        100: "#ECF4F9",
        200: "#F1F9FF",
        300: "#DCF1FF",
        400: "#90CCF4",
        600: "#4396F7",
    },
    lightBrown: {
        50: " #FFFEF6",
        400: "#B6AF92",
    },
    red: {
        100: "#FECECD",
        200: "#F04438",
        300: "#FDE7E6",
        400: "#F57E77",
    },
};

/**
 * @param maxWidth max width of media query
 * @param minWidth max width of media query
 */

const customMediaQuery = (minWidth: number, maxWidth: number) =>
    `@media only screen and (min-width: ${minWidth}px)  and  (max-width: ${maxWidth}px)`;
const extraMediaQuery = (minWidth: number) =>
    `@media only screen and (min-width: ${minWidth}px)`;

interface Media {
    custom: (minWidth: number, maxWidth: number) => string;
    customDesktop: (minWidth: number) => string;
    mobile: string;
    tablet: string;
    smallLaptop: string;
    largeLaptop: string;
    extraLargeLaptop: string;
}

const media: Media = {
    custom: customMediaQuery,

    customDesktop: extraMediaQuery,
    /**
     * Mobile devices
     */
    mobile: customMediaQuery(250, 480),
    /**
     * iPads, Tablets
     */
    tablet: customMediaQuery(481, 768),
    /**
     * fairly large displays like small laptops
     */
    smallLaptop: customMediaQuery(769, 1024),
    /**
     * large laptops
     */
    largeLaptop: customMediaQuery(1025, 1200),
    /**
     * extra large laptops
     */
    extraLargeLaptop: extraMediaQuery(1201),
};

/**
 *
 * @param val  size as number(unitless)
 */

const customFontSize = (val: number) => `${val}rem`;
const customRadius = (val: number) => `${val}px`;
const customSpacing = (val: number) => `${val}rem`;
const customBorder = (pixel: string, color: string) =>
    `${pixel} solid ${color}`;
const circleBorder = () => `50%`;
const doubleSpacing = (x: number, y: number) => `${x}rem ${y}rem`;

const fontSize = {
    custom: customFontSize,
    small: customFontSize(0.75), // 0.75rem
    normal: customFontSize(0.88), // 0.88rem
    medium: customFontSize(1), // 1rem
    heading: customFontSize(2.25), // 2.25rem
};

const fontFamily = {
    heading: "ZodiakBold, sans-serif",
    zodiak: "Zodiak, sans-serif",
    belonid: "Belonid, sans-serif",
};
const weights = [300, 400, 700, 900];

const fontWeights = {
    light: weights[0],
    regular: weights[1],
    bold: weights[2],
    black: weights[3],
};
const spacing: Spacing = {
    small: customSpacing(0.5), // 0.5rem
    normal: customSpacing(1), // 1rem
    medium: customSpacing(1.125), // 1.125rem
    large: customSpacing(1.5), //1.5rem
    button: customSpacing(2.5), //2.5rem
    input: customSpacing(3.125), //3.125rem
    nav: customSpacing(5.65), // 5.65rem
    double: doubleSpacing,
    custom: customSpacing,
};

const borderRadius = {
    default: "10px",
    primary: "20px",
    input: "4px",
    button: "5px",
    custom: customRadius,
    round: circleBorder,
};

const border = {
    custom: customBorder,
    input: customBorder("1px", colors.grey[300]),
    darkBrown: customBorder("1px", colors.darkBrown[300]),
    lightBrown: customBorder("1px", colors.lightBrown[400]),
};

export {
    colors,
    media,
    fontSize,
    fontFamily,
    borderRadius,
    spacing,
    border,
    fontWeights,
};

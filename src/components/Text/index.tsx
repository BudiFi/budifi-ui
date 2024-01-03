import { CustomTheme, FontWeights } from "@theme/interfaces/styled";
import React, { ReactNode } from "react";

import styled from "styled-components";

export type TypographyVariant =
    | "heroTitle"
    | "heroSubtitle"
    | "title"
    | "subtitle1"
    | "subtitle"
    | "headline"
    | "body"
    | "body2"
    | "caption"
    | "micro";

export interface PropsWithStyle {
    style?: React.CSSProperties;
}

interface PropsWithChildren {
    children: ReactNode;
}

type TextProps = PropsWithChildren &
    PropsWithStyle & {
        /**
         * specify a color
         */
        color?: string;

        /**
         * specify the font-size
         *
         * heroTitle - 80px,
         * heroSubtitle - 48px,
         * title - 40px,
         * subtitle1 - 32px,
         * subtitle - 24px,
         * headline - 20px,
         * body - 16px,
         * body2 - 14px,
         * caption - 12px,
         * micro - 10px
         */
        variant: TypographyVariant;
        /**
         * specify a font-weight
         *
         * light - 300,
         * regular - 400,
         * bold - 700,
         * black - 900
         */
        weight?: FontWeights;
        font?: "zodiak" | "belonid" | "heading";
    };

const variantOptions = (variant: TypographyVariant, theme: CustomTheme) =>
    ({
        heroTitle: `
            font-size: 5rem;
            line-height: ;
            margin-bottom: 2.5rem;
        `,
        heroSubtitle: `
            font-size: 3rem;
            line-height: ${theme.spacing.normal};
            margin-bottom: 1.5rem;
        `,
        title: `
            font-size: 2.5rem;
            line-height:  ${theme.spacing.normal};
            margin-bottom: 1.25rem;
        `,
        subtitle: `
            font-size: 1.5rem;
            line-height:  ${theme.spacing.normal};
            margin-bottom: 0.75rem;
        `,
        subtitle1: `
            font-size: 2rem;
            line-height:  ${theme.spacing.normal};
            margin-bottom: 0.75rem;
        `,
        headline: `
            font-size: 1.25rem;
            line-height: ${theme.spacing.normal};
            margin-bottom: 0.625rem;
        `,
        body: `
            font-size: 1rem;
            line-height:  ${theme.spacing.normal};
            margin-bottom: 0.5rem;
        `,
        body2: `
            font-size: 0.875rem;
            line-height: ${theme.spacing.normal};
            margin-bottom: 0.4375rem;
        `,
        caption: `
            font-size: ${theme.fontSize.normal};
            line-height:  ${theme.spacing.small};
            margin-bottom: 0.375rem;
        `,
        micro: `
            font-size: ${theme.fontSize.normal};
            line-height: 110%;
            margin-bottom: 0.3rem;
        `,
    }[variant]);

export const StyledText = styled.span<{
    color?: string;
    variant: TypographyVariant;
    weight?: FontWeights;
    font?: "zodiak" | "belonid" | "heading";
}>`
    font-family: ${({ theme, font }) =>
        font === "zodiak" ? theme.fontFamily.zodiak : theme.fontFamily.belonid};
    font-weight: ${({ theme, weight }) => theme.fontWeights[weight] as any};
    ${({ variant, theme }) => variantOptions(variant, theme)}
`;

export const Text = ({
    color,
    children,
    style,
    variant,
    font = "zodiak",
    weight = "regular",
}: TextProps) => {
    return (
        <StyledText
            color={color}
            variant={variant}
            weight={weight}
            style={style}
            font={font}
        >
            {children}
        </StyledText>
    );
};

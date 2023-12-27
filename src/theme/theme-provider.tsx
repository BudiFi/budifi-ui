import React from "react";
import { ThemeProvider } from "styled-components";
import theme from ".";

export const AntThemeProvider = ({
    children,
}: {
    children: React.ReactChild;
}): any => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

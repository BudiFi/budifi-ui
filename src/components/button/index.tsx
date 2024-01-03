import { StyledButton } from "./style";
import { ButtonProps } from "antd/lib/button";

import React from "react";

export type IButton = ButtonProps & {
    variant: "default";
    text: string;
};

export const CustomButton: React.FC<IButton> = ({
    variant = "default",
    text,
    ...rest
}) => {
    return (
        <StyledButton variant={variant} {...rest} data-testid="btn">
            {text}
        </StyledButton>
    );
};

import { Button } from "antd";
import styled from "styled-components";
import { IButton } from ".";

export const StyledButton = styled(Button)<{ variant: IButton["variant"] }>`
    height: ${({ theme }) => theme.spacing.input};
    border-radius: ${({ theme }) => theme.borderRadius.custom(50)};
    background: ${({ theme, variant }) =>
        variant === "default"
            ? theme.colors.darkBrown[300]
            : theme.colors.white[100]};
    border: ${({ theme }) => theme.border.darkBrown};
    color: ${({ theme, variant }) =>
        variant === "default"
            ? theme.colors.white[100]
            : theme.colors.darkBrown[300]};
    font-size: ${({ theme }) => theme.fontSize.normal};
    font-family: ${({ theme }) => theme.fontFamily.zodiak};
    padding: ${({ theme }) => theme.spacing.double(0, 1.5)};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;

    &:hover {
        border-color: ${({ theme }) => theme.colors.darkBrown[300]} !important;
        color: ${({ theme, variant }) =>
            variant === "default"
                ? theme.colors.white[100]
                : theme.colors.darkBrown[300]} !important;
    }
`;

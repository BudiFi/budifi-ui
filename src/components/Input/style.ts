import { Input } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)`
    height: ${({ theme }) => theme.spacing.input};
    border: ${({ theme }) => theme.border.lightBrown};
    border-radius: ${({ theme }) => theme.borderRadius.input};
    padding: ${({ theme }) => theme.spacing.double(0.8, 1)};
    box-shadow: none;
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily.zodiak};
    &:hover {
        border: ${({ theme }) => theme.border.darkBrown};
    }
    &:focus {
        border: ${({ theme }) => theme.border.darkBrown};
    }
    &:active {
        border: ${({ theme }) => theme.border.darkBrown};
    }
`;
export const StyledPasswordInput = styled(Input.Password)`
    height: ${({ theme }) => theme.spacing.input};
    border: ${({ theme }) => theme.border.lightBrown};
    border-radius: ${({ theme }) => theme.borderRadius.input};
    padding: ${({ theme }) => theme.spacing.double(0.8, 1)};
    box-shadow: none;
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily.zodiak};
    &:hover {
        border: ${({ theme }) => theme.border.darkBrown};
    }
    &:focus {
        border: ${({ theme }) => theme.border.darkBrown};
    }
    &:active {
        border: ${({ theme }) => theme.border.darkBrown};
    }
`;

export const ShowHideIcon = styled.span`
    color: ${({ theme }) => theme.colors.green[800]};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.normal};
    font-family: ${({ theme }) => theme.fontFamily.heading};
    text-decoration: underline;
    cursor: pointer;
`;

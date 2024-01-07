import { Checkbox } from "antd";
import styled from "styled-components";

export const FormHeading = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.custom(3)};
    h2 {
        color: ${({ theme }) => theme.colors.green[800]};
        font-family: ${({ theme }) => theme.fontFamily.belonid};
        font-size: ${({ theme }) => theme.fontSize.heading};
        margin: 0;
        line-height: ${({ theme }) => theme.fontSize.custom(2.75)};
    }
    p {
        font-family: ${({ theme }) => theme.fontFamily.zodiak};
        font-size: ${({ theme }) => theme.fontSize.medium};
        color: ${({ theme }) => theme.colors.darkBrown[300]};
        line-height: ${({ theme }) => theme.fontSize.custom(1.875)};
    }
    ${({ theme }) => theme.media.mobile} {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.custom(1.375)};
            line-height: ${({ theme }) => theme.fontSize.custom(2)};
        }
        p {
            font-size: ${({ theme }) => theme.fontSize.small};
            line-height: ${({ theme }) => theme.fontSize.custom(1.125)};
        }
        margin-bottom: ${({ theme }) => theme.spacing.custom(2)};
    }
`;

export const FormFooterText = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.zodiak};
    font-size: ${({ theme }) => theme.fontSize.normal};
    margin-bottom: ${({ theme }) => theme.spacing.button};
    a {
        color: ${({ theme }) => theme.colors.green[800]};
        font-family: ${({ theme }) => theme.fontFamily.heading};
    }
`;

export const ValidationContainer = styled.div`
    width: ${({ theme }) => theme.spacing.custom(15.2)};
    padding: ${({ theme }) => theme.spacing.custom(0.5)};
`;

export const CheckItem = styled(Checkbox)`
    margin-bottom: ${({ theme }) => theme.spacing.small};
    .ant-checkbox-inner {
        border-radius: ${({ theme }) => theme.spacing.custom(5)};
        width: ${({ theme }) => theme.spacing.normal};
        height: ${({ theme }) => theme.spacing.normal};
        background-color: ${({ theme }) =>
            theme.colors.lightBrown[200]} !important;
        border-color: ${({ theme }) => theme.colors.lightBrown[200]} !important;
    }
    .ant-checkbox-checked {
        .ant-checkbox-inner {
            background-color: ${({ theme }) =>
                theme.colors.green[800]} !important;
            border-color: ${({ theme }) => theme.colors.green[800]} !important;
        }
    }
`;

export const CheckText = styled.span<{ active: boolean }>`
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.colors.darkBrown[300]};
    font-family: ${({ theme }) => theme.fontFamily.zodiak};
    display: inline-block;
    line-height: ${({ theme }) => theme.spacing.custom(1.625)};
    text-decoration: ${({ active }) => (active ? "line-through" : "none")};
`;

export const CustomCheckbox = styled(Checkbox)`
    font-size: ${({ theme }) => theme.fontSize.normal};
    .ant-checkbox-inner {
        width: 18px;
        height: 18px;
        border: ${({ theme }) => theme.border.lightBrown};
        border-radius: 0;
        border-width: 3px;
        &:hover {
            border-color: ${({ theme }) => theme.colors.green[800]};
        }
    }
    span {
        font-family: ${({ theme }) => theme.fontFamily.zodiak};
    }
    .ant-checkbox-checked {
        .ant-checkbox-inner {
            background-color: ${({ theme }) => theme.colors.darkBrown[300]};
            border-color: ${({ theme }) => theme.colors.darkBrown[300]};
        }
    }
    &:hover {
        .ant-checkbox-inner {
            border-color: ${({ theme }) =>
                theme.colors.darkBrown[300]} !important;
        }
        .ant-checkbox-checked {
            .ant-checkbox-inner {
                background-color: ${({ theme }) =>
                    theme.colors.darkBrown[300]} !important;
            }
        }
    }
`;

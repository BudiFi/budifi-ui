import { Form } from "antd";
import styled from "styled-components";

export const StyledFormItem = styled(Form.Item)`
    font-family: ${({ theme }) => theme.fontFamily.zodiak};
    label {
        font-family: ${({ theme }) => theme.fontFamily.heading};
        font-weight: 500;
        font: ${({ theme }) => theme.fontFamily.normal};
    }
`;

export const CloseNotificationButton = styled.button`
    background: transparent;
    border: none;
    width: ${({ theme }) => theme.spacing.custom(20)};
    height: ${({ theme }) => theme.spacing.custom(20)};
`;

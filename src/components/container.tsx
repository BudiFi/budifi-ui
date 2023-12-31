import { Form } from "antd";
import styled from "styled-components";

export const StyledFormItem = styled(Form.Item)`
    font-family: ${({ theme }) => theme.fontFamily.zodiak};
    label {
        font-family: ${({ theme }) => theme.fontFamily.heading};
        font-weight: 500;
        font: ${({ theme }) => theme.fontFamily.normal};
    }
    ${({ theme }) => theme.media.mobile} {
        margin-bottom: ${({ theme }) => theme.spacing.custom(1.5)};
    }
`;

export const CloseNotificationButton = styled.button`
    background: transparent;
    border: none;
    width: ${({ theme }) => theme.spacing.custom(20)};
    height: ${({ theme }) => theme.spacing.custom(20)};
`;

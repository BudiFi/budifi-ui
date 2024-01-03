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
`;

export const FormFooterText = styled.p`
    font-weight: 500;
    font-family: ${({ theme }) => theme.fontFamily.heading};
    font-size: ${({ theme }) => theme.fontSize.normal};
    margin-bottom: ${({ theme }) => theme.spacing.button};
    a {
        color: ${({ theme }) => theme.colors.green[800]};
    }
`;

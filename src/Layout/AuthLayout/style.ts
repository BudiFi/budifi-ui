import styled from "styled-components";
import { Svg } from "@assets/images/svg";
import { AuthVariant } from "./index";

const { ManReading, RidingBicycle } = Svg;

const backdropOptions = {
    login: ManReading,
    signup: RidingBicycle,
    forgot_password: ManReading,
    reset_password: ManReading,
};

export const AuthContainer = styled.div`
    background: ${({ theme }) => theme.colors.white[100]};
    font-family: ${({ theme }) => theme.fontFamily.zodiak};
`;

export const Navbar = styled.nav`
    height: ${({ theme }) => theme.spacing.nav};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.lightBrown[50]};
    border-bottom: ${({ theme }) => theme.border.lightBrown};
    padding: ${({ theme }) => theme.spacing.double(0, 5)};
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(0, 1)};
        height: ${({ theme }) => theme.spacing.custom(3.5)};
    }
`;

export const Logo = styled.div`
    border-right: ${({ theme }) => theme.border.lightBrown};
    height: 100%;
    padding-right: ${({ theme }) => theme.spacing.custom(2.5)};
    display: inline-flex;
    align-items: center;
    font-family: ${({ theme }) => theme.fontFamily.heading};
    font-weight: 800;
    ${({ theme }) => theme.media.mobile} {
        padding-right: ${({ theme }) => theme.spacing.custom(1)};
    }
`;

export const NavRight = styled.div`
    border-left: ${({ theme }) => theme.border.lightBrown};
    padding-left: ${({ theme }) => theme.spacing.custom(2.5)};
    height: 100%;
    vertical-align: middle;
    line-height: 100%;
    display: inline-flex;
    align-items: center;
    a {
        color: ${({ theme }) => theme.colors.green[800]};
    }
    ${({ theme }) => theme.media.mobile} {
        padding-left: ${({ theme }) => theme.spacing.custom(1)};
        font-size: ${({ theme }) => theme.fontSize.small};
    }
`;

export const AuthContentContainer = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing.double(5, 12)};
    justify-content: space-between;
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(2, 1.5)};
    }
`;

export const AuthContent = styled.div`
    width: 45%;
    height: auto;
    ${({ theme }) => theme.media.mobile} {
        width: 100%;
    }
`;

export const Backdrop = styled.div<{ variant: AuthVariant }>`
    width: 50%;
    height: ${({ theme }) => theme.spacing.custom(30)};
    background-image: ${(props) => `url(${backdropOptions[props.variant]})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    ${({ theme }) => theme.media.mobile} {
        display: none;
    }
`;

export const Footer = styled.footer`
    display: flex;
    height: ${({ theme }) => theme.spacing.custom(4.625)};
    padding: ${({ theme }) => theme.spacing.double(0, 5)};
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.lightBrown[50]};
    border-top: ${({ theme }) => theme.border.darkBrown};
    border-bottom: ${({ theme }) => theme.border.darkBrown};
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(1, 1)};
        flex-direction: column;
    }
`;

export const FooterText = styled.span`
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.spacing.normal};
`;

export const FooterRight = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.fontSize.custom(2.69)};
`;

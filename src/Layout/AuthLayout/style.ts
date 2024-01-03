import styled from "styled-components";
import { Svg } from "@assets/images/svg";
import { AuthVariant } from "./index";

const { ManReading } = Svg;

const backdropOptions = {
    login: ManReading,
    signup: ManReading,
    forgot_password: ManReading,
    reset_password: ManReading,
};
22;

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
`;

export const Logo = styled.div`
    border-right: ${({ theme }) => theme.border.lightBrown};
    height: 100%;
    padding-right: ${({ theme }) => theme.spacing.custom(2.5)};
    display: inline-flex;
    align-items: center;
    font-family: ${({ theme }) => theme.fontFamily.heading};
    font-weight: 800;
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
`;

export const AuthContentContainer = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing.double(5, 12)};
    justify-content: space-between;
`;

export const AuthContent = styled.div`
    width: 40%;
    height: auto;
`;

export const Backdrop = styled.div<{ variant: AuthVariant }>`
    width: 50%;
    height: ${({ theme }) => theme.spacing.custom(30)};
    background-image: ${(props) => `url(${backdropOptions[props.variant]})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

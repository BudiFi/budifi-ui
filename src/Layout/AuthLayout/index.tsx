import React, { ReactElement, ReactNode } from "react";
import {
    AuthContainer,
    Navbar,
    Logo,
    NavRight,
    AuthContentContainer,
    Backdrop,
    AuthContent,
    Footer,
    FooterText,
    FooterRight,
} from "./style";
import Link from "next/link";
import { useRouter } from "next/router";

export type AuthVariant =
    | "login"
    | "signup"
    | "forgot_password"
    | "reset_password";

const AuthLayout = ({
    children,
}: React.PropsWithChildren<ReactNode>): ReactElement => {
    const { pathname } = useRouter();
    const authVariant = pathname.includes("auth")
        ? (pathname.split("/auth")[1].replace("/", "") as AuthVariant)
        : "login";
    const renderNavItem = () => {
        return authVariant === "login" ? (
            <span>
                New user?
                <Link href="/auth/signup"> Create an account</Link>
            </span>
        ) : (
            <span>
                Already have an account? <Link href="/auth/login">Log in</Link>
            </span>
        );
    };
    return (
        <AuthContainer>
            <Navbar>
                <Logo>Budifi</Logo>
                <NavRight>{renderNavItem()}</NavRight>
            </Navbar>
            <AuthContentContainer>
                <AuthContent>{children}</AuthContent>
                <Backdrop variant={authVariant ?? "login"} />
            </AuthContentContainer>
            <Footer>
                <FooterText>© 2022 NewsHuub. All rights Reserved</FooterText>
                <FooterRight>
                    <FooterText>Terms of Service</FooterText>
                    <FooterText>Privacy Policy</FooterText>
                </FooterRight>
            </Footer>
        </AuthContainer>
    );
};

export { AuthLayout };

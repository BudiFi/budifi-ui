import React, { ReactElement, ReactNode } from "react";
import {
    AuthContainer,
    Navbar,
    Logo,
    NavRight,
    AuthContentContainer,
    Backdrop,
    AuthContent,
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

    return (
        <AuthContainer>
            <Navbar>
                <Logo>Budifi</Logo>
                <NavRight>
                    <span>
                        Already have an account?{" "}
                        <Link href="/auth/login">Log in</Link>
                    </span>
                </NavRight>
            </Navbar>
            <AuthContentContainer>
                <AuthContent>{children}</AuthContent>
                <Backdrop variant={authVariant ?? "login"} />
            </AuthContentContainer>
        </AuthContainer>
    );
};

export { AuthLayout };

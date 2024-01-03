import React, { useEffect, useContext } from "react";
import { AuthLayout } from "@Layout";
import { FormHeading, FormFooterText } from "./style";
import { Form } from "antd";
import { CustomInput, PasswordInput, CustomButton } from "@components";
import { StyledFormItem } from "@components/container";
import Link from "next/link";
import { useLoginMutation } from "src/hooks/mutations/auth";
import { NotificationContext } from "src/context/notificationContext";

type ILoginValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const { isLoading, mutate, isError, error, isSuccess, data } =
        useLoginMutation();
    const { updateNotification, openNotification } =
        useContext(NotificationContext);

    const handleSubmit = (values: ILoginValues) => {
        mutate(values);
    };

    useEffect(() => {
        if (isError && error) {
            updateNotification({
                type: "error",
                title: "Login",
                message: error.message,
            });
            openNotification();
        }
        if (isSuccess && !isError) {
            updateNotification({
                type: "success",
                title: "Login",
                message: "Login Successful!",
            });
            openNotification();
        }
    }, [isError, isSuccess]);

    return (
        <AuthLayout>
            <FormHeading>
                <h2>Welcome back!</h2>
                <p>You have some interesting news on your feed.</p>
            </FormHeading>
            <Form
                layout="vertical"
                initialValues={{ email: "", password: "" }}
                requiredMark={false}
                onFinish={handleSubmit}
            >
                <StyledFormItem
                    label="Email Address"
                    name="email"
                    rules={[{ required: true, message: "Email is required" }]}
                >
                    <CustomInput type="email" placeholder="john@mail.com" />
                </StyledFormItem>
                <StyledFormItem
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Password is required" },
                    ]}
                >
                    <PasswordInput placeholder="njhsbjs" />
                </StyledFormItem>
                <FormFooterText>
                    <Link href="/auth/forgot_password">Forgot password?</Link>
                </FormFooterText>
                <CustomButton
                    variant="default"
                    htmlType="submit"
                    text="Submit"
                    disabled={isLoading}
                />
            </Form>
        </AuthLayout>
    );
};

export { LoginPage };

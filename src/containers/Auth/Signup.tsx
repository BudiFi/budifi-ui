import React, {
    useEffect,
    useContext,
    useState,
    useMemo,
    ChangeEvent,
} from "react";
import { AuthLayout } from "@Layout";
import {
    FormHeading,
    FormFooterText,
    ValidationContainer,
    CheckItem,
    Dot,
    CheckText,
    CustomCheckbox,
} from "./style";
import { Form, Popover } from "antd";
import { CustomInput, PasswordInput, CustomButton, Text } from "@components";
import { StyledFormItem } from "@components/container";
import Link from "next/link";
import { useSignupMutation } from "src/hooks/mutations/auth";
import { NotificationContext } from "src/context/notificationContext";

type IUserPaylod = {
    full_name: string;
    email: string;
    password: string;
};

const SignupPage = () => {
    const [signupRules, setSignupRules] = useState({
        length: false,
        digit: false,
        uppercase: false,
        special: false,
    });

    const [form] = Form.useForm();

    const { isLoading, mutate, isError, error, isSuccess, data } =
        useSignupMutation();
    const { updateNotification, openNotification } =
        useContext(NotificationContext);

    const handleSubmit = (values: IUserPaylod) => {
        const { full_name } = values;
        const [first_name, last_name] = full_name.trim().split(" ");
        const payload = {
            first_name,
            last_name: last_name ?? "",
            email: values.email,
            password: values.password,
        };

        mutate(payload);
    };

    useEffect(() => {
        if (isError && error) {
            updateNotification({
                type: "error",
                title: "Sign Up",
                message:
                    error.message ?? "Something went wrong, please try again",
            });
            openNotification();
        }
        if (isSuccess && data) {
            updateNotification({
                type: "success",
                title: "Sign Up",
                message: "Sign up Successful!",
            });
            openNotification();
        }
    }, [isError, isSuccess]);

    const formValidation = () => {
        return (
            <ValidationContainer>
                <CheckItem checked={signupRules.length}>
                    <CheckText active={signupRules.length}>
                        Min. 6 characters
                    </CheckText>
                </CheckItem>
                <CheckItem checked={signupRules.digit}>
                    <CheckText active={signupRules.digit}>
                        At least 1 digit{" "}
                    </CheckText>
                </CheckItem>
                <CheckItem checked={signupRules.uppercase}>
                    <CheckText active={signupRules.uppercase}>
                        At least one uppercase
                    </CheckText>
                </CheckItem>
                <CheckItem checked={signupRules.special}>
                    <CheckText active={signupRules.special}>
                        At least 1 special character
                    </CheckText>
                </CheckItem>
            </ValidationContainer>
        );
    };
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        form.setFieldValue("password", ev.target.value);
        handleValidation(ev.target.value);
    };

    const handleValidation = (value: string) => {
        const lengthCheck = value.length >= 6;
        const digitCheck = /\d/.test(value);
        const uppercaseCheck = /[A-Z]/.test(value);
        const specialCharacter = /[!@#$%^&*()?":{}|<>]/.test(value);

        setSignupRules({
            length: lengthCheck,
            digit: digitCheck,
            uppercase: uppercaseCheck,
            special: specialCharacter,
        });
    };

    return (
        <AuthLayout>
            <FormHeading>
                <h2>Create an account</h2>
                <p>
                    Your journey starts here. It’s time to take control of your
                    money.
                </p>
            </FormHeading>
            <Form
                layout="vertical"
                initialValues={{
                    email: "",
                    password: "",
                    full_name: "",
                    terms: "",
                }}
                requiredMark={false}
                onFinish={handleSubmit}
                form={form}
            >
                <StyledFormItem
                    label="Full Name"
                    name="full_name"
                    rules={[
                        { required: true, message: "Full name is required" },
                    ]}
                >
                    <CustomInput placeholder="john deere" />
                </StyledFormItem>
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
                    <Popover
                        content={formValidation}
                        overlayClassName="signup_validation_container"
                        title={
                            <Text variant="body2" font="heading" weight="bold">
                                Password Requirements
                            </Text>
                        }
                        trigger="focus"
                        placement="right"
                        // open={true}
                    >
                        <PasswordInput
                            placeholder="njhsbjs"
                            onChange={handleChange}
                        />
                    </Popover>
                </StyledFormItem>
                <StyledFormItem
                    name="terms"
                    rules={[
                        { required: true, message: "Please accept the terms" },
                    ]}
                >
                    <FormFooterText>
                        <CustomCheckbox>
                            By creating an account, you agree to our
                        </CustomCheckbox>
                        <Link href="/auth/forgot_password">terms of use</Link> &{" "}
                        <Link href="/auth/login"> privacy policy</Link>
                    </FormFooterText>
                </StyledFormItem>

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

export { SignupPage };

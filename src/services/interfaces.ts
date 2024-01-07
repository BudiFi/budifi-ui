export type ILoginPayload = {
    email: string;
    password: string;
};
export type ICreateUserPayload = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
};

export type IResendVerificationPayload = {
    email: string;
};

export type ILoginResponse = {
    data: {
        token: string;
        userId: string;
    };
    message: string;
};

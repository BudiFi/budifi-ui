export type ILoginPayload = {
    email: string;
    password: string;
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

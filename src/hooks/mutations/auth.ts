import { useMutation } from "react-query";
import {
    ILoginPayload,
    ILoginResponse,
    ICreateUserPayload,
} from "@services/interfaces";
import { authService } from "@services/auth";
import { AxiosResponse } from "axios";

export const useLoginMutation = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async (payload: ILoginPayload) => {
            const results: AxiosResponse<ILoginResponse> =
                await authService.login(payload);
            return results;
        },
        onError(err: any) {
            return err;
        },
    });
};
export const useSignupMutation = () => {
    return useMutation({
        mutationKey: ["register"],
        mutationFn: async (payload: ICreateUserPayload) => {
            const results: AxiosResponse<ILoginResponse> =
                await authService.signup(payload);
            return results;
        },
        onError(err: any) {
            return err;
        },
    });
};

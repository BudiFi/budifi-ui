import { useMutation } from "react-query";
import { ILoginPayload, ILoginResponse } from "@services/interfaces";
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

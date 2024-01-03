import BaseRequest from ".";
import { AUTH_ROUTES } from "./routes";
import { ILoginPayload, IResendVerificationPayload } from "./interfaces";

class AuthService extends BaseRequest {
    forgotPassword = async (payload: IResendVerificationPayload) => {
        return await this.api.get(
            `${AUTH_ROUTES.FORGOT_PASSWORD}/${payload.email}`,
        );
    };
    login = async (payload: ILoginPayload) => {
        return await this.api.post(AUTH_ROUTES.LOGIN, payload);
    };
}

const authService = new AuthService();
export { authService };

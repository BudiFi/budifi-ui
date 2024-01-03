import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";

const API_URL =
    process.env.NEXT_PUBLIC_APP_ENV === "development"
        ? process.env.NEXT_PUBLIC_DEV_BACKEND_API_URL
        : process.env.NEXT_PUBLIC_PROD_API_URL;

class BaseRequest {
    protected api: AxiosInstance;
    protected apiV2: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: API_URL,
        });
        this.apiV2 = axios.create({
            baseURL: API_URL,
        });
        this.attachInterceptors(this.api);
        this.attachInterceptors(this.apiV2);
    }

    private attachInterceptors(api: any) {
        api.interceptors.request.use((req: AxiosRequestConfig) => {
            // const idToken = new URLSearchParams(location.search).get("idToken");
            const idToken =
                process.env.NEXT_PUBLIC_APP_ENV === "development"
                    ? process.env.NEXT_PUBLIC_AUTH_TOKEN_STAGING
                    : process.env.NEXT_PUBLIC_AUTH_TOKEN;
            if (idToken !== "" && req && req.headers) {
                req.headers.Authorization = idToken;
            }
            return req;
        });
        api.interceptors.response.use(
            (value: any) => {
                return value.data as AxiosResponse;
            },
            (error: AxiosError) => {
                if (
                    error.response &&
                    error.response.status &&
                    error.response.status >= 400 &&
                    error.response.status <= 499
                )
                    throw error.response?.data;
                else throw error.message;
            },
        );
    }
}
export default BaseRequest;

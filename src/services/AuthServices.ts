import axios from "axios";
import { BASE_URL } from "./constants";
import { LoginAction, SignupAction, ResetPasswordOtpPayload, ResetPasswordPayload } from "../modals/authModals";


class AuthServices{
  private static _instance: AuthServices;

  static getInstance(): AuthServices {
    if (!this._instance) {
      this._instance = new AuthServices();
    }
    return this._instance;
  }
  
  signup = (payload: SignupAction) => axios.post(`${BASE_URL}/register`, payload);

  login = (payload: LoginAction) => axios.post(`${BASE_URL}/login`, payload);
  
  forgetPassword = (payload: ResetPasswordOtpPayload) => axios.post(`${BASE_URL}/requestPasswordResetOtp`, 
  payload)

  resetPassword = (payload: ResetPasswordPayload) => axios.post(`${BASE_URL}/resetPassword`,
  payload, 
)
}

export const authService = AuthServices.getInstance();

import axios from "axios";
import { BASE_URL } from "./constants";
import { LoginAction, SignupAction } from "../modals/authModals";

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
  
}

export const authService = AuthServices.getInstance();

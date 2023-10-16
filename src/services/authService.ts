import axios from "axios";
import { BASE_URL } from "./constants";
import { LoginAction, SignupAction } from "../modals/authModals";

class AuthService {
  private static _instance: AuthService;

  static getInstance(): AuthService {
    if (!this._instance) {
      this._instance = new AuthService();
    }
    return this._instance;
  }
  
  signup = (payload: SignupAction) => axios.post(`${BASE_URL}/register`, payload);

  login = (payload: LoginAction) => axios.post(`${BASE_URL}/login`, payload);
  
}

export const authService = AuthService.getInstance();

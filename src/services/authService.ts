import axios from "axios";
import { BASE_URL } from "./constants";
import { LoginAction } from "../modals/authModals";

export class authService {
  async registerUser(name: string, email: string, password: string) {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  async login(payload: LoginAction) {
    try {
      return await axios.post(`${BASE_URL}/login`, payload);
    } catch (error: any) {
      throw error.response.data;
    }
  }
}

export default new authService();

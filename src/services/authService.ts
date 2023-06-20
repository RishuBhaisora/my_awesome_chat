import axios from "axios";
import { BASE_URL } from "./constants";
import { LoginAction ,SignupAction} from "../modals/authModals";

export class authService {
  /*async registerUser(name: string, email: string, password: string) {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      });
      return response;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  }*/
  
  signup=(payload:SignupAction)=>axios.post(`${BASE_URL}/register`, payload);
  login = (payload: LoginAction) => axios.post(`${BASE_URL}/login`, payload);

}

export default new authService();



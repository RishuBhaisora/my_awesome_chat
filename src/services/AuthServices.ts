import axios from 'axios';
import { BASE_URL } from './constants';

 export class AuthService {

  async registerUser(name:string, email:string, password:string) {    
    try {
      const response = await axios.post(`${BASE_URL}/register`, { name, email, password });
      return response;
    } catch (error:any) {
      throw error;
    }
  }
}

export default new AuthService();



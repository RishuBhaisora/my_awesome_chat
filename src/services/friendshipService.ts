import axios from "axios";
import { BASE_URL } from "./constants";

export class friendshipService {
  async getFriendRequests() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/friendRequests`, {
        token
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  async getSentFriendRequests(){
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/friendRequestsSent`, {
        token
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async getFriendList(){
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/friends`, {
        token
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  async getSuggestedFriends(){
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/suggestedFriends`, {
        token
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  async sendFriendRequest(friend_id: number){
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/sendFriendRequest`, {
        token,
        friend_id
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  async acceptFriendRequest(friend_id: number){
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/acceptFriendRequest`, {
        token,
        friend_id
      });
      console.log("response", response);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  async rejectFriendRequest(friend_id: number){
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/rejectFriendRequest`, {
        token,
        friend_id
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  async cancelFriendRequest(friend_id: number){
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/cancelFriendRequest`, {
        token,
        friend_id
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  
  async removeFriend(friend_id: number){
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/removeFriend`, {
        token,
        friend_id
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
}

export default new friendshipService();

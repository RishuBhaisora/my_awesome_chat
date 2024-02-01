import axios from "axios";
import { BASE_URL } from "./constants";
import { ChatPayload, SendMessagePayload } from "../modals/chatModals";

class ChatServices {
  private static _instance: ChatServices;

  static getInstance(): ChatServices {
    if (!this._instance) {
      this._instance = new ChatServices();
    }
    return this._instance;
  }
  getRecentChats = (token: string ) => axios.post(`${BASE_URL}/recentChats`, { token });
  sendMessage = (payload: SendMessagePayload, token:string ) => axios.post(`${BASE_URL}/sendMessage`, { ...payload, token});
  userFriendMessages = (payload: ChatPayload, token:string  ) => axios.post(`${BASE_URL}/userFriendMessages`, { ...payload, token});
}

export const chatService = ChatServices.getInstance();

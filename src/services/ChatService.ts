import axios from "axios";
import { BASE_URL } from "./constants";
import { ChatPayload, SendMessagePayload } from "../modals/chatModals";
import socket from "../socket";

class ChatServices {
  private static _instance: ChatServices;

  static getInstance(): ChatServices {
    if (!this._instance) {
      this._instance = new ChatServices();
    }
    return this._instance;
  }
  getRecentChats = (token: string) =>
    axios.post(`${BASE_URL}/recentChats`, { token });
  sendMessage = (payload: SendMessagePayload) => {
    if (socket.disconnected) {
      socket.connect();
    }
    socket.emit("message", { ...payload });
  };
  userFriendMessages = (payload: ChatPayload, token: string) =>
    axios.post(`${BASE_URL}/userFriendMessages`, { ...payload, token });
}

export const chatService = ChatServices.getInstance();

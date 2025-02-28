import axios from "axios";
import { BASE_URL } from "./constants";
import { ChatPayload, SendMessagePayload } from "../modals/chatModals";
import { SocketService } from "../socket";

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
    const socket = SocketService.getSocket();
    if (!socket?.connected) {
      socket?.connect();
      socket?.once("connect", () => {
        socket.emit("message", { ...payload });
      });
    } else {
      socket.emit("message", { ...payload });
    }
  };
  userFriendMessages = (payload: ChatPayload, token: string) =>
    axios.post(`${BASE_URL}/userFriendMessages`, { ...payload, token });
}

export const chatService = ChatServices.getInstance();

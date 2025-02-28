import { io, Socket } from "socket.io-client";
import store from "../redux/store";
import { updateUserFriendChatAction } from "../redux/actions/chatActions";
import { BASE_URL } from "../services/constants";

export class SocketService {
  private static socket: Socket | null;
  private static isInitialized = false;

  private static initialize(): void {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token is required to initialize socket");
    }

    if (!this.isInitialized) {
      try {
        this.socket = io(BASE_URL, {
          auth: { token },
        });
        this.setupEventListeners();
        this.isInitialized = true;
      } catch (error) {
        this.isInitialized = false;
        this.socket = null;
        throw error;
      }
    }
  }

  static getSocket(): Socket | null {
    if (!this.socket || !this.isInitialized) {
      this.initialize();
    }
    return this.socket;
  }

  static connect(): void {
    try {
      const socket = this.getSocket();
      if (!socket?.connected) {
        socket?.connect();
      }
    } catch (error) {
      console.error("Socket connection failed:", error);
      throw error;
    }
  }
  static disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.isInitialized = false;
      this.socket = null;
    }
  }

  private static setupEventListeners(): void {
    this.socket?.on("connect", () => {
      console.log("Connected to the Socket.IO server!");
    });

    this.socket?.on("message", (data) => {
      store.dispatch(updateUserFriendChatAction(data));
    });

    this.socket?.on("disconnect", () => {
      console.log("Disconnected from the Socket.IO server!");
    });
  }
}

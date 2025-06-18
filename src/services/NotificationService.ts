import axios from "axios";
import { BASE_URL } from "./constants";

class NotificationService {
  private static _instance: NotificationService;

  static getInstance(): NotificationService {
    if (!this._instance) {
      this._instance = new NotificationService();
    }
    return this._instance;
  }

  getNotifications = () =>
    axios.post(`${BASE_URL}/getNotifications`, {
      token: localStorage.getItem("token"),
    });

  readAllNotifications = () =>
    axios.post(`${BASE_URL}/readAllNotifications`, {
      token: localStorage.getItem("token"),
    });
}

export const notificationService = NotificationService.getInstance();

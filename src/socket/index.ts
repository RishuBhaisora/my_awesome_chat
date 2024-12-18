import { io } from "socket.io-client";
import store from "../redux/store";
import { sendMessageCompletedAction } from "../redux/actions/chatActions";

const socket = io("http://127.0.0.1:3333", {
  auth: {
    token: localStorage.getItem("token"),
  },
});

socket.on("connect", () => {
  console.log("Connected to the Socket.IO server!");
});
socket.on("message", (data) => {
  store.dispatch(sendMessageCompletedAction(data));
});
socket.on("disconnect", () => {
  console.log("Disconnected from the Socket.IO server!");
});

export default socket;

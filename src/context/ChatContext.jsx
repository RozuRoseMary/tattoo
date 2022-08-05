import React, {
  useContext,
  useRef,
  useEffect,
  createContext,
  useState,
} from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";

const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const socket = useRef();
  // const { user } = useAuth();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const socketServe = process.env.REACT_SOCKET_API_URL || "ws://localhost:8919";
  console.log(socketServe);

  useEffect(() => {
    socket.current = io(
      socketServe,
      {
        withCredentials: true,
        extraHeaders: {
          flashTattooHead: "abcd",
        },
      }
      // { transports: ["websocket"], withCredentials: true }
    );
  }, []);

  // console.log(arrivalMessage);

  useEffect(() => {
    socket.current.on("welcome", (msg) => {
      console.log(msg);
    });

    socket.current.emit("add-user", (msg) => {});
  }, [socket]);

  console.log(socket);
  useEffect(() => {}, []);
  useEffect(() => {}, []);

  const connectToSocket = () => {
    socket.current.on("connect", () => {
      console.log("connect with socket");
    });
  };
  useEffect(() => {}, []);

  const testChatSend = () => {
    socket.current.on("chat test msg", (msg) => {
      console.log("chat test msg");
      console.log(msg);
    });
  };
  // testChatSend();

  const getMessage = () => {
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
      });
    });
  };
  return (
    <ChatContext.Provider value={{ socket, getMessage, connectToSocket }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const ctx = useContext(ChatContext);
  return ctx;
};

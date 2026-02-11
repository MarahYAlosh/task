import { createContext, useContext, useState } from "react";
import { chats as dummyChats } from "../data/dummyChats";

const ChatContext = createContext<any>(null);

export const useChat = () => useContext(ChatContext);

export function ChatProvider({ children }: any) {
  const [chats, setChats] = useState(dummyChats);
  const [activeChat, setActiveChat] = useState(dummyChats[0]);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  const filteredChats = chats.filter(chat => {
    if (filter === 'read') return !chat.unread;
    if (filter === 'unread') return chat.unread;
    return true;
  });
  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      text,
      sender: "me",
      read: true,
    };

    setChats(prev =>
      prev.map(chat =>
        chat.id === activeChat.id
          ? {
            ...chat, lastMessageAt: new Date().toLocaleTimeString("ar-EG", {
              hour: "2-digit",
              minute: "2-digit",
            })
            , messages: [...chat.messages, newMessage]
          }
          : chat
      )
    );

    setActiveChat(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  };

  const openChat = (chat: any) => {
    const updatedChat = { ...chat, unread: false };

    setChats(prev =>
      prev.map(c => (c.id === chat.id ? updatedChat : c))
    );

    setActiveChat(updatedChat);
  };

  return (
    <ChatContext.Provider
      value={{
        chats: filteredChats,
        setFilter,
        activeChat,
        openChat,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}


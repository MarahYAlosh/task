import { Box, List } from "@mui/material";
import ChatListItem from "./ChatListItem";
import { useChat } from "../../context/ChatContext";

export default function ChatList() {
  const { chats } = useChat();
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 3,
        boxShadow: 1,
        p: 2,
        width: { xs: "100%", md: "44%" },
        height: "560px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List
        sx={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        {chats?.map(chat => (
          <ChatListItem key={chat.id} chat={chat} />
        ))}
      </List>
    </Box>

  );
}

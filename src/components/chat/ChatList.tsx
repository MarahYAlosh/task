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
        // p: 2,
        width: { xs: "90%", sm: "55%", md: "65%", lg: "47%" },
        height: "560px",
        display: "flex",
        flexDirection: "column",
        minHeight:"583px"

      }}
    >
      <List
        sx={{
          flex: 1,
          overflowY: "auto",
                  padding:"9px 12px "
        }}
      >
        {chats?.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} />
        ))}
      </List>
    </Box>
  );
}

import {
  Avatar,
  Badge,
  ListItemButton,
  ListItemAvatar,
  Box,
  Typography,
} from "@mui/material";
import { useChat } from "../../context/ChatContext";

interface Props {
  chat: any;
}

export default function ChatListItem({ chat }: Props) {
  const { activeChat, openChat } = useChat();
  const equalChat = activeChat?.id === chat.id
  return (
    <ListItemButton
      selected={equalChat}
      onClick={() => openChat(chat)}
      sx={{
        border: "1px solid #EAEAEB",
        bgcolor: chat.unread || equalChat ? "#EAEAEB66" : "transparent",
        borderRadius: 5,
        mb: 1,
        "&:hover": {
          bgcolor: chat.unread || equalChat ? "#6b6b6b60" : "#F6F8FC",
        },
        width: "100%"

      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1.5,
          borderRadius: 2,
          cursor: 'pointer',
          transition: '0.2s',

          gap: "0.7rem",
          width: "100%"
        }}
      >
        <ListItemAvatar>
          <Badge
            color="primary"
            variant={chat.unread ? "dot" : "standard"}
            invisible={!chat.unread}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#22c55e",
                right: 6,
                top: 6,
              },
            }}
          >
            <Avatar src={chat.avatar}>
              {chat.name.charAt(0)}
            </Avatar>
          </Badge>
        </ListItemAvatar>

        <Box sx={{ flex: 1, width: "100%" }}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography
              fontWeight={chat.unread ? 700 : 400}
              color={chat.unread ? "#545454" : "#000"}
            >
              {chat.name}
            </Typography>

            <Typography variant="caption" color="#323335">
              {chat.lastMessageAt}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color={chat.unread ? "#323335" : "#757779"}
            noWrap
          >
            {chat.messages.at(-1)?.text}
          </Typography>
        </Box>
      </Box>
    </ListItemButton>
  );
}
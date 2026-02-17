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
  const equalChat = activeChat?.id === chat.id;
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
        width: "93.5%",
        padding: "8px 12px ",
        mx: 1.5,
        my: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // p: 1.5,
          borderRadius: 2,
          cursor: "pointer",
          transition: "0.2s",

          gap: "0.5rem",
          width: "100%",
        }}
      >
        <ListItemAvatar
          sx={{
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Badge
            color="primary"
            variant={chat.unread ? "dot" : "standard"}
            invisible={!chat.unread}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#22c55e",
                right: 7,
                top: 8,
              },
            }}
          >
            <Avatar sx={{ width: "60px", height: "60px" }} src={chat.avatar}>
              {chat.name.charAt(0)}
            </Avatar>
          </Badge>
        </ListItemAvatar>

        <Box sx={{ flex: 1, width: "100%" }}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography fontWeight={700} color="#000" fontSize="14px">
              {chat.name}
            </Typography>

            <Typography fontWeight={400} fontSize="14px" color="#323335">
              {chat.lastMessageAt}
            </Typography>
          </Box>

    <Typography
  variant="body2"
  color={chat.unread ? "#323335" : "#757779"}
  mt={1}
  textAlign="start"
  sx={{
    display: "-webkit-box",
    WebkitLineClamp: 2,        // عدد الأسطر المسموح
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.4em",
    maxHeight: "2.8em",        // 2 × line-height
  }}
>
  {chat.messages.at(-1)?.text}
</Typography>

        </Box>
      </Box>
    </ListItemButton>
  );
}

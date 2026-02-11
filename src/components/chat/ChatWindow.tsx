import { Box, Stack } from "@mui/material";
import { useChat } from "../../context/ChatContext";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import {
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function ChatWindow() {
  const { activeChat } = useChat();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Stack flexDirection="column" width="100%">
      <Box
        sx={{
          bgcolor: "#EAEAEB",
          px: 2,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        <Box display="flex" alignItems="center" gap={1.5}>
          <Avatar src={activeChat.avatar}>
            {activeChat.name.charAt(0)}
          </Avatar>

          <Typography fontWeight={600}>
            {activeChat.name}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {activeChat.lastMessageAt}
          </Typography>

          <IconButton
            size="small"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>
              حظر المستخدم
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              حذف الرسائل
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              إبلاغ
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: 3,
          boxShadow: 1,
          height: 520,
          display: 'flex',
          width: "100%",
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
          {activeChat.messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </Box>
        <MessageInput />
      </Box>



    </Stack>

  );
}

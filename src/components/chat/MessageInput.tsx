import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useChat } from "../../context/ChatContext";

export default function MessageInput() {
  const [text, setText] = useState("");
  const { sendMessage } = useChat();

  return (
    <Box sx={{ p: 2, display: "flex", background: "#EAEAEB" }}>
      <TextField
        fullWidth
        size="small"
        placeholder="اكتب رسالتك هنا"
        sx={{
          bgcolor: "#ffffff",
          borderRadius: "20px",
          "& fieldset": {
            border: "none",
          },

          "&:hover fieldset": {
            border: "none",
          },

          "&.Mui-focused fieldset": {
            border: "none",
          },
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && text.trim()) {
            e.preventDefault();
            sendMessage(text);
            setText("");
          }
        }}
      />
      <IconButton
        onClick={() => {
          sendMessage(text);
          setText("");
        }}
        sx={{
          bgcolor: "#21A7DB",
          borderRadius: "50%",
          mr: 3,
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: "#1a91c9",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          },
        }}
      >
        <SendIcon
          sx={{
            color: "white",
            transform: "scaleX(-1)",
            transition: "transform 0.3s ease",
          }}
        />
      </IconButton>
    </Box>
  );
}

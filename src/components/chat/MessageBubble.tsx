import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function MessageBubble({ message }: any) {
  const isMe = message.sender === "me";

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ position: "relative", marginBottom: "1.5rem", justifySelf: isMe ? 'flex-start' : 'flex-end', }}
    >
      <Box
        justifySelf={isMe ? "flex-end" : "flex-start"}

        borderRadius={2}
        mb={1}
        maxWidth="70%"
        sx={{

          bgcolor: isMe ? '#F1F3F9' : '#1DA1F2',
          color: isMe ? '#000' : '#fff',
          px: 4,
          py: 2,
          borderRadius: isMe
            ? '12px 12px 12px 0'
            : '12px 12px 0 12px',
          mb: 2,
          maxWidth: '70%',

        }}
      >
        {message.text}

      </Box>
      {isMe && message.read && (
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            top: 55,
            right: 8,
            color: "#9CA3AF",
          }}
        >
          تمت القراءة
        </Typography>
      )}


    </Box>
  );
}

import { Box, Typography } from "@mui/material";

const MessagesHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        background: "linear-gradient(180deg, #F5EEFC 0%, #E4F3FD 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: 600,
          color: "#1F2937",
        }}
      >
        الرسائل
      </Typography>
    </Box>
  );
};

export default MessagesHeader;

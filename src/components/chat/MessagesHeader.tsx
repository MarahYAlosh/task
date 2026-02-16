import { Box, Typography } from "@mui/material";

const MessagesHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "204px",
        background: "linear-gradient(180deg, #F5EEFC 0%, #E4F3FD 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.9rem", md: "3rem" },
          fontWeight: 700,
          color: "#1F2937",
        }}
      >
        الرسائل
      </Typography>
    </Box>
  );
};

export default MessagesHeader;

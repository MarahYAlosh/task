import {
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";

import { useState } from "react";
import ChatList from "../chat/ChatList";
import ThreePOutlinedIcon from "@mui/icons-material/ThreePOutlined";
export default function ResponsiveDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  if (!isMobile) return null;

  return (
    <>
      <IconButton
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          position: "fixed",
          top: "32rem",
          right: 16,
          zIndex: 1300,
          bgcolor: "#fff",
          boxShadow: 1,
        }}
      >
        <ThreePOutlinedIcon sx={{ fontSize: 35 }} />
      </IconButton>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "85vw",
            maxWidth: 360,
            p: 2,
          },
        }}
      >
        <Box onClick={() => setOpen(false)}>
          <ChatList />
        </Box>
      </Drawer>
    </>
  );
}

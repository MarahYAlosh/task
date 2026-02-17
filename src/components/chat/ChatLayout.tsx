import { Box, useMediaQuery, useTheme } from "@mui/material";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import ResponsiveDrawer from "../common/ResponsiveDrawer";
import MessagesHeader from "./MessagesHeader.tsx";
import { useChat } from "../../context/ChatContext.tsx";
import { useState } from "react";
import ChatFilters from "./ChatFilters.tsx";

export default function ChatLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { chats, setFilter } = useChat();
  const [active, setActive] = useState("الكل");
  const handleFilter = (label: string) => {
    setActive(label);
    if (label === "الكل") setFilter("all");
    if (label === "المقروءة") setFilter("read");
    if (label === "غير المقروءة") setFilter("unread");
  };
  return (
    <>
      <MessagesHeader />
      <ChatFilters active={active} onFilter={handleFilter} />
      <Box display="flex" px={2} gap={3} sx={{ maxWidth: "1280px", mx: "auto" }}>
        {!isMobile && <ChatList chats={chats} />}
        <ChatWindow />
        <ResponsiveDrawer />
      </Box>
    </>
  );
}

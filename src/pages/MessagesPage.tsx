import ChatLayout from "../components/chat/ChatLayout";
import { Footer } from "../components/Footer";
import NewsletterSubscription from "../components/NewsletterSubscription";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { ChatProvider } from "../context/ChatContext";

export default function MessagesPage() {
  return (
    <ChatProvider>
      <UnifiedHeader />
      <ChatLayout />
      <NewsletterSubscription />
      <Footer />
    </ChatProvider>
  );
}

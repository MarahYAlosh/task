import ChatLayout from "../components/chat/ChatLayout";
import { Footer } from "../components/Footer";
import NewsletterSubscription from "../components/NewsletterSubscription";
import { Header} from "../components/Header";
import { ChatProvider } from "../context/ChatContext";

export default function MessagesPage() {
  return (
    <ChatProvider>
      <Header />
      <ChatLayout />
      <NewsletterSubscription />
      <Footer />
    </ChatProvider>
  );
}

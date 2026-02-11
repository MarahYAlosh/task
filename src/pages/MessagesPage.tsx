import ChatLayout from "../components/chat/ChatLayout";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import NewsletterSubscription from "../components/NewsletterSubscription";
import { ChatProvider } from "../context/ChatContext";

export default function MessagesPage() {
  return (
    <ChatProvider>
      <Navbar />
      <Header />
      <ChatLayout />
      <NewsletterSubscription />
      <Footer />
    </ChatProvider>
  );
}

import pic1 from "../assets/05ee48aade7b6e9524212508334e50ea61c70030 (1).jpg";
import pic2 from "../assets/5aab5459786b226d5d70e39a1dfa0e817fee1e4d.jpg";
import pic3 from "../assets/966bdcc20de9d1146da18068833210d399cd593e.jpg";
import pic4 from "../assets/9e03314b6be949db4da5ca3cd5c60d680034189d.jpg";
import pic5 from "../assets/cf487b776e6237097d2693602f44d214701dea7d.png";
import pic6 from "../assets/d0400c167c2b5599f72e19a01b70f51fb477fb65.jpg";

export const chats = [
  {
    id: 1,
    name: "أحمد علي",
    avatar: pic1,
    unread: true,
    lastMessageAt: "09:41 ص",
    lastMessage: "تمام، رح أرسل لك التفاصيل اليوم",
    messages: [
      {
        id: 1,
        text: "مرحبا أحمد",
        sender: "me",
        read: true,
        createdAt: "09:30 ص",
      },
      {
        id: 2,
        text: "أهلاً، كيفك؟",
        sender: "other",
        read: true,
        createdAt: "09:32 ص",
      },
      {
        id: 3,
        text: "ممكن تبعتلي التفاصيل؟",
        sender: "me",
        read: true,
        createdAt: "09:35 ص",
      },
      {
        id: 4,
        text: "تمام، رح أرسل لك التفاصيل اليوم",
        sender: "other",
        read: false,
        createdAt: "09:41 ص",
      },
    ],
  },

  {
    id: 2,
    name: "سارة محمد",
    avatar: pic2,
    unread: false,
    lastMessageAt: "أمس",
    lastMessage: "شكراً كتير ",
    messages: [
      {
        id: 1,
        text: "وصل الملف؟",
        sender: "me",
        read: true,
        createdAt: "08:10 م",
      },
      {
        id: 2,
        text: "اي نعم، وصل",
        sender: "other",
        read: true,
        createdAt: "08:12 م",
      },
      {
        id: 3,
        text: "شكراً كتير ",
        sender: "other",
        read: true,
        createdAt: "08:13 م",
      },
    ],
  },

  {
    id: 3,
    name: "محمد خالد",
    avatar: pic3,
    unread: true,
    lastMessageAt: "10:05 ص",
    lastMessage: "وين وصلنا بالموضوع؟",
    messages: [
      {
        id: 1,
        text: "صباح الخير",
        sender: "other",
        read: true,
        createdAt: "09:50 ص",
      },
      {
        id: 2,
        text: "صباح النور",
        sender: "me",
        read: true,
        createdAt: "09:52 ص",
      },
      {
        id: 3,
        text: "وين وصلنا بالموضوع؟",
        sender: "other",
        read: false,
        createdAt: "10:05 ص",
      },
    ],
  },

  {
    id: 4,
    name: "لين عبد الله",
    avatar: pic1,
    unread: false,
    lastMessageAt: "السبت",
    lastMessage: "خلص تمام ",
    messages: [
      {
        id: 1,
        text: "هل الاجتماع بكرا؟",
        sender: "other",
        read: true,
        createdAt: "11:20 ص",
      },
      {
        id: 2,
        text: "اي نعم الساعة 12",
        sender: "me",
        read: true,
        createdAt: "11:25 ص",
      },
      {
        id: 3,
        text: "خلص تمام ",
        sender: "other",
        read: true,
        createdAt: "11:26 ص",
      },
    ],
  },

  {
    id: 5,
    name: "شركة المستقبل",
    avatar: pic5,
    unread: true,
    lastMessageAt: "08:15 ص",
    lastMessage: "بانتظار ردكم",
    messages: [
      {
        id: 1,
        text: "أرسلنا العرض المحدث",
        sender: "me",
        read: true,
        createdAt: "أمس 05:40 م",
      },
      {
        id: 2,
        text: "بانتظار ردكم",
        sender: "other",
        read: false,
        createdAt: "08:15 ص",
      },
    ],
  },

  {
    id: 6,
    name: "علي حسين",
    avatar: pic6,
    unread: false,
    lastMessageAt: "الأحد",
    lastMessage: "نشوفك قريباً",
    messages: [
      {
        id: 1,
        text: "متى فاضي نلتقي؟",
        sender: "me",
        read: true,
        createdAt: "07:00 م",
      },
      {
        id: 2,
        text: "الأحد مناسب",
        sender: "other",
        read: true,
        createdAt: "07:05 م",
      },
      {
        id: 3,
        text: "تمام، نشوفك قريباً",
        sender: "other",
        read: true,
        createdAt: "07:06 م",
      },
    ],
  },
];

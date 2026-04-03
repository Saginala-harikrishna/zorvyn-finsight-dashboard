const ChatMessage = ({ sender, message }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`p-3 rounded-2xl max-w-[70%] ${
        isUser
          ? "bg-slate-900 text-white ml-auto"
          : "bg-white shadow-md"
      }`}
    >
      {message}
    </div>
  );
};

export default ChatMessage;
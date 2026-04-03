import { useState } from "react";
import { useSelector } from "react-redux";
import ChatMessage from "../components/ai/ChatMessage";
import PromptChips from "../components/ai/PromptChips";
import { generateAIResponse } from "../utils/aiResponses";

const AICopilot = () => {
  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = (query) => {
    const userQuery = query || input;

    if (!userQuery.trim()) return;

    const aiResponse = generateAIResponse(
      userQuery,
      transactions
    );

    setMessages((prev) => [
      ...prev,
      { sender: "user", message: userQuery },
      { sender: "ai", message: aiResponse },
    ]);

    setInput("");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        AI Finance Copilot
      </h1>

      <PromptChips onSelect={handleSend} />

      <div className="bg-slate-100 rounded-2xl p-5 min-h-[400px] space-y-4">
        {messages.length === 0 ? (
          <p className="text-slate-500">
            Ask anything about your expenses.
          </p>
        ) : (
          messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))
        )}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Ask about your expenses..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          className="flex-1 p-3 rounded-xl border"
        />

        <button
          onClick={() => handleSend()}
          className="px-5 py-3 bg-slate-900 text-white rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AICopilot;
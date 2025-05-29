import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Add your AI response handling logic here
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-800 p-4 rounded-lg">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded bg-gray-900 text-white"
        placeholder="Ask something..."
      />
      <button
        onClick={handleSend}
        className="bg-red-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function AIChatBox() {
  const { data: session } = useSession(); // Optional: gate by Pro plan
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/ai-strategy', {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow mt-6">
      <h2 className="text-xl font-semibold mb-2">AI Strategy Assistant 🤖</h2>
      <div className="space-y-3 max-h-80 overflow-y-auto text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <div className={\`inline-block p-2 rounded \${msg.role === 'user' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300'}\`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <div className="animate-pulse text-gray-400">Typing...</div>}
      </div>
      <div className="flex mt-4 space-x-2">
        <input
          type="text"
          className="w-full rounded bg-gray-800 text-white px-3 py-2 text-sm border border-gray-600"
          placeholder="Ask about tire strategy, pit windows, etc…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-primary text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}

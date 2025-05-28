'use client';

import { useState } from 'react';

export default function SupportPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);
    if (file) formData.append('file', file);

    await fetch('/api/support', {
      method: 'POST',
      body: formData,
    });

    setEmail('');
    setMessage('');
    setFile(null);
    setLoading(false);
    alert('Ticket sent!');
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Support</h1>
      <p className="text-gray-400 mb-6">
        Send us your issue and we’ll get back to you. You can also upload a PNG, JPG, or PDF (max 5MB).
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
        />
        <textarea
          placeholder="Your message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 min-h-[120px]"
        />
        <input
          type="file"
          accept=".png,.jpg,.jpeg,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
        >
          {loading ? 'Sending…' : 'Send Ticket'}
        </button>
      </form>
    </div>
  );
}

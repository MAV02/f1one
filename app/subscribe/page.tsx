'use client';

import { useState } from 'react';

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout', { method: 'POST' });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Unlock Pro Access 🏆</h1>
      <p className="text-lg text-gray-300 max-w-xl mb-6">
        Subscribe to ONEF1 Pro for live alerts, track map updates, AI strategy assistant, and race exports.
      </p>
      <button
        onClick={handleCheckout}
        className="bg-primary text-white px-8 py-3 rounded text-lg hover:bg-red-700 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Redirecting…' : 'Upgrade to Pro – $4.99/month'}
      </button>
    </div>
  );
}

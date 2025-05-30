'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getUserTickets, uploadTicketFile } from '@/lib/ticket';

export default function TicketStatusPage() {
  const sessionResult = useSession();
  const session = sessionResult?.data;

  const [tickets, setTickets] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      getUserTickets(session.user.email).then(setTickets);
    }
  }, [session]);

  const handleUpload = async (ticketId: string) => {
    if (!file) return;
    setUploading(true);
    await uploadTicketFile(ticketId, file);
    alert('File uploaded!');
    setFile(null);
    setUploading(false);
  };

  if (!session) {
    return (
      <div className="p-6 text-center text-gray-300">
        <h2 className="text-xl font-semibold">You must be signed in to view your tickets.</h2>
      </div>
    );
  }

  return (
    <div className="p-4 text-white max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📨 My Tickets</h1>
      {tickets.map((t) => (
        <div key={t.id} className="bg-gray-800 rounded p-4 mb-4 border border-gray-700">
          <p className="text-sm mb-1"><strong>ID:</strong> {t.id}</p>
          <p className="text-sm mb-1"><strong>Status:</strong> {t.status || 'Pending'}</p>
          <p className="text-sm mb-1"><strong>Message:</strong> {t.message}</p>
          <p className="text-xs text-gray-400 mb-2">{t.timestamp}</p>
          <div className="flex gap-2 items-center">
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="text-sm text-white bg-gray-900 border border-gray-600 p-1"
            />
            <button
              onClick={() => handleUpload(t.id)}
              disabled={uploading || !file}
              className="bg-primary px-3 py-1 text-sm rounded text-white disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Upload File'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
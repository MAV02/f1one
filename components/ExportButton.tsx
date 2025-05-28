'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { generateAndUploadReport } from '@/lib/pdf/generateReport';

export default function ExportButton({ title, content }: { title: string; content: string }) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    if (!session?.user) return;
    setLoading(true);
    await generateAndUploadReport({ title, content, isPro: true, uid: session.user.email });
    setLoading(false);
    alert('PDF Exported & Uploaded!');
  };

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="bg-primary text-white px-4 py-2 rounded mt-4"
    >
      {loading ? 'Exporting...' : '📄 Export PDF'}
    </button>
  );
}

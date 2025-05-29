import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { generateAndUploadReport } from '@/lib/pdf/generateReport';

export default function ExportButton({ title, content }: { title: string; content: string }) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    if (!session?.user?.id) {
      alert('You must be signed in to export.');
      return;
    }

    try {
      setLoading(true);
      await generateAndUploadReport({ title, content, isPro: true, uid: session.user.id });
      alert('Exported successfully!');
    } catch (err) {
      console.error('Export failed:', err);
      alert('Export failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      disabled={loading}
    >
      {loading ? 'Exporting...' : 'Export PDF'}
    </button>
  );
}
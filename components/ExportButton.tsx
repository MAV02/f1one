// components/ExportButton.tsx

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { generateAndUploadReport } from '@/lib/pdf/generateReport';

export default function ExportButton({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    if (!session?.user?.id) {
      alert('You must be logged in to export.');
      return;
    }

    try {
      setLoading(true);
      await generateAndUploadReport(
        title,
        content,
        true, // isPro = true
        session.user.id,
        'report.pdf'
      );
      alert('Exported successfully!');
    } catch (err) {
      console.error('Export failed:', err);
      alert('Export failed. See console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? 'Exporting...' : 'Export PDF'}
    </button>
  );
}

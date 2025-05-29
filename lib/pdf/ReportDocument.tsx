import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportDocument from './ReportDocument';

interface ExportPanelProps {
  title: string;
  content: string;
  isPro: boolean;
  track: string;
  driver: string;
}

export default function ExportPanel({
  title,
  content,
  isPro,
  track,
  driver,
}: ExportPanelProps) {
  const [ready, setReady] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setReady(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
      >
        Prepare PDF
      </button>

      {ready && (
        <PDFDownloadLink
          document={
            <ReportDocument
              title={title}
              content={content}
              isPro={isPro}
              track={track}
              driver={driver}
            />
          }
          fileName={`ONEF1_${track}_summary.pdf`}
          className="text-sm underline text-blue-400 block mt-2"
        >
          {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
}

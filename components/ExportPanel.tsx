import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportDocument from './ReportDocument';

interface ExportPanelProps {
  title: string;
  content: string;
  track: string;
  driver: string;
  isPro: boolean;
}

export default function ExportPanel({
  title,
  content,
  track,
  driver,
  isPro,
}: ExportPanelProps) {
  const [ready, setReady] = useState(true); // You can add real logic here

  return (
    <div className="p-4 rounded-md border bg-gray-900 text-white">
      <h3 className="text-lg font-semibold mb-2">Export Report</h3>
      <p className="text-sm mb-4">Generate a PDF summary for this session.</p>

      {ready && (
        <PDFDownloadLink
          document={
            <ReportDocument title={title} content={content} isPro={isPro}
              title={title}
              content={content}
              track={track}
              driver={driver}
              isPro={isPro}
            />
          }
          fileName={`ONEF1_${track}_summary.pdf`}
          className="text-sm underline text-blue-400"
        >
          {({ loading }) =>
            loading ? 'Generating PDF...' : 'Download Session Report'
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}
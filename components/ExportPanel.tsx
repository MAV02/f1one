'use client';

import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportDocument from '@/components/pdf/ReportDocument';
import { generateReport } from '@/lib/pdf/generateReport';

interface ExportPanelProps {
  title: string;
  content: string;
  isPro: boolean;
  track?: string;
  driver?: string;
}

export default function ExportPanel({
  title,
  content,
  isPro,
  track,
  driver,
}: ExportPanelProps) {
  const [fileName, setFileName] = useState('session_report');

  const handleExport = async () => {
    await generateReport(content, title, fileName);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="Enter file name"
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <div className="flex gap-2">
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Export as PDF (html2pdf.js)
        </button>
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
          fileName={`${fileName}_react.pdf`}
        >
          {({ loading }) =>
            loading ? 'Loading document...' : 'Download PDF (React)'
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

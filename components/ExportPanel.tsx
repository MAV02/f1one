'use client';

import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportDocument from '@/lib/pdf/ReportDocument';

interface ExportPanelProps {
  title: string;
  content: string;
  isPro: boolean;
  track: string;
  driver: string;
}

export default function ExportPanel({ title, content, isPro, track, driver }: ExportPanelProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="p-4 rounded-md border bg-gray-900 text-white shadow-md">
      <h2 className="text-lg font-semibold mb-2">Export Report</h2>
      <p className="text-sm mb-4">Generate a PDF with session data</p>
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
        fileName={`${title.replace(/\s+/g, '_').toLowerCase()}.pdf`}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        {({ loading }) => (loading ? 'Preparing document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
}
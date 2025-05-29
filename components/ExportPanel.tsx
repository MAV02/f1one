'use client';

import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportDocument from '@/components/pdf/ReportDocument';

type ExportPanelProps = {
  title: string;
  content: string;
};

const ExportPanel: React.FC<ExportPanelProps> = ({ title, content }) => {
  const [isReady, setIsReady] = useState(false);

  const handleGenerateClick = () => {
    setIsReady(true);
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-white space-y-4">
      <h2 className="text-xl font-bold">Export Report</h2>
      {!isReady ? (
        <button
          onClick={handleGenerateClick}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Generate PDF
        </button>
      ) : (
        <PDFDownloadLink
          document={<ReportDocument title={title} content={content} />}
          fileName="f1-report.pdf"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded inline-block"
        >
          {({ loading }) =>
            loading ? 'Preparing document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default ExportPanel;
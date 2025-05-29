'use client';

import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportDocument from '@/lib/pdf/ReportDocument';

type ExportPanelProps = {
  title: string;
  content: string;
  isPro: boolean;
};

const ExportPanel: React.FC<ExportPanelProps> = ({ title, content, isPro }) => {
  const [filename] = useState('report.pdf');

  return (
    <div className="p-4 rounded-md border bg-gray-900 text-white shadow-md">
      <h2 className="text-lg font-semibold mb-2">Export Panel</h2>
      <p className="mb-4 text-sm text-gray-300">Click below to download your report as a PDF.</p>
      <PDFDownloadLink
        document={<ReportDocument title={title} content={content} isPro={isPro} />}
        fileName={filename}
        className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm"
      >
        {({ loading }) => (loading ? 'Preparing document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default ExportPanel;
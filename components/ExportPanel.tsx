'use client';

import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportDocument from '@/lib/pdf/ReportDocument';

export default function ExportPanel() {
  const [track, setTrack] = useState('Monaco');
  const [driver, setDriver] = useState('Verstappen');
  const [ready, setReady] = useState(false);

  return (
    <div className="bg-gray-900 p-4 rounded-lg mt-6 border border-gray-700">
      <h2 className="text-lg font-semibold mb-2">🖨️ Export A4 Summary (Pro)</h2>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={track}
          onChange={(e) => setTrack(e.target.value)}
          placeholder="Track name"
          className="px-3 py-1 bg-gray-800 text-white border border-gray-600 rounded w-1/2"
        />
        <input
          type="text"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
          placeholder="Driver"
          className="px-3 py-1 bg-gray-800 text-white border border-gray-600 rounded w-1/2"
        />
      </div>
      <button
        className="bg-primary text-white px-4 py-2 rounded mb-3"
        onClick={() => setReady(true)}
      >
        Generate Report
      </button>
      {ready && (
        <PDFDownloadLink
          document={<ReportDocument track={track} driver={driver} />}
          fileName={`ONEF1_${track}_summary.pdf`}
          className="text-sm underline text-blue-400"
        >
          Download A4 PDF
        </PDFDownloadLink>
      )}
    </div>
  );
}

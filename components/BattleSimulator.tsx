'use client';

import { useState } from 'react';

const drivers = ['Verstappen', 'Hamilton', 'Leclerc', 'Norris', 'Russell', 'Alonso'];

type Result = {
  winner: string;
  summary: string;
};

export default function BattleSimulator() {
  const [driverA, setDriverA] = useState('');
  const [driverB, setDriverB] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  const simulateBattle = () => {
    if (!driverA || !driverB || driverA === driverB) return;
    const winner = Math.random() > 0.5 ? driverA : driverB;
    const summary = \`\${winner} outpaced \${driverA === winner ? driverB : driverA} by 6.3s in a simulated 25-lap stint.\`;
    setResult({ winner, summary });
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Driver Battle Simulator 🥊</h2>
      <div className="grid grid-cols-2 gap-4">
        <select value={driverA} onChange={(e) => setDriverA(e.target.value)} className="bg-gray-800 text-white p-2 rounded border border-gray-600">
          <option value="">Select Driver A</option>
          {drivers.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={driverB} onChange={(e) => setDriverB(e.target.value)} className="bg-gray-800 text-white p-2 rounded border border-gray-600">
          <option value="">Select Driver B</option>
          {drivers.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>
      <button
        onClick={simulateBattle}
        disabled={!driverA || !driverB || driverA === driverB}
        className="mt-4 bg-primary text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Simulate Battle
      </button>
      {result && (
        <div className="mt-4 text-sm bg-gray-800 text-white p-3 rounded border border-gray-700">
          <strong>🏁 Winner:</strong> {result.winner}<br />
          {result.summary}
        </div>
      )}
    </div>
  );
}

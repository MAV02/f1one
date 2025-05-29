'use client';

import { useState } from 'react';

export default function BattleSimulator() {
  const [driverA, setDriverA] = useState('');
  const [driverB, setDriverB] = useState('');
  const [result, setResult] = useState<{ winner: string; summary: string } | null>(null);

  const simulateBattle = () => {
    if (!driverA || !driverB || driverA === driverB) return;
    const winner = Math.random() > 0.5 ? driverA : driverB;
    const summary = `${winner} outpaced ${driverA === winner ? driverB : driverA} by 6.3s in a simulated 25-lap stint.`;
    setResult({ winner, summary });
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow text-white">
      <h2 className="text-xl font-bold mb-2">Driver Battle Simulator</h2>
      <div className="flex gap-2 mb-2">
        <input
          className="bg-gray-800 p-2 rounded w-1/2"
          placeholder="Driver A"
          value={driverA}
          onChange={(e) => setDriverA(e.target.value)}
        />
        <input
          className="bg-gray-800 p-2 rounded w-1/2"
          placeholder="Driver B"
          value={driverB}
          onChange={(e) => setDriverB(e.target.value)}
        />
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        onClick={simulateBattle}
      >
        Simulate
      </button>
      {result && (
        <div className="mt-4 text-sm text-gray-300">
          <strong>{result.winner}</strong> - {result.summary}
        </div>
      )}
    </div>
  );
}

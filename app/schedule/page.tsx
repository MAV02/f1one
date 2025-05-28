import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Race Schedule – ONEF1',
};

const raceCalendar = [
  { round: 9, name: 'Spanish Grand Prix', date: '2025-06-01', sessions: ['FP1', 'FP2', 'FP3', 'Quali', 'Race'] },
  { round: 10, name: 'Austrian Grand Prix', date: '2025-06-08', sessions: ['FP1', 'Sprint Quali', 'Sprint', 'Race'] },
  { round: 11, name: 'British Grand Prix', date: '2025-06-15', sessions: ['FP1', 'FP2', 'FP3', 'Quali', 'Race'] },
];

export default function SchedulePage() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📅 Upcoming Race Schedule</h1>
      <div className="space-y-6">
        {raceCalendar.map((race) => (
          <div key={race.round} className="bg-gray-900 rounded-lg p-4 border border-gray-700 shadow">
            <h2 className="text-lg font-semibold mb-1">{race.name}</h2>
            <p className="text-sm text-gray-400 mb-2">🗓 {race.date}</p>
            <div className="flex flex-wrap gap-2">
              {race.sessions.map((s, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-600 text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

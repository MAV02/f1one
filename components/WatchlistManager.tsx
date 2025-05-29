
import React from 'react';

type WatchlistManagerProps = {
  drivers: string[];
};

const WatchlistManager: React.FC<WatchlistManagerProps> = ({ drivers }) => {
  return (
    <>
      <div className="bg-gray-900 p-4 rounded-lg mt-6 border border-gray-700 shadow">
        <h2 className="text-lg font-semibold mb-3">👁️ My Watchlist</h2>
        <div className="flex flex-wrap gap-2">
          {drivers.map((driver) => (
            <span
              key={driver}
              className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {driver}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchlistManager;

'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { db } from '@/lib/firebase'; // assumes you have a configured Firestore export

const drivers = ['VER', 'HAM', 'LEC', 'NOR', 'RUS', 'ALO', 'PER', 'SAI'];

export default function WatchlistManager() {
  const { data: session } = useSession();
  const [watchlist, setWatchlist] = useState<string[]>([]);

  useEffect(() => {
    if (!session?.user?.email) return;
    const fetchWatchlist = async () => {
      const docRef = doc(db, 'watchlists', session.user.email);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setWatchlist(snap.data().items || []);
      }
    };
    fetchWatchlist();
  }, [session]);

  const toggleDriver = async (driver: string) => {
    let updated = watchlist.includes(driver)
      ? watchlist.filter((d) => d !== driver)
      : [...watchlist, driver];

    setWatchlist(updated);
    if (session?.user?.email) {
      await setDoc(doc(db, 'watchlists', session.user.email), {
        items: updated,
      });
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg mt-6 border border-gray-700 shadow">
      <h2 className="text-lg font-semibold mb-3">👁️ My Watchlist</h2>
      <div className="flex flex-wrap gap-2">
        {drivers.map((driver) => (
          <button
            key={driver}
            onClick={() => toggleDriver(driver)}
            className={\`px-3 py-1 rounded-full border text-sm \${watchlist.includes(driver)
              ? 'bg-primary text-white border-primary'
              : 'bg-gray-800 text-gray-300 border-gray-600'}\`}
          >
            {driver}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3">
        You’ll only receive alerts for selected drivers. Pro users can watch more than 1.
      </p>
    </div>
  );
}

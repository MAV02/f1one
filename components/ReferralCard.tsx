'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getReferralCount } from '@/lib/referrals';

export default function ReferralCard() {
  const { data: session } = useSession();
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      getReferralCount(session.user.email).then(setCount);
    }
  }, [session]);

  const referralId = session?.user?.email?.split('@')[0].replace(/\W/g, '');
  const link = `https://onef1.com/?ref=${referralId}`;

  return (
    <div className="p-4 border border-gray-700 rounded bg-gray-800 text-white">
      <h2 className="text-lg font-semibold mb-2">📢 Referral Program</h2>
      <p className="text-sm mb-2">You’ve referred <strong>{count}</strong> new users.</p>
      <div className="flex gap-2 items-center">
        <input type="text" value={link} readOnly className="bg-gray-900 p-1 w-full text-sm" />
        <button
          onClick={() => {
            navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="text-xs bg-primary text-white px-2 py-1 rounded"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

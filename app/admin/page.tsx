'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSession, signOut } from 'next-auth/react';
import type { Session } from 'next-auth';

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const sess = await getSession();
      if (!sess) {
        router.push('/');
      } else {
        setSession(sess);
      }
    };

    fetchSession();
  }, [router]);

  if (!session) {
    return <div className="p-8 text-white">Loading...</div>;
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <p className="mb-4">Welcome, {session.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}

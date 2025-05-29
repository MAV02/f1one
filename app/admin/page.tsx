
'use client';

import { useEffect, useState } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchSession() {
      const sess = await getServerSession(authOptions);
      if (!sess) {
        router.push('/');
      } else {
        setSession(sess);
      }
    }

    fetchSession();
  }, []);

  if (!session) {
    return <p>Loading admin dashboard...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {session.user?.email}</p>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { db } from '@/lib/firebase';

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);

  const isAdmin = session?.user?.email === 'm.vold@me.com';

  useEffect(() => {
    if (!isAdmin) return;

    const fetchData = async () => {
      const usersSnap = await getDocs(collection(db, 'users'));
      const ticketsSnap = await getDocs(collection(db, 'tickets'));
      setUsers(usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setTickets(ticketsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchData();
  }, [isAdmin]);

  if (!isAdmin) {
    return <p className="p-4 text-red-400">Access denied. Admins only.</p>;
  }

  return (
    <main className="p-4 max-w-5xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">🛠 Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Users</h2>
        <table className="w-full text-sm table-auto border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 px-2 py-1">Email</th>
              <th className="border border-gray-600 px-2 py-1">Pro?</th>
              <th className="border border-gray-600 px-2 py-1">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border border-gray-700 px-2 py-1">{user.email}</td>
                <td className="border border-gray-700 px-2 py-1">{user.pro ? '✅' : '—'}</td>
                <td className="border border-gray-700 px-2 py-1">{user.createdAt || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Support Tickets</h2>
        <table className="w-full text-sm table-auto border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 px-2 py-1">Ticket ID</th>
              <th className="border border-gray-600 px-2 py-1">Email</th>
              <th className="border border-gray-600 px-2 py-1">Message</th>
              <th className="border border-gray-600 px-2 py-1">Time</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(t => (
              <tr key={t.id}>
                <td className="border border-gray-700 px-2 py-1">{t.id}</td>
                <td className="border border-gray-700 px-2 py-1">{t.email}</td>
                <td className="border border-gray-700 px-2 py-1">{t.message}</td>
                <td className="border border-gray-700 px-2 py-1">{t.timestamp || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

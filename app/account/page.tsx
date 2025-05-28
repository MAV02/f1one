'use client';

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '@/lib/firebase';

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsub = onAuthStateChanged(auth, (usr) => setUser(usr));
    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(getAuth(app));
    window.location.href = '/';
  };

  return (
    <div className="px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Your Account</h1>
      {user ? (
        <>
          <p className="text-gray-300 mb-4">Signed in as {user.email}</p>
          <p className="mb-6 text-green-400">✅ Pro Subscription Active</p>
          <button
            onClick={logout}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded transition"
          >
            Sign out
          </button>
        </>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}

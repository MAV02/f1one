'use client';

import { useEffect, useState } from 'react';
import { signInWithGoogle, logout, getCurrentUser } from '@/lib/firebaseAuthHelpers';

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold mb-4">Account</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button className="mt-2 bg-red-600 px-4 py-2 rounded" onClick={logout}>
            Sign Out
          </button>
        </div>
      ) : (
        <button className="bg-green-600 px-4 py-2 rounded" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
      )}
    </div>
  );
}
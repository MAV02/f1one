// components/SessionSwitcher.tsx
import React from 'react';

type Props = {
  session: string;
  setSession: (value: string) => void;
};

export default function SessionSwitcher({ session, setSession }: Props) {
  return (
    <div className="flex gap-2">
      {['Practice', 'Qualifying', 'Race'].map((option) => (
        <button
          key={option}
          className={`px-4 py-2 rounded ${session === option ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          onClick={() => setSession(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

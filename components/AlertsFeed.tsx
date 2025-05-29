import React from 'react';

type Props = {
  session: string;
};

export default function AlertsFeed({ session }: Props) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <p className="text-sm text-gray-300">Live alerts for: <strong>{session}</strong></p>
      {/* Future alerts logic */}
    </div>
  );
}
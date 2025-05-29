import React from 'react';

interface Props {
  session: string;
}

export default function AustraliaLayout({ session }: Props) {
  return (
    <div className="track-layout">
      <svg viewBox="0 0 100 100" className="w-full h-auto text-white">
        <path d="M10,10 C30,30 70,30 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="50%" y="95%" textAnchor="middle" fontSize="5" fill="currentColor">Australia Circuit - {session}</text>
      </svg>
    </div>
  );
}

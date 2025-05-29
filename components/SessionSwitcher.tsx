'use client';
import React from 'react';

const SessionSwitcher = () => {
  const options = ['FP1', 'FP2', 'FP3', 'Quali', 'Race'];
  const [selected, setSelected] = React.useState('FP1');

  return (
    <div className="flex space-x-2 mt-4 md:mt-0">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setSelected(opt)}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            selected === opt ? 'bg-white text-black' : 'bg-transparent text-white border-white'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default SessionSwitcher;
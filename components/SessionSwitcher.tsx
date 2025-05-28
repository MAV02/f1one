'use client';

type Props = {
  session: string;
  setSession: (val: string) => void;
};

export default function SessionSwitcher({ session, setSession }: Props) {
  const options = ['FP1', 'FP2', 'FP3', 'Quali', 'Race'];

  return (
    <div className="flex space-x-2 mt-4 md:mt-0">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setSession(opt)}
          className={\`px-4 py-1 rounded-full border transition text-sm \${session === opt
            ? 'bg-primary text-white border-transparent'
            : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}\`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

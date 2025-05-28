'use client';

import { useEffect, useState } from 'react';

export default function PWABanner() {
  const [prompt, setPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPrompt(e);
      setShow(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = () => {
    prompt?.prompt();
    prompt?.userChoice.then(() => setShow(false));
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-black text-white px-4 py-3 rounded border border-gray-700 z-50 flex items-center justify-between">
      <span>Install ONEF1 for faster access 🚀</span>
      <button
        onClick={handleInstall}
        className="bg-primary px-3 py-1 rounded text-white text-sm ml-4"
      >
        Add to Home Screen
      </button>
    </div>
  );
}

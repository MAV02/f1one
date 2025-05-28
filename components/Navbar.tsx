'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full bg-black border-b border-gray-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Image src="/faceicon.png" alt="ONEF1 Logo" width={32} height={32} />
        <Link href="/" className="text-xl font-bold text-white">
          ONEF1
        </Link>
      </div>
      <nav className="flex items-center gap-6 text-sm">
        <Link href="/dashboard" className="text-gray-300 hover:text-white transition">Dashboard</Link>
        <Link href="/support" className="text-gray-300 hover:text-white transition">Support</Link>
        <Link href="/account" className="text-gray-300 hover:text-white transition">Account</Link>
      </nav>
    </header>
  );
}

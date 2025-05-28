import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800 text-sm text-gray-400 py-6 px-4 text-center">
      <p className="mb-2">
        Built with ❤️ by <Link href="https://onef1.com" className="text-white hover:underline">ONEF1</Link>
      </p>
      <p>
        © {new Date().getFullYear()} ONEF1. All rights reserved.
      </p>
      <p className="mt-2">
        <Link href="/referral" className="text-primary hover:underline">Get $5 OFF – Share ONEF1 with friends</Link>
      </p>
    </footer>
  );
}

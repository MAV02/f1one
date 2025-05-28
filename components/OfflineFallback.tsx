export default function OfflineFallback() {
  return (
    <div className="h-screen flex items-center justify-center text-white bg-black">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">📴 Offline Mode</h1>
        <p className="text-sm text-gray-400">You’re currently offline. We’ll restore live data as soon as you reconnect.</p>
      </div>
    </div>
  );
}

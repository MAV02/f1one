import React from 'react';

type ChinaLayoutProps = {
  session: string;
};

const ChinaLayout: React.FC<ChinaLayoutProps> = ({
  session,
}) => {
  return (
    <div className="rounded-md border p-4 shadow-md bg-gray-900 text-white">
      <h3 className="text-lg font-semibold mb-2">China Circuit</h3>
      <p className="text-sm">Session: {session}</p>
      <div className="mt-4 h-40 bg-gray-800 flex items-center justify-center text-gray-400">
        Track map preview coming soon...
      </div>
    </div>
  );
};

export default ChinaLayout;

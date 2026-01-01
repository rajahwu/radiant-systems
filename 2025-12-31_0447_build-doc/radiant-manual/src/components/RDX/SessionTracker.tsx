// src/types/rdx.ts
export interface RDXSession {
  id: string;
  projectId: string;
  startTime: string;
  status: 'active' | 'complete';
  logs: RDXEntry[];
}

export interface RDXEntry {
  timestamp: string;
  type: 'decision' | 'artifact' | 'blocker';
  content: string;
}

// src/components/RDX/SessionTracker.tsx
import React, { useState } from 'react';

export const SessionTracker = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="p-6 bg-charcoal-800 border-l-4 border-teal-300 rounded-r-lg shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">RDX SESSION MANAGER</h2>
        <button 
          onClick={() => setActive(!active)}
          className={`px-4 py-2 rounded font-bold transition-colors ${
            active ? 'bg-red-500 hover:bg-red-600' : 'bg-teal-400 hover:bg-teal-500 text-charcoal-900'
          }`}
        >
          {active ? 'END SPRINT' : 'START SPRINT'}
        </button>
      </div>
      <div className="space-y-2 text-sm font-mono text-gray-300">
        <p>[SESS]: {active ? 'Recording to sqlite3...' : 'Standby'}</p>
      </div>
    </div>
  );
};

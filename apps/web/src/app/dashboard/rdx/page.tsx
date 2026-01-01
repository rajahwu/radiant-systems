'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SessionManager } from '../../rdx/core/SessionManager';
import { Session } from '../../rdx/types/session.types';

// Instantiate manager (Client-side singleton for demo purposes)
const manager = new SessionManager();

export default function RDXPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [logInput, setLogInput] = useState('');

  const handleStart = () => {
    const newSession = manager.startSession('RADIANT-SYS', 'User-1', { tags: ['manual-test'] });
    setSession({ ...newSession }); // Spread to trigger re-render
  };

  const handleLog = () => {
    if (!logInput) return;
    manager.logEntry('insight', logInput);
    const current = manager.getSession(session!.id);
    setSession({ ...current! });
    setLogInput('');
  };

  const handleEnd = () => {
    const ended = manager.endSession();
    setSession({ ...ended });
  };

  return (
    <div className="max-w-5xl mx-auto p-8 font-sans">
      <Link
        href="/manual"
        className="inline-flex items-center gap-2 mb-6 text-teal-400 hover:text-teal-300 transition-colors"
      >
        ← Back to Manual
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Documentation */}
        <div className="space-y-8">
          <div className="border-l-4 border-teal-300 pl-6">
            <h1 className="text-4xl font-bold text-teal-300 mb-2">1. RDX Session</h1>
            <p className="text-xl text-gray-400">Foundation Layer</p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p>Session logging and tracking across agents and projects. The immutable history of the build.</p>
            
            <h3 className="text-teal-300 mt-6">File Structure</h3>
            <pre className="bg-charcoal-800 p-4 rounded text-sm font-mono overflow-x-auto">
{`rdx-session/
├── src/
│   ├── core/
│   │   ├── SessionManager.ts
│   │   └── EntryLogger.ts
│   └── types/
│       ├── session.types.ts
│       └── entry.types.ts`}
            </pre>

            <h3 className="text-teal-300 mt-6">Integration Points</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Grindhouse:</strong> Feeds execution logs to Dropframe.</li>
              <li><strong className="text-white">Content Factor:</strong> Tracks content creation sessions.</li>
              <li><strong className="text-white">Lattice Sync:</strong> Provides session state for agent coordination.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Live Demo */}
        <div className="bg-charcoal-800 rounded-lg p-6 border border-gray-700 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-mono text-white">Live Session Console</h2>
            <div className={`h-3 w-3 rounded-full ${session?.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
          </div>

          {!session || session.status === 'complete' ? (
            <button 
              onClick={handleStart}
              className="w-full py-3 bg-teal-300 text-charcoal-900 font-bold rounded hover:bg-teal-200 transition-colors"
            >
              INITIALIZE RDX SESSION
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-charcoal-900 p-4 rounded h-64 overflow-y-auto font-mono text-sm space-y-2 border border-gray-800">
                <div className="text-gray-500">[{session.startTime}] Session initialized: {session.id}</div>
                {session.entries.map(entry => (
                  <div key={entry.id} className="text-gray-300">
                    <span className="text-teal-500">[{entry.type.toUpperCase()}]</span> {entry.content}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={logInput}
                  onChange={(e) => setLogInput(e.target.value)}
                  placeholder="Log an insight..."
                  className="flex-1 bg-charcoal-900 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-teal-300"
                  onKeyDown={(e) => e.key === 'Enter' && handleLog()}
                />
                <button onClick={handleLog} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Log</button>
              </div>

              <button 
                onClick={handleEnd}
                className="w-full py-2 border border-red-500 text-red-500 rounded hover:bg-red-500/10 transition-colors uppercase text-sm tracking-widest"
              >
                Terminate Session
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
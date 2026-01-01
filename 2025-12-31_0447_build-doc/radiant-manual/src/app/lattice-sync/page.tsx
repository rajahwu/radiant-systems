'use client';

import React, { useState, useEffect } from 'react';
import { Card, Heading, Button } from '@clearline7/components';
import { SetDefinitionProvider } from '@clearline7/theme'
import { TechDocs } from '@clearline7/set-definitions'

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'outline', className?: string }) => {
  return <span className="px-2 py-1 bg-gray-700 rounded text-xs">{children}</span>
}

// Mock Nodes in the Lattice
const NODES = [
  { id: 'DROP-01', name: 'Dropframe Prime', role: 'Research', status: 'idle' },
  { id: 'GRIND-A', name: 'Grindline Alpha', role: 'Production', status: 'idle' },
  { id: 'VSM-HUB', name: 'VSM Central', role: 'Archive', status: 'idle' },
  { id: 'RIT-PUB', name: 'RitOps Net', role: 'Publication', status: 'idle' },
];

export default function LatticeSyncPage() {
  const [nodes, setNodes] = useState(NODES);
  const [syncLog, setSyncLog] = useState<string[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  // Simulate a Lattice Protocol Handshake
  const initiateSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncLog([]); // Clear previous logs
    
    const protocolSteps = [
      { t: 0, msg: '[INIT] Broadcast Signal: UPDATE_PENDING', status: 'locking' },
      { t: 800, msg: '[LOCK] Acquiring state locks on all nodes...', status: 'locked' },
      { t: 1600, msg: '[SYNC] Diffing state vectors (Delta: 24kb)...', status: 'syncing' },
      { t: 2400, msg: '[ACK] Nodes Acknowledge receipt.', status: 'acking' },
      { t: 3000, msg: '[FREE] Locks released. State consistent.', status: 'idle' }
    ];

    protocolSteps.forEach((step, index) => {
      setTimeout(() => {
        setSyncLog(prev => [...prev, `${new Date().toLocaleTimeString()} ${step.msg}`]);
        
        // Visual updates based on protocol stage
        setNodes(prev => prev.map(n => {
          if (step.status === 'idle') return { ...n, status: 'idle' };
          // Randomize active nodes for visual effect
          return { ...n, status: step.status };
        }));

        if (index === protocolSteps.length - 1) setIsSyncing(false);
      }, step.t);
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans text-cream-50">
      <SetDefinitionProvider setDefinition={TechDocs} >
      {/* HEADER */}
      <div className="mb-12 border-b border-charcoal-700 pb-6 flex justify-between items-end">
        <div>
          <Heading level={1}>5. Lattice Sync</Heading>
          <Heading level={3}>Coordination & Handoffs</Heading>
        </div>
        <Badge className="bg-charcoal-800 text-teal-300 border border-teal-900 animate-pulse">
          PROTOCOL: ACTIVE
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT COL: PROTOCOL DEFINITION */}
        <div className="space-y-8">
          <Card>
            <Heading level={4}>The "Dark Mode" Logic</Heading>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Lattice Sync is the invisible layer. It does not produce content; it ensures <strong>state consistency</strong>. 
              When Dropframe finishes a research brief, Lattice Sync instantly updates the context for Grindline's agents without human file-shuffling.
            </p>
            <ul className="space-y-2 mt-4 text-sm text-gray-400 font-mono">
              <li>• State Locking (Mutex)</li>
              <li>• Delta Broadcasting</li>
              <li>• Context Injection</li>
            </ul>
          </Card>

          <div>
             <Heading level={5}>Directory Map</Heading>
             <pre className="bg-charcoal-900 p-4 rounded text-xs font-mono text-gray-400 border border-charcoal-700">
{`lattice-sync/
├── src/
│   ├── protocols/       # Handoff Logic
│   │   ├── Handshake.ts
│   │   └── StateLock.ts
│   ├── context/         # Shared Memory
│   │   ├── VectorStore.ts
│   │   └── ContextGraph.ts
│   └── agents/          # Node Definitions
│       └── NodeRegistry.ts`}
             </pre>
          </div>
        </div>

        {/* RIGHT COL: NETWORK MONITOR */}
        <div className="space-y-6">
           <Card>
             {/* HUD Header */}
             <div className="p-3 bg-charcoal-900 border-b border-charcoal-800 flex justify-between items-center">
               <span className="font-mono text-xs text-blue-500 tracking-widest">NETWORK_TOPOLOGY_V4</span>
               <Button 
                 size="sm" 
                 variant="primary" 
                 onClick={initiateSync}
                 disabled={isSyncing}
                 className={isSyncing ? 'opacity-50' : ''}
               >
                 {isSyncing ? 'SYNCING...' : 'TRIGGER HANDSHAKE'}
               </Button>
             </div>

             {/* Node Grid */}
             <div className="p-6 grid grid-cols-2 gap-4">
               {nodes.map((node) => (
                 <div 
                   key={node.id} 
                   className={`p-4 rounded border transition-all duration-300 ${
                     node.status === 'locked' || node.status === 'syncing'
                       ? 'bg-blue-900/20 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                       : 'bg-charcoal-900 border-charcoal-700'
                   }`}
                 >
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-xs font-mono text-gray-500">{node.id}</span>
                     <div className={`h-2 w-2 rounded-full ${
                       node.status === 'idle' ? 'bg-gray-600' : 'bg-blue-400 animate-ping'
                     }`} />
                   </div>
                   <div className="font-bold text-sm text-gray-200">{node.name}</div>
                   <div className="text-xs text-blue-400 mt-1 uppercase tracking-wider">
                     {node.status}
                   </div>
                 </div>
               ))}
             </div>

             {/* Terminal Output */}
             <div className="bg-black p-4 h-40 overflow-y-auto font-mono text-xs border-t border-charcoal-800">
               {syncLog.length === 0 && <span className="text-gray-700">Listening for state changes...</span>}
               {syncLog.map((log, i) => (
                 <div key={i} className="text-blue-400/80 mb-1">
                   {log}
                 </div>
               ))}
               {isSyncing && <span className="text-blue-500 animate-pulse">_</span>}
             </div>
           </Card>
        </div>

      </div>
      </SetDefinitionProvider>
    </div>
  );
}
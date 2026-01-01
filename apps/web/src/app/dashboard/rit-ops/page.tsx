'use client';

import React, { useState, useEffect } from 'react';
import { SetDefinitionProvider } from '@clearline7/theme'
import { TechDocs } from '@clearline7/set-definitions'
import { Card, Heading, Button } from '@clearline7/components';

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'outline', className?: string }) => {
  return <span className="px-2 py-1 bg-gray-700 rounded text-xs">{children}</span>
}


// Mock Broadcast Channels
const CHANNELS = [
  { id: 'PUB-WEB', name: 'Main Website', url: 'radiant.systems', status: 'live', latency: '24ms' },
  { id: 'SUB-NEWS', name: 'Substack Feed', url: 'newsletter.radiant', status: 'live', latency: '120ms' },
  { id: 'INT-WIKI', name: 'Internal Wiki', url: 'lattice.local', status: 'secure', latency: '1ms' },
  { id: 'SOC-BOT', name: 'Social Autopilot', url: 'x.com/api', status: 'offline', latency: '--' },
];

export default function RitOpsPage() {
  const [channels, setChannels] = useState(CHANNELS);
  const [signalStrength, setSignalStrength] = useState(98);
  const [isDeploying, setIsDeploying] = useState(false);

  // Simulate signal fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(prev => Math.min(100, Math.max(85, prev + (Math.random() * 4 - 2))));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleChannel = (id: string) => {
    setIsDeploying(true);
    setTimeout(() => {
      setChannels(prev => prev.map(c => {
        if (c.id !== id) return c;
        return { ...c, status: c.status === 'offline' ? 'live' : 'offline' };
      }));
      setIsDeploying(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans text-cream-50">
      <SetDefinitionProvider setDefinition={TechDocs}>
      {/* HEADER */}
      <div className="mb-12 border-b border-charcoal-700 pb-6 flex justify-between items-end">
        <div>
          <Heading level={1}>7. RIT Ops</Heading>
          <Heading level={3}>Publication & Signal Control</Heading>
        </div>
        <div className="text-right flex flex-col items-end">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Global Signal</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-mono text-teal-400">{signalStrength.toFixed(1)}%</span>
            <div className={`h-3 w-3 rounded-full ${signalStrength > 90 ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT COL: DOCTRINE */}
        <div className="space-y-8">
          <Card>
            <Heading level={4}>The Public Interface</Heading>
            <p className="text-gray-300 mb-4 leading-relaxed">
              RIT Ops (Radiant Interface Technology) is the <strong>Publication Layer</strong>. It is the only layer the outside world sees.
              It enforces the "Air Gap" security model—internal drafts never touch the public internet until they are explicitly signed and broadcasted here.
            </p>
            <div className="mt-4 p-4 bg-charcoal-900 rounded border border-charcoal-700">
              <span className="text-xs font-mono text-gray-500 uppercase block mb-2">Deployment Protocol</span>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Badge variant="outline" className="border-gray-600">Git Tag</Badge>
                <span>→</span>
                <Badge variant="outline" className="border-gray-600">CI/CD Build</Badge>
                <span>→</span>
                <Badge variant="outline" className="border-gray-600">Edge Cache</Badge>
                <span>→</span>
                <span className="text-teal-300 font-bold">LIVE</span>
              </div>
            </div>
          </Card>

          <div>
             <Heading level={5}>Directory Map</Heading>
             <pre className="bg-charcoal-900 p-4 rounded text-xs font-mono text-gray-400 border border-charcoal-700">
{`rit-ops/
├── src/
│   ├── deployment/      # CI/CD Logic
│   │   ├── VercelAdapter.ts
│   │   └── DockerFile
│   ├── analytics/       # Signal Monitoring
│   │   └── TrafficAnalyzer.ts
│   └── public-api/      # The Face
│       └── GraphQL.schema`}
             </pre>
          </div>
        </div>

        {/* RIGHT COL: BROADCAST DECK */}
        <div className="space-y-6">
           <Card>
             <div className="p-3 bg-charcoal-900 border-b border-charcoal-800 flex justify-between items-center">
               <span className="font-mono text-xs text-red-500 tracking-widest">BROADCAST_TRANSMISSION_V1</span>
               {isDeploying && <span className="text-xs text-yellow-500 animate-pulse font-mono">DEPLOYING...</span>}
             </div>

             <div className="divide-y divide-charcoal-800">
               {channels.map((channel) => (
                 <div key={channel.id} className="p-4 flex items-center justify-between hover:bg-charcoal-900/50 transition-colors">
                   
                   {/* Channel Info */}
                   <div>
                     <div className="flex items-center gap-3 mb-1">
                       <span className={`h-2 w-2 rounded-full ${
                         channel.status === 'live' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 
                         channel.status === 'secure' ? 'bg-blue-500' : 'bg-gray-600'
                       }`} />
                       <span className="font-bold text-gray-200">{channel.name}</span>
                       <span className="text-[10px] font-mono text-gray-500 px-1 border border-charcoal-700 rounded">
                         {channel.id}
                       </span>
                     </div>
                     <div className="font-mono text-xs text-gray-500 pl-5">
                       {channel.url} <span className="text-charcoal-600">|</span> {channel.latency}
                     </div>
                   </div>

                   {/* Controls */}
                   <div className="flex items-center">
                     {channel.status === 'secure' ? (
                       <Badge className="bg-blue-900/30 text-blue-400 border border-blue-900">INTERNAL</Badge>
                     ) : (
                       <Button 
                         size="sm"
                         variant={channel.status === 'live' ? 'secondary' : 'primary'}
                         onClick={() => toggleChannel(channel.id)}
                         disabled={isDeploying}
                         className={`text-xs font-mono w-24 ${
                           channel.status === 'live' 
                             ? 'text-red-400 hover:bg-red-900/20 hover:text-red-300' 
                             : 'text-green-400 hover:bg-green-900/20'
                         }`}
                       >
                         {channel.status === 'live' ? 'CUT FEED' : 'GO LIVE'}
                       </Button>
                     )}
                   </div>

                 </div>
               ))}
             </div>

             <div className="p-3 bg-black border-t border-charcoal-800 flex justify-between text-[10px] font-mono text-gray-600 uppercase">
               <span>Uptime: 99.998%</span>
               <span>Packets: 4.2TB</span>
               <span>Region: US-EAST-1</span>
             </div>
           </Card>
        </div>

      </div>
    </SetDefinitionProvider>
    </div>
  );
}
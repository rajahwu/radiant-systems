'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { Card, Heading } from '@clearline7/components';

const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return <div className={`rounded-lg shadow-md p-6 bg-charcoal-800 ${className}`}>{children}</div>
}

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'outline', className?: string }) => {
  return <span className="px-2 py-1 bg-gray-700 rounded text-xs">{children}</span>
}

const MODULES = [
  { 
    id: '01', 
    slug: 'rdx', 
    title: 'RDX Session', 
    role: 'Foundation Layer', 
    desc: 'Immutable logs & session tracking.',
    color: 'border-teal-500',
    status: 'ONLINE'
  },
  { 
    id: '02', 
    slug: 'grindhouse', 
    title: 'Grindhouse', 
    role: 'Execution Layer', 
    desc: 'Dropframe Research & Grindline Production.',
    color: 'border-purple-500',
    status: 'ONLINE'
  },
  { 
    id: '03', 
    slug: 'content-factor', 
    title: 'Content Factor', 
    role: 'Pipeline Layer', 
    desc: 'Asset transformation & assembly line.',
    color: 'border-indigo-500',
    status: 'IDLE'
  },
  { 
    id: '04', 
    slug: 'vsm-school', 
    title: 'VSM School', 
    role: 'Education Layer', 
    desc: 'Visual Systems Mastery curriculum.',
    color: 'border-yellow-500',
    status: 'ACTIVE'
  },
  { 
    id: '05', 
    slug: 'lattice-sync', 
    title: 'Lattice Sync', 
    role: 'Coordination Layer', 
    desc: 'Multi-agent state federation.',
    color: 'border-blue-500',
    status: 'LOCKED'
  },
  { 
    id: '06', 
    slug: 'clearline-7', 
    title: 'Clearline 7', 
    role: 'Formatting Layer', 
    desc: 'Design system & enforcement rig.',
    color: 'border-gray-400',
    status: 'READY'
  },
  { 
    id: '07', 
    slug: 'rit-ops', 
    title: 'RIT Ops', 
    role: 'Publication Layer', 
    desc: 'Public interface & signal control.',
    color: 'border-red-500',
    status: 'LIVE'
  }
];

export default function CommandDashboard() {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen p-8 font-sans bg-charcoal-900 text-cream-50 selection:bg-teal-300 selection:text-charcoal-900">
      
      {/* COMMAND HEADER */}
      <header className="mb-12 border-b-2 border-charcoal-700 pb-6 flex flex-col md:flex-row justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-4 w-4 bg-teal-300 rounded-sm animate-pulse shadow-[0_0_10px_rgba(50,184,184,0.5)]"></div>
            <span className="font-mono text-sm text-teal-300 tracking-widest">SYSTEM_READY</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tighter text-white">RADIANT SEVEN</h1>
          <p className="text-xl text-gray-400 mt-2 font-light">Operational Command Deck</p>
        </div>

        <div className="text-right mt-6 md:mt-0">
          <div className="font-mono text-3xl text-gray-200">{time}</div>
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-1">
            Local Time / Philadelphia / US-EST
          </div>
        </div>
      </header>

      {/* MODULE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MODULES.map((mod) => (
          <Link href={`/${mod.slug}`} key={mod.id} className="group">
            <Card className={`h-full p-6 bg-charcoal-800 border-l-4 ${mod.color} hover:bg-charcoal-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group-hover:border-l-8`}>
              
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-4xl font-bold text-gray-700 opacity-30 group-hover:opacity-50 transition-opacity">
                  {mod.id}
                </span>
                <Badge variant="outline" className="font-mono text-xs border-gray-600 group-hover:border-white transition-colors">
                  {mod.status}
                </Badge>
              </div>

              <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                {mod.title}
              </h2>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                {mod.role}
              </div>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {mod.desc}
              </p>

              <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                <span className="text-teal-300 font-mono text-sm">ACCESS MODULE →</span>
              </div>

            </Card>
          </Link>
        ))}
      </div>

      {/* FOOTER METRICS */}
      <footer className="mt-20 border-t border-charcoal-800 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
        <div>
          <span className="block text-gray-700 mb-1">Version</span>
          <span className="text-gray-300">v1.0.0 (Build 2025-12-31)</span>
        </div>
        <div>
          <span className="block text-gray-700 mb-1">Architecture</span>
          <span className="text-gray-300">Next.js / SQLite / Clearline 7</span>
        </div>
        <div>
          <span className="block text-gray-700 mb-1">Environment</span>
          <span className="text-gray-300">Local / OptiPlex Host</span>
        </div>
        <div>
          <span className="block text-gray-700 mb-1">Operator</span>
          <span className="text-teal-500">Authenticated</span>
        </div>
      </footer>

    </main>
  );
}
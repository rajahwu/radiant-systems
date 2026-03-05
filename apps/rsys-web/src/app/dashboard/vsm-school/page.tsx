'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SetDefinitionProvider } from '@clearline7/theme'
import { TechDocs } from '@clearline7/set-definitions'
import { Card, Heading, Button } from '@clearline7/components';

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'outline', className?: string }) => {
  return <span className="px-2 py-1 bg-gray-700 rounded text-xs">{children}</span>
}


// Mock "Curd" Data (The 26 Training Cards)
const VSM_DECK = [
  { 
    id: '01', 
    suit: 'CORE',
    title: 'THE SETUP', 
    front: 'The workspace is the mind. A clean desk is a clean thought.',
    back: 'DRILL: Clear all surfaces. Align monitors. Verify network status. 09:00 START.',
    color: 'border-teal-400'
  },
  { 
    id: '02', 
    suit: 'CORE',
    title: 'THE SIGNAL', 
    front: 'Noise is the enemy. Signal is the truth.',
    back: 'DRILL: Identify the one metric that matters today. Ignore all else until noon.',
    color: 'border-teal-400'
  },
  { 
    id: '03', 
    suit: 'OPS',
    title: 'THE SPRINT', 
    front: 'Velocity requires direction. Momentum requires mass.',
    back: 'DRILL: 90-minute strict timeblock. No context switching. Pure output.',
    color: 'border-orange-400'
  },
  { 
    id: '04', 
    suit: 'OPS',
    title: 'THE REST', 
    front: 'Recovery is part of the work.',
    back: 'DRILL: 15-minute complete detach. Walk away from the screen. Reset eyes.',
    color: 'border-orange-400'
  }
];

export default function VSMSchoolPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const activeCard = VSM_DECK[activeCardIndex];

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setActiveCardIndex((prev) => (prev + 1) % VSM_DECK.length);
    }, 200);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans text-cream-50">
      <SetDefinitionProvider setDefinition={TechDocs}>
      <Link
        href="/manual"
        className="inline-flex items-center gap-2 mb-6 text-teal-400 hover:text-teal-300 transition-colors"
      >
        ← Back to Manual
      </Link>
      {/* HEADER */}
      <div className="mb-12 border-b border-charcoal-700 pb-6">
        <Heading level={1}>4. VSM School</Heading>
        <Heading level={3}>Visual Systems Mastery</Heading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT COL: DOCTRINE */}
        <div className="space-y-8">
          <Card>
            <Heading level={4}>Pedagogy</Heading>
            <p className="text-gray-300 mb-4">
              VSM School replaces traditional "documentation" with <strong>active recall drills</strong>. 
              Knowledge isn't static text; it is a ritualized performance.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm mt-6">
              <div className="bg-charcoal-900 p-3 rounded">
                <span className="text-gray-500 block text-xs uppercase">Structure</span>
                <span className="text-white font-mono">Time {'->'} Block {'->'} Page {'->'} Card</span>
              </div>
              <div className="bg-charcoal-900 p-3 rounded">
                <span className="text-gray-500 block text-xs uppercase">Output</span>
                <span className="text-white font-mono">Operational Expertise</span>
              </div>
            </div>
          </Card>

          <div>
             <Heading level={5}>Directory Map</Heading>
             <pre className="bg-charcoal-900 p-4 rounded text-xs font-mono text-gray-400 border border-charcoal-700">
{`vsm-school/
├── src/
│   ├── curriculum/      # The 26 Cards
│   ├── components/      # Card Flippers
│   └── trainer/         # Blackjack Trainer Logic
└── public/
    └── assets/          # Card SVGs`}
             </pre>
          </div>
        </div>

        {/* RIGHT COL: THE DECK VIEWER */}
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          
          {/* THE CARD (Click to Flip) */}
          <div 
            className="perspective-1000 cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`relative w-80 h-[480px] transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* FRONT */}
              <div className={`absolute inset-0 bg-charcoal-800 border-2 ${activeCard.color} rounded-xl p-8 flex flex-col justify-between backface-hidden shadow-2xl group-hover:shadow-teal-500/20 transition-shadow`}>
                <div className="flex justify-between items-start">
                  <span className="font-mono text-4xl font-bold text-gray-600 opacity-20">{activeCard.id}</span>
                  <Badge variant="outline" className="text-xs tracking-widest">{activeCard.suit}</Badge>
                </div>
                
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">{activeCard.title}</h2>
                  <p className="text-gray-400 font-serif italic text-lg leading-relaxed">"{activeCard.front}"</p>
                </div>

                <div className="text-center text-xs text-gray-600 font-mono uppercase tracking-widest">
                  Tap to Reveal Drill
                </div>
              </div>

              {/* BACK */}
              <div className={`absolute inset-0 bg-white text-charcoal-900 border-2 ${activeCard.color} rounded-xl p-8 flex flex-col justify-center items-center backface-hidden rotate-y-180 shadow-2xl`}>
                <div className="text-center">
                  <span className="block text-4xl mb-4">⚔️</span>
                  <h3 className="font-bold text-xl mb-4 uppercase tracking-wider">Operational Drill</h3>
                  <p className="font-mono text-sm leading-loose bg-gray-100 p-4 rounded border border-gray-200">
                    {activeCard.back}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CONTROLS */}
          <div className="mt-12 flex gap-4">
            <Button variant="secondary" onClick={() => setIsFlipped(!isFlipped)}>
              {isFlipped ? 'SHOW FRONT' : 'REVEAL DRILL'}
            </Button>
            <Button variant="primary" onClick={nextCard}>
              NEXT CARD →
            </Button>
          </div>

        </div>

      </div>
        </SetDefinitionProvider>
    </div>
  );
}
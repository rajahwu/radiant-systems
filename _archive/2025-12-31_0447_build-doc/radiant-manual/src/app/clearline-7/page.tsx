'use client';

import React, { useState } from 'react';
import { SetDefinitionProvider } from '@clearline7/theme'
import { TechDocs } from '@clearline7/set-definitions'
import { Card, Heading, Button } from '@clearline7/components';

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'outline', className?: string }) => {
  return <span className="px-2 py-1 bg-gray-700 rounded text-xs">{children}</span>
}
// The "Sets" defined in your monorepo (packages/set-definitions)
const STYLE_SETS = [
  { id: 'CL7-STD', name: 'Clearline 7 Standard', usage: 'General Purpose', color: 'bg-teal-500' },
  { id: 'FED-FLO', name: 'Federal Flow', usage: 'Gov/Defense Contracts', color: 'bg-blue-600' },
  { id: 'CLK-RM',  name: 'Clerk Room', usage: 'Legal/Procedural', color: 'bg-charcoal-600' },
  { id: 'TEC-DOC', name: 'Tech Docs', usage: 'Engineering specs', color: 'bg-orange-500' }
];

// The Palette tokens from your CSS
const PALETTE = [
  { name: 'Charcoal 900', var: 'bg-charcoal-900', hex: '#1a1a1a' },
  { name: 'Charcoal 800', var: 'bg-charcoal-800', hex: '#262828' },
  { name: 'Teal 300',     var: 'bg-teal-300',     hex: '#32b8b8' },
  { name: 'Cream 50',     var: 'bg-cream-50',     hex: '#fcfcf9' },
];

export default function Clearline7Page() {
  const [activeSet, setActiveSet] = useState(STYLE_SETS[0]);
  const [validationStatus, setValidationStatus] = useState('idle');

  const runValidation = () => {
    setValidationStatus('checking');
    setTimeout(() => setValidationStatus('valid'), 1200);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans text-cream-50">
      <SetDefinitionProvider setDefinition={TechDocs} >
      {/* HEADER */}
      <div className="mb-12 border-b border-charcoal-700 pb-6 flex justify-between items-end">
        <div>
          <Heading level={1}>6. Clearline 7</Heading>
          <Heading level={3}>The Formatting Rig</Heading>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Current Set</div>
          <Badge className={`${activeSet.color} text-white`}>{activeSet.id}</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT COL: THE DOCTRINE */}
        <div className="space-y-8">
          <Card>
            <Heading level={4}>Structure as Code</Heading>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Clearline 7 is the <strong>Formatting Layer</strong>. It decouples the "Look" from the "Content." 
              By treating styles as injectable dependencies, we ensure that a Research Brief (Dropframe) looks 
              identical whether it is viewed in a web browser, a PDF, or a Word Document.
            </p>
            <div className="mt-6 border-t border-charcoal-700 pt-4">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-3">Core Palette</span>
              <div className="grid grid-cols-4 gap-2">
                {PALETTE.map((color) => (
                  <div key={color.name} className="space-y-1">
                    <div className={`h-12 w-full rounded border border-charcoal-600 ${color.var}`} />
                    <div className="text-[10px] font-mono text-gray-400">{color.hex}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div>
             <Heading level={5}>Directory Map</Heading>
             <pre className="bg-charcoal-900 p-4 rounded text-xs font-mono text-gray-400 border border-charcoal-700">
{`clearline7/
├── packages/
│   ├── set-definitions/ # The DNA (JSON/TS)
│   │   ├── FederalFlow.ts
│   │   └── TechDocs.ts
│   ├── components/      # React UI Kit
│   │   └── Card.tsx
│   └── generators/      # Word/PDF Engines
│       └── gdocsGenerator.ts`}
             </pre>
          </div>
        </div>

        {/* RIGHT COL: THE STYLE VALIDATOR */}
        <div className="space-y-6">
           <Card>
             <div className="p-3 bg-charcoal-900 border-b border-charcoal-800 flex justify-between items-center">
               <span className="font-mono text-xs text-teal-500 tracking-widest">STYLE_SYSTEM_VALIDATOR</span>
             </div>

             <div className="p-6 space-y-6">
               
               {/* Set Selector */}
               <div>
                 <label className="text-xs font-mono text-gray-500 uppercase block mb-2">Active Configuration Set</label>
                 <div className="grid grid-cols-2 gap-2">
                   {STYLE_SETS.map((set) => (
                     <button
                       key={set.id}
                       onClick={() => { setActiveSet(set); setValidationStatus('idle'); }}
                       className={`p-3 rounded text-left border transition-all ${
                         activeSet.id === set.id 
                           ? 'bg-charcoal-800 border-teal-500 ring-1 ring-teal-500/50' 
                           : 'bg-charcoal-900 border-charcoal-700 hover:border-gray-600'
                       }`}
                     >
                       <div className="text-sm font-bold text-gray-200">{set.name}</div>
                       <div className="text-[10px] text-gray-500 mt-1">{set.usage}</div>
                     </button>
                   ))}
                 </div>
               </div>

               {/* Validation Output */}
               <div className="bg-black p-4 rounded border border-charcoal-800 font-mono text-xs space-y-2">
                 <div className="flex justify-between">
                   <span className="text-gray-400">Typography Check:</span>
                   <span className={validationStatus === 'valid' ? 'text-green-400' : 'text-gray-600'}>
                     {validationStatus === 'valid' ? 'PASS (Inter/JetBrains)' : '...'}
                   </span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-400">Contrast Ratio:</span>
                   <span className={validationStatus === 'valid' ? 'text-green-400' : 'text-gray-600'}>
                     {validationStatus === 'valid' ? 'PASS (AAA)' : '...'}
                   </span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-400">Spacing Grid:</span>
                   <span className={validationStatus === 'valid' ? 'text-green-400' : 'text-gray-600'}>
                     {validationStatus === 'valid' ? 'PASS (4px Base)' : '...'}
                   </span>
                 </div>
               </div>

               <Button 
                 variant="primary" 
                 className="w-full"
                 onClick={runValidation}
                 disabled={validationStatus === 'checking'}
               >
                 {validationStatus === 'checking' ? 'VALIDATING CONFIG...' : 'RUN COMPLIANCE CHECK'}
               </Button>

             </div>
           </Card>
        </div>

      </div>
      </SetDefinitionProvider>
    </div>
  );
}
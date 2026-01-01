'use client';

import React, { useState, useEffect } from 'react';
import { SetDefinitionProvider } from '@clearline7/theme'
import { TechDocs } from '@clearline7/set-definitions'
import { Card, Heading, Button } from '@clearline7/components';

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'outline', className?: string }) => {
  return <span className="px-2 py-1 bg-gray-700 rounded text-xs">{children}</span>
}

// Mock Pipeline Stages
const STAGES = [
  { id: 'ingest', label: '1. INGEST', color: 'bg-gray-600' },
  { id: 'transform', label: '2. FACTOR & STYLE', color: 'bg-purple-600' },
  { id: 'audit', label: '3. QA AUDIT', color: 'bg-yellow-600' },
  { id: 'distribute', label: '4. DISTRIBUTE', color: 'bg-green-600' },
];

export default function ContentFactorPage() {
  const [activeStage, setActiveStage] = useState<number>(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const runPipeline = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setActiveStage(0);
    setLogs(['[SYS] Pipeline initialized...', '[INGEST] Fetching raw artifacts from Grindhouse...']);
  };

  // Simulate the pipeline ticking forward
  useEffect(() => {
    if (activeStage >= 0 && activeStage < STAGES.length && isProcessing) {
      const timer = setTimeout(() => {
        // Add log for current stage completion
        const nextStage = activeStage + 1;
        
        if (nextStage < STAGES.length) {
          setLogs(prev => [...prev, `[${STAGES[activeStage].id.toUpperCase()}] Complete. Starting ${STAGES[nextStage].id}...`]);
          setActiveStage(nextStage);
        } else {
          setLogs(prev => [...prev, '[DISTRIBUTE] Asset deployed to RIT-Ops.', '[SYS] Pipeline shutdown.']);
          setIsProcessing(false);
        }
      }, 1500); // 1.5s per stage
      return () => clearTimeout(timer);
    }
  }, [activeStage, isProcessing]);

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans text-cream-50">
      <SetDefinitionProvider setDefinition={TechDocs} >
      {/* HEADER */}
      <div className="mb-12 border-b border-charcoal-700 pb-6">
        <Heading level={1}>3. Content Factor</Heading>
        <Heading level={3}>The Asset Pipeline</Heading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT COL: Documentation */}
        <div className="space-y-8">
          <Card>
            <Heading level={4}>Pipeline Logic</Heading>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Content Factor decouples <strong>creation</strong> from <strong>formatting</strong>. It treats content as data, passing it through a series of transformers to generate multiple output formats from a single source of truth.
            </p>
            <div className="flex gap-2 flex-wrap">
               <Badge variant="outline">Markdown</Badge> 
               <span className="text-gray-600">→</span>
               <Badge variant="default" className="bg-indigo-900 text-indigo-200">PDF</Badge>
               <Badge variant="default" className="bg-indigo-900 text-indigo-200">React Page</Badge>
               <Badge variant="default" className="bg-indigo-900 text-indigo-200">Email</Badge>
            </div>
          </Card>

          <div>
            <Heading level={5}>Directory Map</Heading>
            <pre className="bg-charcoal-900 p-4 rounded text-xs font-mono text-gray-400 border border-charcoal-700">
{`content-factor/
├── src/
│   ├── pipelines/       # Definition of workflows
│   │   ├── BlogPipeline.ts
│   │   └── CardPipeline.ts
│   ├── transformers/    # Logic processors
│   │   ├── MarkdownToHtml.ts
│   │   └── MetadataInjector.ts
│   └── templates/       # Clearline 7 injections
│       └── StandardDoc.tsx`}
            </pre>
          </div>
        </div>

        {/* RIGHT COL: Interactive Engine */}
        <div className="space-y-6">
           <Card>
             <div className="flex justify-between items-center mb-6">
               <span className="font-mono text-sm text-indigo-400">PIPELINE_VISUALIZER_V1</span>
               <Button 
                 onClick={runPipeline} 
                 disabled={isProcessing}
                 variant={isProcessing ? 'secondary' : 'primary'}
                 className={isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
               >
                 {isProcessing ? 'PROCESSING...' : 'RUN PIPELINE'}
               </Button>
             </div>

             {/* Visualization of Stages */}
             <div className="flex justify-between mb-8 relative">
               {/* Connecting Line */}
               <div className="absolute top-1/2 left-0 w-full h-1 bg-charcoal-700 -z-10 transform -translate-y-1/2"></div>
               
               {STAGES.map((stage, index) => (
                 <div key={stage.id} className="flex flex-col items-center gap-2">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                     index <= activeStage 
                      ? `${stage.color} text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-110` 
                      : 'bg-charcoal-700 text-gray-500'
                   }`}>
                     {index <= activeStage ? '✓' : index + 1}
                   </div>
                   <span className={`text-[10px] font-mono uppercase tracking-wider ${
                     index === activeStage ? 'text-white' : 'text-gray-600'
                   }`}>
                     {stage.id}
                   </span>
                 </div>
               ))}
             </div>

             {/* Console Output */}
             <div className="bg-charcoal-950 rounded p-4 h-48 overflow-y-auto border border-charcoal-700 font-mono text-xs">
                {logs.length === 0 && <span className="text-gray-600 italic">System ready. Waiting for input...</span>}
                {logs.map((log, i) => (
                  <div key={i} className="mb-1 text-gray-300 border-l-2 border-transparent hover:border-indigo-500 pl-2 transition-colors">
                    <span className="text-gray-600 mr-2">{new Date().toLocaleTimeString()}</span>
                    {log}
                  </div>
                ))}
                {isProcessing && (
                  <div className="animate-pulse text-indigo-400">_</div>
                )}
             </div>

           </Card>
        </div>

      </div>
      </SetDefinitionProvider>
    </div>
  );
}

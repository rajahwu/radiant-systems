'use client';

import React, { useState } from 'react';
// 1. We leverage the Clearline 7 Design System directly from your monorepo
import { SetDefinitionProvider } from '@clearline7/theme'
import { TechDocs } from '@clearline7/set-definitions'
import { Card, Button, Heading, Paragraph } from '@clearline7/components'; 

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'outline', className?: string }) => {
  return <span className="px-2 py-1 bg-gray-700 rounded text-xs">{children}</span>
}

// Mock Data for the Live Demo
const INITIAL_TASKS = [
  { id: 'GH-101', type: 'DROPFRAME', status: 'analyzing', content: 'Analyze Q4 Metrics' },
  { id: 'GH-102', type: 'GRINDLINE', status: 'pending', content: 'Generate Report PDF' },
  { id: 'GH-103', type: 'GRINDLINE', status: 'pending', content: 'Deploy to Vercel' },
];

export default function GrindhousePage() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const processTask = (id: string) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, status: 'complete' } : t
    ));
  };

  return (
    <SetDefinitionProvider setDefinition={TechDocs}>
    <div className="max-w-6xl mx-auto p-8 font-sans text-cream-50">
      
      {/* HEADER SECTION */}
      <div className="mb-12 border-b border-charcoal-700 pb-6">
        <Heading level={1}>2. Grindhouse</Heading>
        <Heading level={3}>The Execution Engine</Heading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT COL: DOCUMENTATION (Static Scaffold) */}
        <div className="space-y-8">
          <Card>
            <Heading level={4}>Core Architecture</Heading>
            <Paragraph>
              Grindhouse divides operational labor into two distinct "studios" to prevent context switching costs.
            </Paragraph>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-purple-400 font-mono mr-2">01.</span>
                <span><strong>Dropframe Studio:</strong> Deep work environment. Research, pattern recognition, and strategy. (High Latency, High Value)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-300 font-mono mr-2">02.</span>
                <span><strong>Grindline Studio:</strong> High-velocity production. Execution of defined tasks and asset generation. (Low Latency, High Volume)</span>
              </li>
            </ul>
          </Card>

          {/* File Structure Visualization */}
          <div>
            <Heading level={5}>Directory Map</Heading>
            <pre className="bg-charcoal-900 p-4 rounded text-xs font-mono text-gray-400 border border-charcoal-700">
{`grindhouse/
├── dropframe/           # Research Engine
│   ├── FrameManager.ts  # Context Holder
│   └── ResearchAgent.ts # LLM Analyzer
└── grindline/           # Production Engine
    ├── TaskQueue.ts     # Priority Queue
    └── WorkerPool.ts    # Parallel Execution`}
            </pre>
          </div>
        </div>

        {/* RIGHT COL: LIVE INTERFACE (Interactive Demo) */}
        <div className="space-y-6">
           <Card>
             <div className="p-4 bg-charcoal-900 border-b border-charcoal-700 flex justify-between items-center">
               <span className="font-mono text-sm text-gray-400">ACTIVE_QUEUE // MONITOR</span>
               <div className="flex gap-2">
                 <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs text-green-500 font-mono">ONLINE</span>
               </div>
             </div>

             <div className="p-4 space-y-3">
               {tasks.map((task) => (
                 <div key={task.id} className="flex items-center justify-between p-3 bg-charcoal-700 rounded border border-charcoal-600">
                   <div className="flex items-center gap-3">
                     <span className={`text-xs font-bold px-2 py-1 rounded ${
                       task.type === 'DROPFRAME' ? 'bg-purple-900 text-purple-300' : 'bg-teal-900 text-teal-300'
                     }`}>
                       {task.type}
                     </span>
                     <span className={`font-mono text-sm ${task.status === 'complete' ? 'text-gray-500 line-through' : 'text-white'}`}>
                       {task.content}
                     </span>
                   </div>
                   
                   {task.status !== 'complete' && (
                     <Button 
                       size="sm" 
                       variant="secondary" // Assuming Clearline has variants
                       onClick={() => processTask(task.id)}
                       className="text-xs hover:bg-teal-300 hover:text-charcoal-900 transition-colors"
                     >
                       EXECUTE
                     </Button>
                   )}
                   {task.status === 'complete' && (
                     <span className="text-xs text-green-400 font-mono">DONE</span>
                   )}
                 </div>
               ))}
             </div>
             
             <div className="p-4 bg-charcoal-900/50 border-t border-charcoal-700 text-center">
               <Button variant="primary" className="w-full font-bold">
                 + INJECT NEW FRAME
               </Button>
             </div>
           </Card>
        </div>

      </div>
    </div>
    </SetDefinitionProvider>
  );
}
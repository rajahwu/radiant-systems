'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Zap, Database, Cpu, Factory, 
  GraduationCap, Network, Layout, Radio, 
  Terminal, BookOpen, FileText 
} from 'lucide-react';

const MODULES = [
  { 
    id: '01', 
    slug: 'rdx', 
    title: 'RDX Session', 
    icon: Database,
    role: 'Foundation Layer', 
    desc: 'Immutable session logging and agent tracking database.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    border: 'border-teal-100'
  },
  { 
    id: '02', 
    slug: 'grindhouse', 
    title: 'Grindhouse', 
    icon: Cpu,
    role: 'Execution Layer', 
    desc: 'Dropframe Research & Grindline Production engines.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100'
  },
  { 
    id: '03', 
    slug: 'content-factor', 
    title: 'Content Factor', 
    icon: Factory,
    role: 'Pipeline Layer', 
    desc: 'Asset transformation assembly line and ingest protocols.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100'
  },
  { 
    id: '04', 
    slug: 'vsm-school', 
    title: 'VSM School', 
    icon: GraduationCap,
    role: 'Education Layer', 
    desc: 'Visual Systems Mastery curriculum and training cards.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100'
  },
  { 
    id: '05', 
    slug: 'lattice-sync', 
    title: 'Lattice Sync', 
    icon: Network,
    role: 'Coordination Layer', 
    desc: 'Multi-agent state federation and handoff protocols.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  { 
    id: '06', 
    slug: 'clearline-7', 
    title: 'Clearline 7', 
    icon: Layout,
    role: 'Formatting Layer', 
    desc: 'Design system enforcement rig and document generation.',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-100'
  },
  { 
    id: '07', 
    slug: 'rit-ops', 
    title: 'RIT Ops', 
    icon: Radio,
    role: 'Publication Layer', 
    desc: 'Public signal control, deployment, and analytics.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100'
  }
];

export default function WorkSurface() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white font-sans selection:bg-teal-500/30">
      
      {/* Top Navigation - Custom Internal Style */}
      <nav className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-blue-500 rounded flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Radiant OS <span className="opacity-50 font-normal">| Internal</span></span>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/manual" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Project Manual
            </Link>
            <div className="h-4 w-px bg-white/20"></div>
            <span className="text-green-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> 
              System Online
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-mono mb-8 backdrop-blur-sm">
            <Terminal className="w-3 h-3 mr-2" />
            OPERATIONAL DOCTRINE ENCODED
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The Work Surface for
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400">
              Visual Systems Mastery
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Operate the machine. Access active modules, or reference the project architecture and billing data in the manual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#modules" className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center group">
              Access Modules
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link href="/manual">
              <button className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-all text-gray-300 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                View Project Manual
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section id="modules" className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
            <p className="text-gray-400">Active modules and operational status.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <Link href={`/dashboard/${mod.slug}`} key={mod.id} className="group">
                <div className="h-full bg-white/5 border border-white/10 rounded-xl p-8 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-lg ${mod.bg} ${mod.color} flex items-center justify-center border ${mod.border}`}>
                        <mod.icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                        {mod.id}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs font-mono text-teal-500/80 mb-4 uppercase tracking-wider">
                      {mod.role}
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {mod.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-6 h-6 text-teal-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="w-4 h-4" />
            <span>Radiant Systems &copy; 2026</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>OptiPlex Host</span>
            <span>Local Environment</span>
            <span className="text-green-500">Connected</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

'use client';

import { ManualViewer } from "@/components/manual"; 
// We import the viewer you already built
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ManualPage() {
  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Navigation Wrapper */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50 px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-gray-400 hover:text-teal-300 transition-colors text-sm font-mono uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Work Surface
        </Link>
        <div className="text-gray-500 text-xs font-mono">
          PROJECT REFERENCE // READ-ONLY
        </div>
      </nav>

      {/* The Original Manual Viewer */}
      <ManualViewer />
    </div>
  );
}
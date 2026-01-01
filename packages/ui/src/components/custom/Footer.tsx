'use client';

import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Radiant Systems</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Platform</h4>
              <Link href="/manual" className="text-gray-300 hover:text-white transition-colors">Build Manual</Link>
              <Link href="/studios/triptych" className="text-gray-300 hover:text-white transition-colors">Studios</Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Documentation</h4>
              <Link href="/protocol" className="text-gray-300 hover:text-white transition-colors">Protocol</Link>
              <Link href="/architecture" className="text-gray-300 hover:text-white transition-colors">Architecture</Link>
              <Link href="/getting-started" className="text-gray-300 hover:text-white transition-colors">Getting Started</Link>
              <Link href="/api-reference" className="text-gray-300 hover:text-white transition-colors">API Reference</Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h4>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Radiant Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
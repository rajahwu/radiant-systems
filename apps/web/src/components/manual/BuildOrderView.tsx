'use client';

import { BuildOrderSection } from '@/lib/types/manual.types';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BuildOrderViewProps {
  sections: BuildOrderSection[];
}

const DASHBOARD_ROUTES: Record<string, string> = {
  '01-rdx': '/dashboard/rdx',
  '02-grindhouse': '/dashboard/grindhouse',
  '03-content-factor': '/dashboard/content-factor',
  '04-vsm-school': '/dashboard/vsm-school',
  '05-lattice-sync': '/dashboard/lattice-sync',
  '06-clearline-7': '/dashboard/clearline-7',
  '07-rit-ops': '/dashboard/rit-ops'
};

export default function BuildOrderView({ sections }: BuildOrderViewProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedBlocks, setExpandedBlocks] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom > 200;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      // Show/hide scroll to top button
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const copyToClipboard = async (text: string, blockId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Visual feedback
      const element = document.getElementById(blockId);
      if (element) {
        element.classList.add('animate-pulse');
        setTimeout(() => {
          element.classList.remove('animate-pulse');
        }, 500);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleExpand = (blockId: string) => {
    setExpandedBlocks(prev => {
      const next = new Set(prev);
      if (next.has(blockId)) {
        next.delete(blockId);
      } else {
        next.add(blockId);
      }
      return next;
    });
  };

  if (!sections || sections.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-8 py-12 text-center">
        <p className="text-gray-400 text-lg">No build order sections available</p>
      </div>
    );
  }

  return (
    <div className="flex max-w-7xl mx-auto px-8 py-12 gap-8 relative">
      {/* Sidebar Navigation */}
      <aside className="w-72 flex-shrink-0 sticky top-[200px] self-start">
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur">
          <h3 className="text-lg font-bold text-teal-300 mb-4">Build Order</h3>
          <nav className="space-y-2">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;
              return (
                <div key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-all ${
                      isActive
                        ? 'bg-teal-500/20 text-teal-300 border-l-2 border-teal-400'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono opacity-60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium">
                        {section.title.replace(/^\d+\.\s*/, '')}
                      </span>
                    </div>
                    <div className="text-xs opacity-70 mt-1 pl-5">
                      {section.subtitle}
                    </div>
                  </button>
                  {DASHBOARD_ROUTES[section.id] && (
                    <Link
                      href={DASHBOARD_ROUTES[section.id]}
                      className="block ml-5 mt-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      → View Dashboard
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-24">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="group scroll-mt-32">
          {/* Section Header */}
          <div className="mb-8">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-sm font-mono text-teal-400/50 group-hover:text-teal-400 transition-colors">
                {section.id.toUpperCase()}
              </span>
              <h2 className="text-4xl font-bold text-gray-50">{section.title}</h2>
              {DASHBOARD_ROUTES[section.id] && (
                <Link
                  href={DASHBOARD_ROUTES[section.id]}
                  className="ml-4 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all"
                >
                  View Dashboard →
                </Link>
              )}
            </div>
            <h3 className="text-xl text-teal-300/80 mb-4 pl-20">{section.subtitle}</h3>
            <p className="text-gray-300 text-lg leading-relaxed pl-20 max-w-4xl">
              {section.content}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pl-20">
            {/* File Structure */}
            {section.fileStructure && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-teal-500/30 transition-all group">
                <div className="flex justify-between items-center p-6 pb-3">
                  <h4 className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                    File Structure
                  </h4>
                  <button
                    id={`copy-${section.id}-fs`}
                    onClick={() => copyToClipboard(section.fileStructure || '', `copy-${section.id}-fs`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-400 hover:text-teal-400 px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Copy
                  </button>
                </div>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto px-6 pb-6">
                  {section.fileStructure}
                </pre>
              </div>
            )}

            {/* Core Types */}
            {section.coreTypes && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-500/30 transition-all group">
                <div className="flex justify-between items-center p-6 pb-3">
                  <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                    Core Types
                  </h4>
                  <button
                    id={`copy-${section.id}-ct`}
                    onClick={() => copyToClipboard(section.coreTypes || '', `copy-${section.id}-ct`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-400 hover:text-purple-400 px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Copy
                  </button>
                </div>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto px-6 pb-6">
                  {section.coreTypes}
                </pre>
              </div>
            )}

            {/* Code Patterns */}
            {section.codePatterns && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500/30 transition-all lg:col-span-2 group">
                <div className="flex justify-between items-center p-6 pb-3">
                  <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    Code Patterns
                  </h4>
                  <button
                    id={`copy-${section.id}-cp`}
                    onClick={() => copyToClipboard(section.codePatterns || '', `copy-${section.id}-cp`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-400 hover:text-blue-400 px-2 py-1 rounded hover:bg-slate-700"
                  >
                    Copy
                  </button>
                </div>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto px-6 pb-6">
                  {section.codePatterns}
                </pre>
              </div>
            )}

            {/* Integration Points */}
            {section.integrationPoints && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-amber-500/30 transition-colors lg:col-span-2">
                <h4 className="text-xs font-mono text-amber-400 mb-3 uppercase tracking-wider">
                  Integration Points
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {section.integrationPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      ))}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-400 text-slate-950 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-20"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
'use client';

import { useEffect, useState } from 'react';
import { SectionType, ManualDocument } from '@/lib/types/manual.types';
import { loadManualDocument } from '@/lib/loaders/json-loader';
import Header from './Header';
import SectionTabs from './SectionTabs';
import BuildOrderView from './BuildOrderView';
import RetrospectiveView from './RetrospectiveView';
import EvaluationView from './EvaluationView';
import BillablesView from './BillablesView';
import Footer from './Footer';

export default function ManualViewer() {
  const [activeSection, setActiveSection] = useState<SectionType>('build-order');
  const [document, setDocument] = useState<ManualDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const doc = await loadManualDocument();
        setDocument(doc);
      } catch (err) {
        console.error('Failed to load manual:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
        <div className="text-teal-300 text-xl">Loading manual...</div>
      </div>
    );
  }

  if (error || !document) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">
          Failed to load manual: {error || 'Unknown error'}
        </div>
      </div>
    );
  }

  return (
    <div className="text-gray-100">
      <SectionTabs active={activeSection} onChange={setActiveSection} />
      
      {activeSection === 'build-order' && (
        <BuildOrderView sections={document.sections.buildOrder} />
      )}
      {activeSection === 'retrospective' && (
        <RetrospectiveView data={document.sections.retrospective} />
      )}
      {activeSection === 'evaluation' && document.sections.evaluation && (
        <EvaluationView data={document.sections.evaluation} />
      )}
      {activeSection === 'billables' && document.sections.billables && (
        <BillablesView data={document.sections.billables} />
      )}
    </div>
  );
}

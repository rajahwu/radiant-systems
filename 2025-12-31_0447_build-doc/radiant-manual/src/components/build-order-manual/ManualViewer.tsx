'use client';

import { useEffect, useState } from 'react';
import { ManualSection } from '@/lib/types/manual.types';
import { loadManualFromJSON } from '@/lib/loaders/json-loader';
import Header from "./Header";
import Navigation from "./Navigation";
import Contents from "./Contents";
import Footer from "./Footer";

export default function ManualViewer() {
  const [sections, setSections] = useState<ManualSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadManualFromJSON()
      .then(data => {
        setSections(data.sections);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load manual:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
        <div className="text-teal-300 text-xl">Loading manual...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100">
      <Header />
      <Navigation sections={sections} />
      <Contents sections={sections} />
      <Footer />
    </main>
  );
}

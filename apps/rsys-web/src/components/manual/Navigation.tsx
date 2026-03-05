import { ManualSections } from '@/lib/types/manual.types';

interface NavigationProps {
  sections: ManualSections[];
}

export default function Navigation({ sections }: NavigationProps) {
  return (
    <nav className="bg-slate-900/80 border-b border-gray-800 sticky top-[140px] z-10 backdrop-blur">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-mono text-gray-400 hover:text-teal-300 transition-colors whitespace-nowrap px-3 py-1 rounded border border-transparent hover:border-teal-500/30"
            >
              {section.title.split('.')[1].trim()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
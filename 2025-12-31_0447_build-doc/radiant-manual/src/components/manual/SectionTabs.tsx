import { SectionType } from '@/lib/types/manual.types';

interface SectionTabsProps {
  active: SectionType;
  onChange: (section: SectionType) => void;
}

const SECTIONS = [
  { id: 'build-order' as SectionType, label: 'Build Order', icon: '🔧' },
  { id: 'retrospective' as SectionType, label: '2025 Retrospective', icon: '📅' },
  { id: 'evaluation' as SectionType, label: 'Evaluation', icon: '⭐' },
  { id: 'billables' as SectionType, label: 'HE Analysis', icon: '💰' }
];

export default function SectionTabs({ active, onChange }: SectionTabsProps) {
  return (
    <nav className="border-b border-gray-800 bg-slate-900/80 sticky top-[140px] z-10 backdrop-blur">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex gap-1 overflow-x-auto">
          {SECTIONS.map(section => (
            <button
              key={section.id}
              onClick={() => onChange(section.id)}
              className={`
                px-6 py-4 font-mono text-sm transition-all whitespace-nowrap
                ${active === section.id 
                  ? 'bg-slate-800 text-teal-300 border-b-2 border-teal-400' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/50'
                }
              `}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

import { ManualSection } from '@/lib/types/manual.types';

interface ContentsProps {
  sections: ManualSection[];
}

export default function Contents({ sections }: ContentsProps) {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12 space-y-24">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="group scroll-mt-32">
          {/* Section Header */}
          <div className="mb-8">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-sm font-mono text-teal-400/50 group-hover:text-teal-400 transition-colors">
                {section.id.toUpperCase()}
              </span>
              <h2 className="text-4xl font-bold text-gray-50">{section.title}</h2>
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
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-teal-500/30 transition-colors">
                <h4 className="text-xs font-mono text-teal-400 mb-3 uppercase tracking-wider">
                  File Structure
                </h4>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                  {section.fileStructure}
                </pre>
              </div>
            )}

            {/* Core Types */}
            {section.coreTypes && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-purple-500/30 transition-colors">
                <h4 className="text-xs font-mono text-purple-400 mb-3 uppercase tracking-wider">
                  Core Types
                </h4>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                  {section.coreTypes}
                </pre>
              </div>
            )}

            {/* Code Patterns */}
            {section.codePatterns && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/30 transition-colors lg:col-span-2">
                <h4 className="text-xs font-mono text-blue-400 mb-3 uppercase tracking-wider">
                  Code Patterns
                </h4>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
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
  );
}
import { RetrospectiveSection } from '@/lib/types/manual.types';

interface RetrospectiveViewProps {
  data: RetrospectiveSection;
}

export default function RetrospectiveView({ data }: RetrospectiveViewProps) {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal-300 mb-4">
          {data.year} Retrospective
        </h1>
        <h2 className="text-3xl text-purple-300 mb-6">{data.theme}</h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {data.summary}
        </p>
      </div>

      {/* Systems Built */}
      <section>
        <h2 className="text-4xl font-bold text-gray-100 mb-8 border-b border-teal-500/30 pb-4">
          Systems Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.systemsBuilt.map((system, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-teal-500/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-teal-300">{system.name}</h3>
                <span className={`
                  px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider
                  ${system.status === 'complete' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : ''}
                  ${system.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : ''}
                  ${system.status === 'planned' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : ''}
                `}>
                  {system.status}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">{system.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctrine Architected */}
      <section>
        <h2 className="text-4xl font-bold text-gray-100 mb-8 border-b border-purple-500/30 pb-4">
          Doctrine Architected
        </h2>
        <div className="space-y-4">
          {data.doctrineArchitected.map((doctrine, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/50 border-l-4 border-purple-500 rounded-r-lg p-6 hover:bg-slate-800/70 transition-colors"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-2">{doctrine.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{doctrine.description}</p>
              <div className="flex gap-2 flex-wrap">
                {doctrine.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story as Artifact */}
      <section>
        <h2 className="text-4xl font-bold text-gray-100 mb-8 border-b border-amber-500/30 pb-4">
          Story as Artifact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.storyAsArtifact.map((story, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-amber-300 mb-2">{story.title}</h3>
              <p className="text-gray-300 mb-3">{story.description}</p>
              <p className="text-sm text-amber-400 font-mono">{story.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Evolution Narrative */}
      <section className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 border border-gray-700 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Evolution</h2>
        <div className="flex items-center gap-6 mb-8">
          <div className="flex-1 text-right">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">From</p>
            <p className="text-lg text-gray-200">{data.evolutionNarrative.from}</p>
          </div>
          <div className="text-4xl text-teal-400">→</div>
          <div className="flex-1">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">To</p>
            <p className="text-lg text-gray-200">{data.evolutionNarrative.to}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-100 mb-4">Key Shifts</h3>
        <ul className="space-y-2">
          {data.keyShifts.map((shift, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <span className="text-teal-400 mt-1">•</span>
              <span>{shift}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* The Source */}
      <section className="bg-gradient-to-br from-teal-900/20 via-purple-900/20 to-blue-900/20 border-2 border-teal-500/40 rounded-xl p-10">
        <h2 className="text-4xl font-bold text-teal-300 mb-6 text-center">
          The Source
        </h2>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-200 leading-relaxed whitespace-pre-line">
            {data.sourcePhilosophy}
          </p>
        </div>
      </section>

      {/* 2026 Vision */}
      <section className="bg-slate-950/50 border border-purple-500/30 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-purple-300 mb-4">Next Year</h2>
        <p className="text-gray-200 text-lg leading-relaxed whitespace-pre-line">
          {data.nextYearFocus}
        </p>
      </section>
    </div>
  );
}

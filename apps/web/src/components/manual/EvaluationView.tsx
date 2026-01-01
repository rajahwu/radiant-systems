import { EvaluationSection } from '@/lib/types/manual.types';

interface EvaluationViewProps {
  data: EvaluationSection;
}

export default function EvaluationView({ data }: EvaluationViewProps) {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">
      {/* Overall Assessment */}
      <div className="text-center bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-2 border-yellow-500/40 rounded-xl p-12">
        <div className="inline-flex items-center gap-2 text-6xl mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <span 
              key={i} 
              className={i < data.overallAssessment.rating ? 'text-yellow-400' : 'text-gray-700'}
            >
              ⭐
            </span>
          ))}
        </div>
        <p className="text-2xl text-gray-200 font-bold mb-2">
          Overall Assessment: {data.overallAssessment.rating}/5
        </p>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {data.overallAssessment.summary}
        </p>
      </div>

      {/* Strengths */}
      <section>
        <h2 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-500/30 pb-4">
          Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.strengths.map((strength, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-3 bg-green-900/10 border border-green-500/20 rounded-lg p-4 hover:bg-green-900/20 transition-colors"
            >
              <span className="text-green-400 text-xl mt-1 flex-shrink-0">✓</span>
              <span className="text-gray-300">{strength}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Concerns & Recommendations */}
      <section>
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 border-b border-yellow-500/30 pb-4">
          Concerns & Recommendations
        </h2>
        <div className="space-y-6">
          {data.concerns.map((concern, idx) => (
            <div 
              key={idx}
              className="bg-yellow-900/10 border-l-4 border-yellow-500 rounded-r-lg p-6"
            >
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                {concern.category}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Issue</p>
                  <p className="text-gray-300">{concern.issue}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Recommendation</p>
                  <p className="text-gray-200 font-medium">{concern.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Assessment */}
      <section>
        <h2 className="text-4xl font-bold text-red-400 mb-8 border-b border-red-500/30 pb-4">
          Risk Assessment
        </h2>
        <div className="space-y-4">
          {data.riskAssessment.map((risk, idx) => (
            <div 
              key={idx}
              className={`
                border-l-4 rounded-r-lg p-6
                ${risk.level === 'high' ? 'bg-red-900/10 border-red-500' : ''}
                ${risk.level === 'medium' ? 'bg-yellow-900/10 border-yellow-500' : ''}
                ${risk.level === 'low' ? 'bg-green-900/10 border-green-500' : ''}
              `}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`
                  px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                  ${risk.level === 'high' ? 'bg-red-500/20 text-red-300' : ''}
                  ${risk.level === 'medium' ? 'bg-yellow-500/20 text-yellow-300' : ''}
                  ${risk.level === 'low' ? 'bg-green-500/20 text-green-300' : ''}
                `}>
                  {risk.level} Risk
                </span>
              </div>
              <ul className="space-y-2">
                {risk.areas.map((area, areaIdx) => (
                  <li key={areaIdx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-gray-500 mt-1">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Development Phases */}
      <section>
        <h2 className="text-4xl font-bold text-blue-400 mb-8 border-b border-blue-500/30 pb-4">
          Development Phases
        </h2>
        <div className="space-y-8">
          {data.developmentPhases.map((phase) => (
            <div 
              key={phase.number}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-baseline gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500/20 border-2 border-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-300">
                    {phase.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-300 mb-1">
                    Phase {phase.number}: {phase.name}
                  </h3>
                  <span className="text-sm text-gray-400 font-mono">
                    Duration: {phase.duration}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 ml-22">
                {phase.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 border-2 border-teal-500/40 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-teal-300 mb-4">Conclusion</h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          {data.conclusion}
        </p>
      </section>
    </div>
  );
}

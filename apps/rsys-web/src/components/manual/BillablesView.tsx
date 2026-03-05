import { BillablesSection } from '@/lib/types/manual.types';

interface BillablesViewProps {
  data: BillablesSection;
}

export default function BillablesView({ data }: BillablesViewProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-teal-300 mb-4">
          HE (Hourly Equivalent) Billables Analysis
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {data.summary}
        </p>
      </div>

      {/* Component Breakdown */}
      <section>
        <h2 className="text-4xl font-bold text-gray-100 mb-8 border-b border-teal-500/30 pb-4">
          Component Value Breakdown
        </h2>
        <div className="space-y-4">
          {data.components.map((component, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-teal-500/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-teal-300 mb-1">
                    {component.component}
                  </h3>
                  <p className="text-gray-400 mb-2">{component.description}</p>
                  <p className="text-sm text-gray-500">
                    Comparable: {component.comparableServices}
                  </p>
                </div>
                <div className="text-right ml-6">
                  <div className="text-2xl font-bold text-green-400">
                    {formatCurrency(component.estimateRange[0])} - {formatCurrency(component.estimateRange[1])}
                  </div>
                  <div className="text-sm text-gray-500">HE Estimate</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 bg-gradient-to-r from-teal-900/30 to-green-900/30 border-2 border-teal-500/40 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-100">Total Sum of Parts</span>
            <span className="text-3xl font-bold text-green-400">
              {formatCurrency(data.totalSumOfParts.low)} - {formatCurrency(data.totalSumOfParts.high)}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section>
        <h2 className="text-4xl font-bold text-gray-100 mb-8 border-b border-purple-500/30 pb-4">
          Enterprise Package Pricing (SaaS/License)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.pricingModels.map((model, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-purple-500/30 transition-colors"
            >
              <div className="mb-4">
                <div className="text-sm text-purple-400 font-mono uppercase tracking-wider mb-1">
                  {model.tier}
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2">
                  {model.name}
                </h3>
                <div className="text-xl font-bold text-green-400">
                  {model.priceRange}
                </div>
              </div>
              <ul className="space-y-2">
                {model.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting Model */}
      <section>
        <h2 className="text-4xl font-bold text-gray-100 mb-8 border-b border-blue-500/30 pb-4">
          Consulting & Implementation Model
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(data.consultingModel).map(([key, service]) => (
            <div 
              key={key}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {service.name}
              </h3>
              <div className="text-2xl font-bold text-green-400 mb-2">
                {service.price}
              </div>
              <p className="text-gray-400">
                {service.duration || service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Differentiators */}
      <section>
        <h2 className="text-4xl font-bold text-gray-100 mb-8 border-b border-amber-500/30 pb-4">
          Strategic Differentiators
        </h2>
        <div className="space-y-3">
          {data.strategicDifferentiators.map((diff, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-3 bg-amber-900/10 border border-amber-500/20 rounded-lg p-4"
            >
              <span className="text-amber-400 text-xl mt-1">★</span>
              <span className="text-gray-200">{diff}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final Valuation */}
      <section className="bg-gradient-to-br from-green-900/20 via-teal-900/20 to-blue-900/20 border-2 border-green-500/40 rounded-xl p-10">
        <h2 className="text-4xl font-bold text-green-300 mb-8 text-center">
          Final Valuation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              Low Estimate
            </div>
            <div className="text-3xl font-bold text-green-400">
              {formatCurrency(data.finalValuation.low)}
            </div>
            <div className="text-xs text-gray-500 mt-1">Billable Work</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              Mid Estimate
            </div>
            <div className="text-4xl font-bold text-teal-300">
              {formatCurrency(data.finalValuation.mid)}
            </div>
            <div className="text-xs text-gray-500 mt-1">Integrated System Value</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              High Estimate
            </div>
            <div className="text-3xl font-bold text-blue-400">
              {formatCurrency(data.finalValuation.high)}+
            </div>
            <div className="text-xs text-gray-500 mt-1">Turnkey Transformation</div>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-6">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
            Total Enterprise Value
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-4">
            {data.finalValuation.totalEnterpriseValue}
          </div>
          <p className="text-gray-300 text-sm">
            Combined with 30 years of IP, VSM curriculum, and unique operational doctrine
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-slate-950/50 border border-teal-500/30 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-teal-300 mb-4">Conclusion</h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          {data.conclusion}
        </p>
      </section>
    </div>
  );
}

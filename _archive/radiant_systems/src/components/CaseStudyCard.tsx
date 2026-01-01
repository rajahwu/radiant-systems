import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CaseStudy {
  id: string;
  title: string;
  thumbnail: string;
  systems: string[];
  description: string;
  industry: string;
}

const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Manufacturing Efficiency Optimization',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
    systems: ['ERP', 'MES', 'Quality Control'],
    description: 'Streamlined production processes resulting in 35% efficiency improvement',
    industry: 'Manufacturing'
  },
  {
    id: '2',
    title: 'Healthcare Data Integration',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
    systems: ['EMR', 'Analytics', 'Compliance'],
    description: 'Unified patient data across multiple departments for better care coordination',
    industry: 'Healthcare'
  },
  {
    id: '3',
    title: 'Financial Services Automation',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    systems: ['CRM', 'Risk Management', 'Reporting'],
    description: 'Automated compliance reporting reducing manual work by 60%',
    industry: 'Financial Services'
  }
];

const CaseStudyCard: React.FC = () => {
  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how organizations across industries have transformed their operations with Radiant Systems
          </p>
        </div>

        <div className="space-y-8">
          {mockCaseStudies.map((caseStudy) => (
            <Card 
              key={caseStudy.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200 w-full max-w-3xl mx-auto"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Thumbnail */}
                  <div className="md:w-2/5 lg:w-1/3">
                    <img
                      src={caseStudy.thumbnail}
                      alt={caseStudy.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
                        {caseStudy.industry}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {caseStudy.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {caseStudy.description}
                    </p>

                    {/* System Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.systems.map((system, index) => (
                        <span
                          key={index}
                          className={cn(
                            "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
                            "bg-teal-600 text-white"
                          )}
                        >
                          {system}
                        </span>
                      ))}
                    </div>

                    <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200 flex items-center group">
                      Read Full Case Study
                      <svg 
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCard;
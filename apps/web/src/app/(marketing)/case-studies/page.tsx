'use client';

import React, { useState } from 'react';
import { 
  ChevronDown as ChevronDownIcon, 
  ChevronUp as ChevronUpIcon, 
  ExternalLink as ExternalLinkIcon, 
  Calendar as CalendarIcon, 
  Clock as ClockIcon, 
  User as UserIcon, 
  Tag as TagIcon 
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  date: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  featured: boolean;
  category: string;
}

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    'all',
    'Digital Transformation',
    'AI & Machine Learning',
    'Cloud Migration',
    'Process Automation',
    'Data Analytics'
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Enterprise Digital Transformation for Global Manufacturing',
      client: 'TechCorp Industries',
      industry: 'Manufacturing',
      duration: '18 months',
      date: '2024',
      challenge: 'Legacy systems hindering operational efficiency and data visibility across 15 global facilities.',
      solution: 'Implemented comprehensive digital transformation strategy with cloud-native architecture, IoT integration, and real-time analytics dashboard.',
      results: [
        '45% increase in operational efficiency',
        '60% reduction in system downtime',
        '$2.3M annual cost savings',
        '99.9% system uptime achieved'
      ],
      technologies: ['Azure Cloud', 'IoT Hub', 'Power BI', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400',
      featured: true,
      category: 'Digital Transformation'
    },
    {
      id: '2',
      title: 'AI-Powered Customer Service Automation',
      client: 'ServiceMax Solutions',
      industry: 'Customer Service',
      duration: '12 months',
      date: '2024',
      challenge: 'High customer service costs and inconsistent response times affecting customer satisfaction.',
      solution: 'Developed intelligent chatbot system with natural language processing and automated ticket routing.',
      results: [
        '70% reduction in response time',
        '40% decrease in operational costs',
        '85% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      technologies: ['OpenAI GPT', 'Python', 'TensorFlow', 'MongoDB', 'Express.js'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=600&h=400',
      featured: true,
      category: 'AI & Machine Learning'
    },
    {
      id: '3',
      title: 'Cloud Infrastructure Migration and Optimization',
      client: 'DataFlow Enterprises',
      industry: 'Financial Services',
      duration: '8 months',
      date: '2023',
      challenge: 'Outdated on-premise infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with containerized microservices architecture and automated CI/CD pipelines.',
      results: [
        '50% reduction in infrastructure costs',
        '300% improvement in deployment speed',
        '99.99% availability achieved',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400',
      featured: false,
      category: 'Cloud Migration'
    },
    {
      id: '4',
      title: 'Robotic Process Automation for Finance Operations',
      client: 'FinanceFlow Corp',
      industry: 'Financial Services',
      duration: '6 months',
      date: '2023',
      challenge: 'Manual financial processes causing delays and human errors in critical operations.',
      solution: 'Implemented RPA bots for invoice processing, reconciliation, and reporting with intelligent document processing.',
      results: [
        '80% reduction in processing time',
        '95% accuracy improvement',
        '$1.5M annual savings',
        '90% employee satisfaction increase'
      ],
      technologies: ['UiPath', 'Python', 'OCR Technology', 'SQL Server', 'Power Automate'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=400',
      featured: false,
      category: 'Process Automation'
    },
    {
      id: '5',
      title: 'Advanced Analytics Platform for Retail Intelligence',
      client: 'RetailMax Group',
      industry: 'Retail',
      duration: '10 months',
      date: '2023',
      challenge: 'Lack of unified data insights across multiple retail channels affecting strategic decision-making.',
      solution: 'Built comprehensive analytics platform with predictive modeling and real-time dashboard for inventory and sales optimization.',
      results: [
        '35% improvement in inventory turnover',
        '25% increase in sales conversion',
        '90% faster reporting generation',
        'Real-time insights across 200+ stores'
      ],
      technologies: ['Tableau', 'Python', 'Apache Spark', 'PostgreSQL', 'Apache Kafka'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400',
      featured: false,
      category: 'Data Analytics'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const matchesCategory = selectedCategory === 'all' || caseStudy.category === selectedCategory;
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCases = caseStudies.filter(caseStudy => caseStudy.featured);

  const toggleExpanded = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover how we've transformed businesses through innovative technology solutions and strategic digital initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-3xl font-bold text-white">50+</span>
              <span className="text-blue-200 ml-2">Successful Projects</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-3xl font-bold text-white">$10M+</span>
              <span className="text-blue-200 ml-2">Client Savings</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-3xl font-bold text-white">98%</span>
              <span className="text-blue-200 ml-2">Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting our most impactful projects that delivered exceptional results for our clients
            </p>
          </div>
          
          <div className="space-y-8">
            {featuredCases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/2">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-64 object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <TagIcon className="h-4 w-4" />
                      <span className="bg-blue-100 px-3 py-1 rounded-full font-medium">{caseStudy.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{caseStudy.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <UserIcon className="h-4 w-4" />
                        <span>{caseStudy.client}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        <span>{caseStudy.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{caseStudy.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.results.slice(0, 4).map((result, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 border border-blue-200">
                          <span className="text-sm font-medium text-blue-900">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              <div className="w-full lg:w-1/2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Case Studies
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title, client, or industry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-gray-900">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredCaseStudies.length}</span> case studies
                {selectedCategory !== 'all' && (
                  <span> in <span className="font-semibold">{selectedCategory}</span></span>
                )}
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="space-y-6">
              {filteredCaseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="w-full lg:w-1/3">
                        <img 
                          src={caseStudy.image} 
                          alt={caseStudy.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-full lg:w-2/3 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {caseStudy.category}
                              </span>
                              {caseStudy.featured && (
                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                              <span><strong className="text-gray-900">Client:</strong> {caseStudy.client}</span>
                              <span><strong className="text-gray-900">Industry:</strong> {caseStudy.industry}</span>
                              <span><strong className="text-gray-900">Duration:</strong> {caseStudy.duration}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleExpanded(caseStudy.id)}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {expandedCase === caseStudy.id ? (
                              <>
                                <span>Less</span>
                                <ChevronUpIcon className="h-4 w-4" />
                              </>
                            ) : (
                              <>
                                <span>More</span>
                                <ChevronDownIcon className="h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>
                        
                        <p className="text-gray-700">{caseStudy.challenge}</p>
                        
                        {expandedCase === caseStudy.id && (
                          <div className="space-y-4 pt-4 border-t border-gray-200">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                              <p className="text-gray-700">{caseStudy.solution}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {caseStudy.results.map((result, index) => (
                                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                                    <span className="text-green-800 font-medium">{result}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {caseStudy.technologies.map((tech, index) => (
                                  <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No case studies found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help transform your business with innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2">
              Start Your Project
              <ExternalLinkIcon className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

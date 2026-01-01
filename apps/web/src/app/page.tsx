import React from 'react';
import { ArrowRight, Zap, Shield, Users, Target, Globe, Lightbulb, TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-8">
            <Lightbulb className="w-4 h-4 mr-2" />
            Innovative Technology Solutions
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Reality</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            We build cutting-edge software solutions that drive innovation, enhance productivity, and create meaningful impact for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Radiant Systems?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/20 max-w-4xl mx-auto">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Lightning-Fast Development</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our agile methodology and cutting-edge tools enable rapid prototyping and deployment, getting your solutions to market faster than ever.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-2xl p-8 border border-green-100 dark:border-green-900/20 max-w-4xl mx-auto">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Enterprise-Grade Security</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Built with security-first principles, our solutions protect your data and ensure compliance with industry standards and regulations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl p-8 border border-purple-100 dark:border-purple-900/20 max-w-4xl mx-auto">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Collaborative Partnership</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We work closely with your team throughout the entire process, ensuring transparent communication and aligned objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From concept to deployment, we provide comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-800 max-w-5xl mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <Target className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Custom Software Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Tailored applications built from the ground up to meet your specific business requirements and workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Web Applications</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Mobile Apps</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Desktop Software</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">API Development</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-800 max-w-5xl mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <Globe className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Cloud Solutions & DevOps</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Scalable cloud infrastructure and automated deployment pipelines for reliable, high-performance applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">AWS/Azure</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">CI/CD Pipelines</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">Containerization</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">Monitoring</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-800 max-w-5xl mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Digital Transformation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Strategic technology consulting to modernize your business processes and drive digital innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">Process Automation</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">Data Analytics</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">AI Integration</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">Legacy Modernization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the success of our clients and projects.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white max-w-5xl mx-auto shadow-xl">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Award className="w-8 h-8" />
                <span className="text-2xl font-semibold">Excellence in Delivery</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-8 text-center">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                    <div className="text-blue-100">Projects Completed</div>
                  </div>
                  <div className="w-px h-16 bg-white/20"></div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-8 text-center">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Happy Clients</div>
                  </div>
                  <div className="w-px h-16 bg-white/20"></div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-slate-800">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how Radiant Systems can help you achieve your technology goals and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                Download Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

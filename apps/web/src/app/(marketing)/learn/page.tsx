'use client';

import React, { useState } from 'react';
import { BookOpen, Video, FileText, Users, Clock, Star, Search, Filter, ChevronRight, Play, Download, Eye } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
  thumbnail: string;
  type: 'video' | 'article' | 'interactive';
  tags: string[];
}

interface Resource {
  id: string;
  title: string;
  type: 'whitepaper' | 'guide' | 'template' | 'checklist';
  description: string;
  downloadCount: number;
  category: string;
}

export default function LearnHubPage() {
  const [activeTab, setActiveTab] = useState<'courses' | 'resources' | 'webinars'>('courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Digital Transformation Fundamentals',
      description: 'Learn the core principles of digital transformation and how to implement them in your organization.',
      category: 'Digital Strategy',
      duration: '4 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250',
      type: 'video',
      tags: ['Digital Transformation', 'Strategy', 'Leadership']
    },
    {
      id: '2',
      title: 'Advanced Data Analytics for Business',
      description: 'Master advanced analytics techniques to drive data-driven decision making.',
      category: 'Data Analytics',
      duration: '6 hours',
      level: 'Advanced',
      rating: 4.9,
      students: 890,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250',
      type: 'interactive',
      tags: ['Analytics', 'Data Science', 'Business Intelligence']
    },
    {
      id: '3',
      title: 'Cloud Migration Best Practices',
      description: 'Comprehensive guide to planning and executing successful cloud migrations.',
      category: 'Cloud Computing',
      duration: '3 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: 2100,
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250',
      type: 'video',
      tags: ['Cloud', 'Migration', 'Infrastructure']
    },
    {
      id: '4',
      title: 'Cybersecurity Essentials',
      description: 'Essential cybersecurity practices every organization should implement.',
      category: 'Security',
      duration: '5 hours',
      level: 'Beginner',
      rating: 4.6,
      students: 1680,
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400&h=250',
      type: 'article',
      tags: ['Security', 'Risk Management', 'Compliance']
    }
  ];

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Digital Transformation Roadmap Template',
      type: 'template',
      description: 'A comprehensive template to plan your digital transformation journey.',
      downloadCount: 3200,
      category: 'Digital Strategy'
    },
    {
      id: '2',
      title: 'Cloud Security Checklist',
      type: 'checklist',
      description: 'Essential security measures for cloud infrastructure deployment.',
      downloadCount: 2800,
      category: 'Security'
    },
    {
      id: '3',
      title: 'Data Analytics Implementation Guide',
      type: 'guide',
      description: 'Step-by-step guide to implementing analytics solutions in your organization.',
      downloadCount: 1950,
      category: 'Data Analytics'
    },
    {
      id: '4',
      title: 'Future of Work Whitepaper',
      type: 'whitepaper',
      description: 'Research insights on how technology is reshaping the modern workplace.',
      downloadCount: 4100,
      category: 'Future Trends'
    }
  ];

  const categories = ['all', 'Digital Strategy', 'Data Analytics', 'Cloud Computing', 'Security', 'Future Trends'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'interactive': return <BookOpen className="w-4 h-4" />;
      case 'template': return <FileText className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'checklist': return <FileText className="w-4 h-4" />;
      case 'whitepaper': return <FileText className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Expand your knowledge with our comprehensive collection of courses, resources, and expert insights
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <span>50+ Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6" />
              <span>100+ Resources</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span>10,000+ Learners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'courses', label: 'Courses', icon: Video },
              { id: 'resources', label: 'Resources', icon: FileText },
              { id: 'webinars', label: 'Webinars', icon: Users }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              {activeTab === 'courses' && (
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {activeTab === 'courses' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center text-gray-900">
                <h2 className="text-2xl font-bold">
                  Courses ({filteredCourses.length})
                </h2>
              </div>
              <div className="space-y-6">
                {filteredCourses.map(course => (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-80 h-48 lg:h-auto">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              {getTypeIcon(course.type)}
                              <span className="text-sm text-gray-600 capitalize">{course.type}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                                {course.level}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{course.students.toLocaleString()} students</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {course.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            <Play className="w-4 h-4" />
                            Start Course
                          </button>
                          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <Eye className="w-4 h-4" />
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center text-gray-900">
                <h2 className="text-2xl font-bold">
                  Resources ({filteredResources.length})
                </h2>
              </div>
              <div className="space-y-4">
                {filteredResources.map(resource => (
                  <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getTypeIcon(resource.type)}
                          <span className="text-sm text-gray-600 capitalize">{resource.type}</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {resource.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{resource.downloadCount.toLocaleString()} downloads</span>
                          </div>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-6">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'webinars' && (
            <div className="space-y-8">
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join our expert-led webinars to stay updated with the latest trends and best practices in technology and business transformation.
                </p>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto text-gray-900">
                  <h3 className="text-xl font-bold mb-4">
                    The Future of AI in Business Operations
                  </h3>
                  <p className="text-gray-600 mb-6 text-gray-900">
                    Discover how artificial intelligence is revolutionizing business operations and learn practical strategies for implementation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>December 15, 2024 - 2:00 PM EST</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>245 registered</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who are advancing their careers with our expert-led learning programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Learning Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

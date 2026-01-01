import React from 'react';

const Manifesto: React.FC = () => {
  const principles = [
    {
      title: "Innovation First",
      description: "We believe technology should push boundaries, not just follow trends. Every solution we create challenges the status quo and opens new possibilities.",
      icon: "🚀"
    },
    {
      title: "Human-Centered Design",
      description: "Technology serves people, not the other way around. We design with empathy, ensuring every interaction feels natural and meaningful.",
      icon: "❤️"
    },
    {
      title: "Sustainable Progress",
      description: "True innovation considers tomorrow. We build systems that grow responsibly, minimizing environmental impact while maximizing positive change.",
      icon: "🌱"
    },
    {
      title: "Radical Transparency",
      description: "Trust is earned through openness. We share our processes, admit our mistakes, and celebrate our learnings with complete honesty.",
      icon: "🔍"
    },
    {
      title: "Collaborative Excellence",
      description: "The best solutions emerge from diverse minds working together. We foster environments where every voice contributes to breakthrough thinking.",
      icon: "🤝"
    },
    {
      title: "Continuous Evolution",
      description: "Perfection is a journey, not a destination. We embrace change, learn from failure, and constantly refine our approach to stay ahead.",
      icon: "🔄"
    }
  ];

  const values = [
    {
      category: "Quality",
      items: ["Excellence in every detail", "Rigorous testing standards", "Continuous improvement mindset"]
    },
    {
      category: "Integrity",
      items: ["Honest communication", "Ethical business practices", "Reliable partnerships"]
    },
    {
      category: "Innovation",
      items: ["Creative problem solving", "Emerging technology adoption", "Future-focused thinking"]
    },
    {
      category: "Impact",
      items: ["Meaningful solutions", "Positive social change", "Measurable results"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Manifesto</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We believe in the transformative power of technology to create a better world. 
              These are the principles that guide every decision, every line of code, and every solution we deliver.
            </p>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              To democratize access to cutting-edge technology by creating intuitive, powerful, and sustainable digital solutions 
              that empower individuals and organizations to achieve their full potential while contributing to a more connected 
              and equitable world.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Core Principles
          </h2>
          
          <div className="space-y-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 max-w-5xl mx-auto"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl flex-shrink-0 mt-2">
                    {principle.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Values in Action
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{value.category}</h3>
                <div className="space-y-3">
                  {value.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Our Vision for Tomorrow
            </h2>
            <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                We envision a future where technology seamlessly integrates with human creativity and intuition, 
                where digital solutions enhance rather than complicate our lives, and where innovation serves as 
                a force for positive global change.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                By 2030, we aim to be the catalyst that helps organizations worldwide transition into this new era 
                of human-centered technology, creating solutions that are not just functional, but transformational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to be part of something bigger? Whether you're a potential partner, team member, or client, 
            we invite you to join us in shaping the future of technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Work With Us
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Users } from 'lucide-react';

const ValueProp: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance standards to protect your critical business data and operations.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times to keep your business running at peak efficiency.'
    },
    {
      icon: Users,
      title: '24/7 Expert Support',
      description: 'Dedicated technical specialists available around the clock to ensure seamless operations.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Radiant Systems
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our proven approach to business transformation
          </p>
        </div>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white max-w-2xl mx-auto"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-teal-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
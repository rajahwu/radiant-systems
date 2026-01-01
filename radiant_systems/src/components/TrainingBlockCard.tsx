import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Target, BookOpen } from "lucide-react";

interface TrainingBlock {
  id: string;
  title: string;
  theme: string;
  skills: string[];
  durations: {
    label: string;
    hours: number;
    price: number;
  }[];
  description: string;
  level: string;
}

const trainingBlocks: TrainingBlock[] = [
  {
    id: "1",
    title: "Systems Thinking Fundamentals",
    theme: "Foundation",
    skills: ["Systems Analysis", "Root Cause Analysis", "Process Mapping", "Feedback Loops"],
    durations: [
      { label: "Half Day", hours: 4, price: 299 },
      { label: "Full Day", hours: 8, price: 499 },
      { label: "Two Days", hours: 16, price: 899 }
    ],
    description: "Build foundational understanding of systems thinking principles and methodologies.",
    level: "Beginner"
  },
  {
    id: "2",
    title: "Advanced Process Optimization",
    theme: "Optimization",
    skills: ["Lean Methodology", "Six Sigma", "Value Stream Mapping", "Continuous Improvement"],
    durations: [
      { label: "Full Day", hours: 8, price: 599 },
      { label: "Two Days", hours: 16, price: 1099 },
      { label: "Three Days", hours: 24, price: 1499 }
    ],
    description: "Master advanced techniques for optimizing complex business processes and workflows.",
    level: "Advanced"
  },
  {
    id: "3",
    title: "Digital Transformation Strategy",
    theme: "Technology",
    skills: ["Digital Strategy", "Change Management", "Technology Integration", "Data Analytics"],
    durations: [
      { label: "Half Day", hours: 4, price: 399 },
      { label: "Full Day", hours: 8, price: 699 },
      { label: "Workshop Series", hours: 32, price: 2199 }
    ],
    description: "Navigate digital transformation with strategic planning and implementation frameworks.",
    level: "Intermediate"
  }
];

const TrainingBlockCard: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = React.useState<{[key: string]: number}>({});

  const handleDurationSelect = (blockId: string, durationIndex: number) => {
    setSelectedDuration(prev => ({
      ...prev,
      [blockId]: durationIndex
    }));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getThemeColor = (theme: string) => {
    switch (theme) {
      case 'Foundation':
        return 'border-l-blue-500';
      case 'Optimization':
        return 'border-l-teal-500';
      case 'Technology':
        return 'border-l-purple-500';
      default:
        return 'border-l-gray-500';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Training Blocks
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive training modules designed to build systems thinking capabilities at every level.
        </p>
      </div>

      <div className="space-y-8">
        {trainingBlocks.map((block) => {
          const selectedIndex = selectedDuration[block.id] || 0;
          const selectedOption = block.durations[selectedIndex];

          return (
            <Card 
              key={block.id} 
              className={`border-l-4 ${getThemeColor(block.theme)} hover:shadow-lg transition-shadow duration-300`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{block.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(block.level)}`}>
                        {block.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Target className="w-4 h-4" />
                      <span className="font-medium">{block.theme}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{block.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-teal-600" />
                      <span className="font-medium text-gray-900">Skills Covered</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {block.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span className="font-medium text-gray-900">Duration Options</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      {block.durations.map((duration, index) => (
                        <label 
                          key={index}
                          className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name={`duration-${block.id}`}
                              checked={selectedIndex === index}
                              onChange={() => handleDurationSelect(block.id, index)}
                              className="text-teal-600 focus:ring-teal-500"
                            />
                            <div>
                              <span className="font-medium text-gray-900">{duration.label}</span>
                              <span className="text-sm text-gray-600 ml-2">({duration.hours} hours)</span>
                            </div>
                          </div>
                          <span className="font-semibold text-teal-600">${duration.price}</span>
                        </label>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        Enroll Now - ${selectedOption.price}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-teal-600 text-teal-600 hover:bg-teal-50"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-cream-50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Custom Training Solutions
          </h3>
          <p className="text-gray-600 mb-4">
            Need a tailored training program for your organization? We can customize any training block to meet your specific requirements.
          </p>
          <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
            Request Custom Training
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrainingBlockCard;
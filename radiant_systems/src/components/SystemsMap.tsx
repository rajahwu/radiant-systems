import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface System {
  id: number;
  name: string;
  description: string;
  color: string;
  position: { x: number; y: number };
  connections: number[];
}

const systems: System[] = [
  {
    id: 1,
    name: 'Leadership System',
    description: 'Strategic vision and organizational direction',
    color: '#218D8D',
    position: { x: 50, y: 15 },
    connections: [2, 3, 7]
  },
  {
    id: 2,
    name: 'Communication System',
    description: 'Information flow and stakeholder engagement',
    color: '#2D9A9A',
    position: { x: 20, y: 35 },
    connections: [1, 3, 4, 5]
  },
  {
    id: 3,
    name: 'Innovation System',
    description: 'Creative processes and continuous improvement',
    color: '#3AA7A7',
    position: { x: 80, y: 35 },
    connections: [1, 2, 6, 7]
  },
  {
    id: 4,
    name: 'Operations System',
    description: 'Core business processes and execution',
    color: '#47B4B4',
    position: { x: 15, y: 65 },
    connections: [2, 5, 6]
  },
  {
    id: 5,
    name: 'Quality System',
    description: 'Standards, metrics, and performance optimization',
    color: '#54C1C1',
    position: { x: 50, y: 75 },
    connections: [2, 4, 6, 7]
  },
  {
    id: 6,
    name: 'Learning System',
    description: 'Knowledge management and skill development',
    color: '#61CECE',
    position: { x: 85, y: 65 },
    connections: [3, 4, 5, 7]
  },
  {
    id: 7,
    name: 'Culture System',
    description: 'Values, behaviors, and organizational identity',
    color: '#6EDBDB',
    position: { x: 50, y: 50 },
    connections: [1, 3, 5, 6]
  }
];

export default function SystemsMap() {
  const [hoveredSystem, setHoveredSystem] = useState<number | null>(null);
  const [selectedSystem, setSelectedSystem] = useState<number | null>(null);

  const getConnectionPath = (from: System, to: System) => {
    const dx = to.position.x - from.position.x;
    const dy = to.position.y - from.position.y;
    const midX = from.position.x + dx * 0.5;
    const midY = from.position.y + dy * 0.5;
    
    return `M ${from.position.x} ${from.position.y} Q ${midX} ${midY} ${to.position.x} ${to.position.y}`;
  };

  const isSystemHighlighted = (systemId: number) => {
    if (!hoveredSystem && !selectedSystem) return false;
    const activeSystem = hoveredSystem || selectedSystem;
    if (activeSystem === systemId) return true;
    
    const system = systems.find(s => s.id === activeSystem);
    return system?.connections.includes(systemId) || false;
  };

  const isConnectionVisible = (fromId: number, toId: number) => {
    if (!hoveredSystem && !selectedSystem) return false;
    const activeSystem = hoveredSystem || selectedSystem;
    return activeSystem === fromId || activeSystem === toId;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Seven Systems Framework
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the interconnected systems that drive organizational excellence. 
          Hover over each system to see its connections and relationships.
        </p>
      </div>

      <div className="relative">
        <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
          <CardContent className="p-8">
            <div className="relative w-full h-96 md:h-[500px]">
              {/* SVG for connections */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {systems.map(system => 
                  system.connections.map(connectionId => {
                    const connectedSystem = systems.find(s => s.id === connectionId);
                    if (!connectedSystem || connectionId <= system.id) return null;
                    
                    const isVisible = isConnectionVisible(system.id, connectionId);
                    
                    return (
                      <path
                        key={`${system.id}-${connectionId}`}
                        d={getConnectionPath(system, connectedSystem)}
                        stroke={isVisible ? system.color : '#E5E7EB'}
                        strokeWidth={isVisible ? "0.5" : "0.2"}
                        fill="none"
                        className={cn(
                          "transition-all duration-300",
                          isVisible && "filter-[url(#glow)]"
                        )}
                        opacity={isVisible ? 0.8 : 0.3}
                      />
                    );
                  })
                )}
              </svg>

              {/* System nodes */}
              {systems.map(system => {
                const isHovered = hoveredSystem === system.id;
                const isSelected = selectedSystem === system.id;
                const isHighlighted = isSystemHighlighted(system.id);
                const isActive = isHovered || isSelected;

                return (
                  <div
                    key={system.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${system.position.x}%`,
                      top: `${system.position.y}%`,
                    }}
                    onMouseEnter={() => setHoveredSystem(system.id)}
                    onMouseLeave={() => setHoveredSystem(null)}
                    onClick={() => setSelectedSystem(selectedSystem === system.id ? null : system.id)}
                  >
                    {/* System circle */}
                    <div
                      className={cn(
                        "w-12 h-12 md:w-16 md:h-16 rounded-full border-4 transition-all duration-300 flex items-center justify-center",
                        "shadow-lg hover:shadow-xl transform hover:scale-110",
                        isActive && "scale-125 shadow-2xl",
                        isHighlighted ? "opacity-100 z-10" : (!hoveredSystem && !selectedSystem) ? "opacity-90" : "opacity-40"
                      )}
                      style={{
                        backgroundColor: system.color,
                        borderColor: isActive ? '#FFFFFF' : system.color,
                        boxShadow: isActive ? `0 0 20px ${system.color}40` : undefined
                      }}
                    >
                      <span className="text-white font-bold text-xs md:text-sm">
                        {system.id}
                      </span>
                    </div>

                    {/* System label */}
                    <div
                      className={cn(
                        "absolute top-full mt-2 left-1/2 transform -translate-x-1/2",
                        "bg-white rounded-lg shadow-lg border border-gray-200 p-3 min-w-48 max-w-64",
                        "transition-all duration-300 pointer-events-none",
                        isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                      )}
                    >
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        {system.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {system.description}
                      </p>
                      <div 
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 border-l border-t border-gray-200"
                        style={{ backgroundColor: 'white' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Click or hover on any system to explore its connections
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                  <span>System Node</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-teal-600"></div>
                  <span>System Connection</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System details panel */}
        {selectedSystem && (
          <Card className="mt-6 border-teal-200 bg-white">
            <CardContent className="p-6">
              {(() => {
                const system = systems.find(s => s.id === selectedSystem);
                if (!system) return null;
                
                const connectedSystems = system.connections.map(id => 
                  systems.find(s => s.id === id)
                ).filter(Boolean);

                return (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: system.color }}
                      >
                        {system.id}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {system.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {system.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Connected Systems:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {connectedSystems.map(connectedSystem => (
                          <span
                            key={connectedSystem?.id}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-teal-50 text-teal-700 border border-teal-200"
                          >
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: connectedSystem?.color }}
                            />
                            {connectedSystem?.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
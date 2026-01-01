// Core document structure
export type SectionType = 'build-order' | 'retrospective' | 'evaluation' | 'billables';

export interface ManualDocument {
  metadata: DocumentMetadata;
  sections: {
    buildOrder: BuildOrderSection[];
    retrospective: RetrospectiveSection;
    evaluation?: EvaluationSection;
    billables?: BillablesSection;
  };
}

export interface DocumentMetadata {
  title: string;
  version: string;
  generatedAt: string;
  status: 'draft' | 'ready' | 'published';
}

// Build Order Section
export interface BuildOrderSection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  fileStructure?: string;
  coreTypes?: string;
  codePatterns?: string;
  integrationPoints?: string[];
}

export type ManualSections = BuildOrderSection;

// Retrospective Section
export interface RetrospectiveSection {
  year: number;
  theme: string;
  summary: string;
  systemsBuilt: SystemBuilt[];
  doctrineArchitected: DoctrineItem[];
  storyAsArtifact: StoryItem[];
  sourcePhilosophy: string;
  evolutionNarrative: {
    from: string;
    to: string;
  };
  keyShifts: string[];
  nextYearFocus: string;
}

export interface SystemBuilt {
  name: string;
  role: string;
  status: 'complete' | 'in-progress' | 'planned';
}

export interface DoctrineItem {
  name: string;
  description: string;
  tags: string[];
}

export interface StoryItem {
  title: string;
  description: string;
  status: string;
}

// Evaluation Section
export interface EvaluationSection {
  overallAssessment: Assessment;
  strengths: string[];
  concerns: Concern[];
  riskAssessment: RiskItem[];
  developmentPhases: Phase[];
  conclusion: string;
}

export interface Assessment {
  rating: number;
  summary: string;
}

export interface Concern {
  category: string;
  issue: string;
  recommendation: string;
}

export interface RiskItem {
  level: 'high' | 'medium' | 'low';
  areas: string[];
}

export interface Phase {
  number: number;
  name: string;
  duration: string;
  tasks: string[];
}

// Billables Section
export interface BillablesSection {
  components: ComponentValue[];
  pricingModels: PricingModel[];
  strategicDifferentiators: string[];
  finalValuation: Valuation;
}

export interface ComponentValue {
  component: string;
  description: string;
  comparableServices: string;
  estimateRange: [number, number];
}

export interface PricingModel {
  tier: string;
  name: string;
  priceRange: string;
  features: string[];
}

export interface Valuation {
  low: number;
  mid: number;
  high: number;
  totalEnterpriseValue: string;
}

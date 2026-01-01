import { 
  ManualDocument, 
  RetrospectiveSection,
  EvaluationSection,
  BillablesSection,
  BuildOrderSection 
} from '../types/manual.types';

export async function loadBuildOrderSections(): Promise<BuildOrderSection[]> {
  const response = await fetch('/data/manual/sections.json');
  if (!response.ok) {
    throw new Error(`Failed to load build order: ${response.statusText}`);
  }
  const data = await response.json();
  return data.sections || data;
}

export async function loadRetrospective(): Promise<RetrospectiveSection> {
  const response = await fetch('/data/manual/retrospective.json');
  if (!response.ok) {
    throw new Error(`Failed to load retrospective: ${response.statusText}`);
  }
  return response.json();
}

export async function loadEvaluation(): Promise<EvaluationSection> {
  const response = await fetch('/data/manual/evaluation.json');
  if (!response.ok) {
    throw new Error(`Failed to load evaluation: ${response.statusText}`);
  }
  return response.json();
}

export async function loadBillables(): Promise<BillablesSection> {
  const response = await fetch('/data/manual/billables.json');
  if (!response.ok) {
    throw new Error(`Failed to load billables: ${response.statusText}`);
  }
  return response.json();
}

export async function loadManualDocument(): Promise<ManualDocument> {
  const [buildOrder, retrospective, evaluation, billables] = await Promise.all([
    loadBuildOrderSections(),
    loadRetrospective(),
    loadEvaluation(),
    loadBillables()
  ]);

  return {
    metadata: {
      title: 'Radiant Seven — Full Project Scaffolds',
      version: '1.0.0',
      generatedAt: '2025-12-31',
      status: 'ready'
    },
    sections: {
      buildOrder,
      retrospective,
      evaluation,
      billables
    }
  };
}

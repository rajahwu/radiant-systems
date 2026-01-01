export interface ManualSection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  fileStructure?: string;
  coreTypes?: string;
  codePatterns?: string;
  integrationPoints?: string[];
}

export interface ManualData {
  sections: ManualSection[];
}

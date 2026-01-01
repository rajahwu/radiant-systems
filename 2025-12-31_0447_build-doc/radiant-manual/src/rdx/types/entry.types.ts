export type EntryType = 
  | 'decision'
  | 'artifact'
  | 'blocker'
  | 'insight'
  | 'handoff'
  | 'checkpoint';

export interface EntryContext {
  file?: string;
  line?: number;
  dependencies?: string[];
}

export interface Entry {
  id: string;
  sessionId: string;
  timestamp: string;
  type: EntryType;
  content: string;
  context?: EntryContext;
}

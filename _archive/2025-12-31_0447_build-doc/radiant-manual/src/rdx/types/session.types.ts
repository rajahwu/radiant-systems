import { Entry } from './entry.types';

export interface SessionMetadata {
  objective?: string;
  tags: string[];
  linkedSessions: string[];
  milestone?: string;
}

export interface Session {
  id: string;
  projectId: string;
  agentId: string;
  startTime: string;
  endTime?: string;
  status: 'active' | 'paused' | 'complete';
  entries: Entry[];
  metadata: SessionMetadata;
}

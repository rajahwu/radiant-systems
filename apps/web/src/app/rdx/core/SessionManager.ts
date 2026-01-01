import { Session, SessionMetadata } from '../types/session.types';
import { Entry } from '../types/entry.types';
import { generateId, getTimestamp } from './TimestampUtil';

export class SessionManager {
  private sessions: Map<string, Session> = new Map();
  private activeSession: string | null = null;

  startSession(projectId: string, agentId: string, metadata?: Partial<SessionMetadata>): Session {
    const session: Session = {
      id: generateId('sess'),
      projectId,
      agentId,
      startTime: getTimestamp(),
      status: 'active',
      entries: [],
      metadata: {
        tags: [],
        linkedSessions: [],
        ...metadata
      }
    };
    
    this.sessions.set(session.id, session);
    this.activeSession = session.id;
    return session;
  }

  logEntry(type: Entry['type'], content: string, context?: Entry['context']): Entry {
    if (!this.activeSession) throw new Error('No active session');
    
    const entry: Entry = {
      id: generateId('entry'),
      sessionId: this.activeSession,
      timestamp: getTimestamp(),
      type,
      content,
      context
    };
    
    const session = this.sessions.get(this.activeSession)!;
    session.entries.push(entry);
    return entry;
  }

  endSession(): Session {
    if (!this.activeSession) throw new Error('No active session');
    
    const session = this.sessions.get(this.activeSession)!;
    session.endTime = getTimestamp();
    session.status = 'complete';
    this.activeSession = null;
    return session;
  }

  getSession(id: string): Session | undefined {
    return this.sessions.get(id);
  }

  // Placeholder for export logic
  exportToMarkdown(sessionId: string): string {
    return `Session ${sessionId} export not implemented yet.`;
  }
}

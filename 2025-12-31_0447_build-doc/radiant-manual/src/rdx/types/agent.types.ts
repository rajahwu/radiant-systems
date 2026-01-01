export interface Agent {
  id: string;
  name: string;
  platform: 'claude' | 'gemini' | 'gpt' | 'local';
  capabilities: string[];
  currentSession?: string;
}

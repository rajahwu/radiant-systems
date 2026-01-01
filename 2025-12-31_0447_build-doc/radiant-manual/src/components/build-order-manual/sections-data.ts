const MANUAL_SECTIONS = [
  {
    id: '01-rdx',
    title: '1. RDX Session',
    subtitle: 'Foundation Layer (Logging)',
    content: 'Session logging and tracking across agents and projects. The immutable history of the build.',
    fileStructure: `rdx-session/
├── src/
│   ├── core/
│   │   ├── SessionManager.ts
│   │   └── EntryLogger.ts
│   └── types/
│       ├── session.types.ts
│       └── entry.types.ts`,
    coreTypes: `// session.types.ts
interface Session {
  id: string;
  projectId: string;
  agentId: string;
  startTime: Date;
  status: 'active' | 'paused' | 'complete';
}

interface LogEntry {
  sessionId: string;
  timestamp: Date;
  type: 'action' | 'decision' | 'output';
  payload: Record<string, unknown>;
  metadata: EntryMetadata;
}`,
    codePatterns: `// SessionManager.ts
class SessionManager {
  private activeSessions: Map<string, Session> = new Map();
  
  createSession(projectId: string, agentId: string): Session {
    const session: Session = {
      id: generateId(),
      projectId,
      agentId,
      startTime: new Date(),
      status: 'active'
    };
    this.activeSessions.set(session.id, session);
    return session;
  }
  
  log(sessionId: string, entry: LogEntry): void {
    // Immutable append-only logging
    this.entryLogger.append(sessionId, entry);
  }
}`,
    integrationPoints: [
      'Receives session requests from all other systems',
      'Provides session context to Lattice Sync for coordination',
      'Exports logs for RIT/RitOps publication layer',
      'Feeds historical data to Grindhouse for pattern analysis'
    ]
  },
  {
    id: '02-grindhouse',
    title: '2. Grindhouse',
    subtitle: 'Execution Layer',
    content: 'Strategic planning (Dropframe) and production execution (Grindline). The engine of the system.',
    fileStructure: `grindhouse/
├── dropframe/ (Research & Analysis)
│   ├── FrameManager.ts
│   ├── AnalysisEngine.ts
│   └── types/
│       └── frame.types.ts
└── grindline/ (Production Execution)
    ├── TaskQueue.ts
    ├── ExecutionEngine.ts
    └── types/
        └── task.types.ts`,
    coreTypes: `// frame.types.ts (Dropframe)
interface Frame {
  id: string;
  type: 'research' | 'analysis' | 'planning';
  scope: string;
  inputs: DataSource[];
  outputs: Insight[];
  status: FrameStatus;
}

// task.types.ts (Grindline)
interface Task {
  id: string;
  frameId: string; // Links to Dropframe research
  priority: number;
  stage: 'queued' | 'active' | 'review' | 'complete';
  assignedAgent: string;
  dependencies: string[];
}`,
    codePatterns: `// Dropframe: FrameManager.ts
class FrameManager {
  createAnalysisFrame(scope: string, sources: DataSource[]): Frame {
    const frame = {
      id: generateId(),
      type: 'analysis',
      scope,
      inputs: sources,
      outputs: [],
      status: 'pending'
    };
    
    // Log to RDX
    this.rdxSession.log(this.sessionId, {
      type: 'action',
      payload: { action: 'frame_created', frameId: frame.id }
    });
    
    return frame;
  }
  
  transitionToProduction(frameId: string): Task[] {
    const frame = this.getFrame(frameId);
    // Convert insights to executable tasks
    return frame.outputs.map(insight => 
      this.grindline.createTask(frameId, insight)
    );
  }
}

// Grindline: TaskQueue.ts
class TaskQueue {
  enqueue(task: Task): void {
    this.priorityQueue.insert(task, task.priority);
    this.latticeSync.notifyAgents('task_available', task.id);
  }
  
  assignToAgent(taskId: string, agentId: string): void {
    const task = this.getTask(taskId);
    task.assignedAgent = agentId;
    task.stage = 'active';
    
    // Update all coordination layers
    this.rdxSession.log(this.sessionId, {
      type: 'action',
      payload: { taskId, agentId, stage: 'active' }
    });
  }
}`,
    integrationPoints: [
      'Dropframe receives research triggers from VSM School (knowledge gaps)',
      'Dropframe outputs feed Grindline task queue',
      'Grindline coordinates with Lattice Sync for agent assignment',
      'Both log all state changes to RDX Session',
      'Completed tasks flow to Content Factor for processing'
    ]
  },
  {
    id: '03-content-factor',
    title: '3. Content Factor',
    subtitle: 'Pipeline Layer',
    content: 'Modular content pipeline for creation, processing, and distribution.',
    fileStructure: `content-factor/
├── src/
│   ├── pipeline/
│   │   ├── PipelineManager.ts
│   │   ├── StageProcessor.ts
│   │   └── validators/
│   ├── stages/
│   │   ├── creation/
│   │   ├── refinement/
│   │   └── distribution/
│   └── types/
│       ├── pipeline.types.ts
│       └── content.types.ts`,
    coreTypes: `// pipeline.types.ts
interface Pipeline {
  id: string;
  name: string;
  stages: Stage[];
  status: PipelineStatus;
}

interface Stage {
  id: string;
  type: 'creation' | 'processing' | 'validation' | 'distribution';
  processor: StageProcessor;
  inputs: ContentArtifact[];
  outputs: ContentArtifact[];
}

interface ContentArtifact {
  id: string;
  sourceTaskId: string; // From Grindline
  format: 'markdown' | 'html' | 'pdf' | 'video';
  content: string | Buffer;
  metadata: ArtifactMetadata;
}`,
    codePatterns: `// PipelineManager.ts
class PipelineManager {
  createPipeline(config: PipelineConfig): Pipeline {
    const pipeline: Pipeline = {
      id: generateId(),
      name: config.name,
      stages: this.initializeStages(config.stages),
      status: 'ready'
    };
    
    return pipeline;
  }
  
  processArtifact(pipelineId: string, artifact: ContentArtifact): void {
    const pipeline = this.getPipeline(pipelineId);
    let currentArtifact = artifact;
    
    for (const stage of pipeline.stages) {
      // Sequential processing through stages
      currentArtifact = stage.processor.process(currentArtifact);
      
      // Log progression
      this.rdxSession.log(this.sessionId, {
        type: 'action',
        payload: { 
          pipelineId, 
          stageId: stage.id, 
          artifactId: currentArtifact.id 
        }
      });
    }
    
    // Final artifact ready for distribution
    this.distributeArtifact(currentArtifact);
  }
}

// StageProcessor.ts (example: refinement stage)
class RefinementProcessor implements StageProcessor {
  process(artifact: ContentArtifact): ContentArtifact {
    // Apply Clearline7 formatting
    const formatted = this.clearline.format(artifact);
    
    // Quality validation
    const validated = this.validateQuality(formatted);
    
    return {
      ...artifact,
      content: validated.content,
      metadata: {
        ...artifact.metadata,
        refinementStage: 'complete',
        qualityScore: validated.score
      }
    };
  }
}`,
    integrationPoints: [
      'Receives completed tasks from Grindline as input artifacts',
      'Uses Clearline7 for formatting in refinement stages',
      'Coordinates with Lattice Sync for multi-agent review processes',
      'Outputs to VSM School for educational content',
      'Publishes final artifacts through RIT/RitOps',
      'Logs all stage transitions to RDX Session'
    ]
  },
  {
    id: '04-vsm-school',
    title: '4. VSM School',
    subtitle: 'Educational Output',
    content: 'Systems thinking education with training cards and modular curriculum.',
    fileStructure: `vsm-school/
├── src/
│   ├── curriculum/
│   │   ├── ModuleManager.ts
│   │   ├── CardGenerator.ts
│   │   └── ProgressTracker.ts
│   ├── cards/
│   │   ├── templates/
│   │   └── validators/
│   └── types/
│       ├── module.types.ts
│       ├── card.types.ts
│       └── progress.types.ts`,
    coreTypes: `// module.types.ts
interface Module {
  id: string;
  name: string;
  stage: 'fabrication' | 'development' | 'strategy' | 'application' | 'mastery';
  cards: Card[];
  prerequisites: string[];
  competencyIndicators: Competency[];
}

// card.types.ts
interface Card {
  id: string;
  moduleId: string;
  title: string;
  concept: string;
  examples: Example[];
  exercises: Exercise[];
  format: CardFormat;
}

// progress.types.ts
interface LearnerProgress {
  learnerId: string;
  completedModules: string[];
  currentModule: string;
  competencyScores: Map<string, number>;
}`,
    codePatterns: `// ModuleManager.ts
class ModuleManager {
  createModule(stage: ModuleStage, content: ModuleContent): Module {
    const module: Module = {
      id: generateId(),
      name: content.name,
      stage,
      cards: [],
      prerequisites: this.inferPrerequisites(stage),
      competencyIndicators: content.indicators
    };
    
    // Generate cards from content
    module.cards = this.cardGenerator.generate(content);
    
    // Log creation
    this.rdxSession.log(this.sessionId, {
      type: 'output',
      payload: { moduleId: module.id, stage, cardCount: module.cards.length }
    });
    
    return module;
  }
  
  identifyKnowledgeGap(learnerId: string): ResearchRequest {
    const progress = this.getProgress(learnerId);
    const gaps = this.analyzeGaps(progress);
    
    // Trigger Dropframe research
    return {
      type: 'knowledge_gap',
      scope: gaps.primaryGap,
      requestedBy: 'vsm-school',
      targetModule: progress.currentModule
    };
  }
}

// CardGenerator.ts
class CardGenerator {
  generate(content: ModuleContent): Card[] {
    return content.concepts.map(concept => ({
      id: generateId(),
      moduleId: content.moduleId,
      title: concept.title,
      concept: concept.description,
      examples: this.extractExamples(concept),
      exercises: this.createExercises(concept),
      format: this.applyCardFormat(concept)
    }));
  }
  
  private applyCardFormat(concept: Concept): CardFormat {
    // Uses Clearline7 for consistent formatting
    return this.clearline.applyTemplate('vsmCard', concept);
  }
}`,
    integrationPoints: [
      'Triggers research in Dropframe when knowledge gaps identified',
      'Receives educational content from Content Factor pipeline',
      'Uses Clearline7 for card formatting and visual consistency',
      'Coordinates with Lattice Sync for multi-learner contexts',
      'Logs all progress and completion to RDX Session',
      'Publishes completed modules through RIT/RitOps'
    ]
  },
  {
    id: '05-lattice-sync',
    title: '5. Lattice Sync',
    subtitle: 'Coordination Layer',
    content: 'Multi-agent coordination, context sharing, and protocol management.',
    fileStructure: `lattice-sync/
├── src/
│   ├── coordination/
│   │   ├── AgentRegistry.ts
│   │   ├── ContextBroker.ts
│   │   └── ProtocolManager.ts
│   ├── protocols/
│   │   ├── handoff.protocol.ts
│   │   ├── review.protocol.ts
│   │   └── collaboration.protocol.ts
│   └── types/
│       ├── agent.types.ts
│       ├── context.types.ts
│       └── protocol.types.ts`,
    coreTypes: `// agent.types.ts
interface Agent {
  id: string;
  name: string;
  capabilities: Capability[];
  status: 'available' | 'busy' | 'offline';
  currentContext?: SharedContext;
}

// context.types.ts
interface SharedContext {
  id: string;
  scope: string;
  participants: string[]; // Agent IDs
  state: Record<string, unknown>;
  history: ContextEvent[];
  syncedAt: Date;
}

// protocol.types.ts
interface Protocol {
  id: string;
  name: string;
  type: 'handoff' | 'review' | 'collaboration';
  steps: ProtocolStep[];
  participants: ProtocolRole[];
}`,
    codePatterns: `// AgentRegistry.ts
class AgentRegistry {
  private agents: Map<string, Agent> = new Map();
  
  registerAgent(agent: Agent): void {
    this.agents.set(agent.id, agent);
    
    // Notify all systems of new agent availability
    this.broadcast('agent_registered', {
      agentId: agent.id,
      capabilities: agent.capabilities
    });
    
    // Log registration
    this.rdxSession.log(this.sessionId, {
      type: 'action',
      payload: { action: 'agent_registered', agentId: agent.id }
    });
  }
  
  findCapableAgent(required: Capability): Agent | null {
    return Array.from(this.agents.values())
      .find(agent => 
        agent.status === 'available' && 
        agent.capabilities.includes(required)
      ) ?? null;
  }
}

// ContextBroker.ts
class ContextBroker {
  createSharedContext(scope: string, participants: string[]): SharedContext {
    const context: SharedContext = {
      id: generateId(),
      scope,
      participants,
      state: {},
      history: [],
      syncedAt: new Date()
    };
    
    // Initialize context for all participants
    participants.forEach(agentId => {
      this.syncContextToAgent(agentId, context);
    });
    
    return context;
  }
  
  updateContext(contextId: string, delta: Record<string, unknown>): void {
    const context = this.getContext(contextId);
    
    // Merge delta into state
    context.state = { ...context.state, ...delta };
    context.syncedAt = new Date();
    
    // Record event
    context.history.push({
      timestamp: new Date(),
      type: 'state_update',
      delta
    });
    
    // Sync to all participants
    context.participants.forEach(agentId => {
      this.syncContextToAgent(agentId, context);
    });
  }
}

// ProtocolManager.ts
class ProtocolManager {
  executeProtocol(protocolId: string, context: SharedContext): void {
    const protocol = this.getProtocol(protocolId);
    
    for (const step of protocol.steps) {
      // Assign step to capable agent
      const agent = this.agentRegistry.findCapableAgent(step.requiredCapability);
      
      if (!agent) {
        throw new Error(\`No agent available for step: \${step.name}\`);
      }
      
      // Execute step
      this.executeStep(agent, step, context);
      
      // Log progression
      this.rdxSession.log(this.sessionId, {
        type: 'action',
        payload: { 
          protocolId, 
          step: step.name, 
          agentId: agent.id 
        }
      });
    }
  }
}`,
    integrationPoints: [
      'Central coordination hub for all agent-to-agent communication',
      'Provides shared context to Grindline for task assignment',
      'Coordinates review protocols across Content Factor stages',
      'Manages handoffs between Dropframe research and Grindline production',
      'Enables multi-agent collaboration in VSM School learning contexts',
      'Logs all coordination events to RDX Session',
      'Receives agent availability updates from all systems'
    ]
  },
  {
    id: '06-clearline-7',
    title: '6. Clearline7',
    subtitle: 'Formatting Layer',
    content: 'Google Docs formatting infrastructure and style system.',
    fileStructure: `clearline7/
├── src/
│   ├── formatters/
│   │   ├── DocumentFormatter.ts
│   │   ├── StyleEngine.ts
│   │   └── TemplateRenderer.ts
│   ├── templates/
│   │   ├── vsmCard.template.ts
│   │   ├── report.template.ts
│   │   └── presentation.template.ts
│   ├── integrations/
│   │   └── GoogleDocsAdapter.ts
│   └── types/
│       ├── format.types.ts
│       ├── style.types.ts
│       └── template.types.ts`,
    coreTypes: `// format.types.ts
interface DocumentFormat {
  id: string;
  name: string;
  type: 'vsmCard' | 'report' | 'presentation' | 'manual';
  styles: StyleDefinition[];
  structure: DocumentStructure;
}

// style.types.ts
interface StyleDefinition {
  name: string;
  element: 'heading' | 'paragraph' | 'code' | 'list';
  properties: CSSProperties;
  googleDocsMapping: GoogleDocsStyle;
}

// template.types.ts
interface Template {
  id: string;
  format: DocumentFormat;
  placeholders: Placeholder[];
  renderFn: (data: TemplateData) => FormattedDocument;
}`,
    codePatterns: `// DocumentFormatter.ts
class DocumentFormatter {
  format(content: string, formatId: string): FormattedDocument {
    const format = this.getFormat(formatId);
    
    // Parse content into structure
    const parsed = this.parseContent(content);
    
    // Apply styles
    const styled = this.styleEngine.apply(parsed, format.styles);
    
    // Generate final document
    return {
      id: generateId(),
      formatId,
      content: styled,
      metadata: {
        formattedAt: new Date(),
        formatVersion: format.version
      }
    };
  }
  
  exportToGoogleDocs(doc: FormattedDocument): GoogleDocsDocument {
    // Convert to Google Docs format
    return this.googleDocsAdapter.convert(doc);
  }
}

// StyleEngine.ts
class StyleEngine {
  apply(content: ParsedContent, styles: StyleDefinition[]): StyledContent {
    const styleMap = this.buildStyleMap(styles);
    
    return {
      ...content,
      elements: content.elements.map(element => ({
        ...element,
        style: styleMap[element.type] ?? this.getDefaultStyle(element.type)
      }))
    };
  }
  
  private buildStyleMap(styles: StyleDefinition[]): Record<string, Style> {
    return styles.reduce((map, def) => ({
      ...map,
      [def.element]: this.compileStyle(def)
    }), {});
  }
}

// TemplateRenderer.ts
class TemplateRenderer {
  render(template: Template, data: TemplateData): FormattedDocument {
    // Validate data against placeholders
    this.validateData(template.placeholders, data);
    
    // Execute template render function
    const rendered = template.renderFn(data);
    
    // Apply format styles
    return this.documentFormatter.format(rendered.content, template.format.id);
  }
}`,
    integrationPoints: [
      'Used by Content Factor for formatting in refinement stages',
      'Provides card formatting for VSM School modules',
      'Formats all documentation output from Grindline',
      'Ensures consistent styling across RIT/RitOps publications',
      'Integrates with Google Docs API for collaborative editing',
      'Logs formatting operations to RDX Session',
      'Provides style definitions to all content-generating systems'
    ]
  },
  {
    id: '07-rit-ops',
    title: '7. RIT / RitOps',
    subtitle: 'Publication Layer',
    content: 'Public presentation layer for the Radiant Seven ecosystem.',
    fileStructure: `rit-ops/
├── src/
│   ├── publication/
│   │   ├── PublicationManager.ts
│   │   ├── VersionControl.ts
│   │   └── DistributionEngine.ts
│   ├── presentation/
│   │   ├── SiteGenerator.ts
│   │   └── ComponentLibrary.ts
│   ├── analytics/
│   │   └── MetricsCollector.ts
│   └── types/
│       ├── publication.types.ts
│       ├── distribution.types.ts
│       └── metrics.types.ts`,
    coreTypes: `// publication.types.ts
interface Publication {
  id: string;
  title: string;
  type: 'documentation' | 'module' | 'presentation' | 'report';
  sourceArtifactId: string; // From Content Factor
  status: 'draft' | 'review' | 'published' | 'archived';
  versions: PublicationVersion[];
  distribution: DistributionConfig;
}

// distribution.types.ts
interface DistributionConfig {
  channels: Channel[];
  visibility: 'public' | 'private' | 'restricted';
  targets: DistributionTarget[];
}

interface DistributionTarget {
  type: 'web' | 'pdf' | 'api' | 'rss';
  url?: string;
  metadata: TargetMetadata;
}

// metrics.types.ts
interface PublicationMetrics {
  publicationId: string;
  views: number;
  downloads: number;
  engagement: EngagementMetrics;
  collectedAt: Date;
}`,
    codePatterns: `// PublicationManager.ts
class PublicationManager {
  createPublication(artifact: ContentArtifact): Publication {
    const publication: Publication = {
      id: generateId(),
      title: artifact.metadata.title,
      type: this.inferType(artifact),
      sourceArtifactId: artifact.id,
      status: 'draft',
      versions: [],
      distribution: this.createDefaultDistribution(artifact)
    };
    
    // Create initial version
    this.createVersion(publication.id, artifact);
    
    // Log publication creation
    this.rdxSession.log(this.sessionId, {
      type: 'output',
      payload: { 
        publicationId: publication.id, 
        sourceArtifactId: artifact.id 
      }
    });
    
    return publication;
  }
  
  publish(publicationId: string): void {
    const publication = this.getPublication(publicationId);
    
    // Update status
    publication.status = 'published';
    
    // Execute distribution
    this.distributionEngine.distribute(publication);
    
    // Start metrics collection
    this.metricsCollector.track(publicationId);
    
    // Log publication
    this.rdxSession.log(this.sessionId, {
      type: 'action',
      payload: { 
        publicationId, 
        action: 'published',
        timestamp: new Date()
      }
    });
  }
}

// DistributionEngine.ts
class DistributionEngine {
  distribute(publication: Publication): void {
    for (const target of publication.distribution.targets) {
      switch (target.type) {
        case 'web':
          this.publishToWeb(publication, target);
          break;
        case 'pdf':
          this.generatePDF(publication, target);
          break;
        case 'api':
          this.exposeViaAPI(publication, target);
          break;
        case 'rss':
          this.addToFeed(publication, target);
          break;
      }
      
      // Log each distribution
      this.rdxSession.log(this.sessionId, {
        type: 'action',
        payload: {
          publicationId: publication.id,
          targetType: target.type,
          targetUrl: target.url
        }
      });
    }
  }
  
  private publishToWeb(publication: Publication, target: DistributionTarget): void {
    // Generate site using SiteGenerator
    const site = this.siteGenerator.generate(publication);
    
    // Deploy to target URL
    this.deploy(site, target.url);
  }
}

// SiteGenerator.ts
class SiteGenerator {
  generate(publication: Publication): GeneratedSite {
    // Use Clearline7 for consistent styling
    const styled = this.clearline.format(
      publication.content, 
      'webPresentation'
    );
    
    // Build site structure
    return {
      pages: this.buildPages(styled),
      navigation: this.buildNavigation(publication),
      assets: this.prepareAssets(publication),
      metadata: this.generateMetadata(publication)
    };
  }
}`,
    integrationPoints: [
      'Receives final artifacts from Content Factor for publication',
      'Uses Clearline7 for consistent web presentation styling',
      'Pulls historical data from RDX Session for version tracking',
      'Coordinates with Lattice Sync for multi-agent review before publish',
      'Publishes VSM School modules as accessible web content',
      'Logs all publication events and metrics to RDX Session',
      'Provides public API endpoints for external integrations'
    ]
  }
];

export default MANUAL_SECTIONS;
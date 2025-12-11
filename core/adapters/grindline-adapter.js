/**
 * Grindline Adapter — Radiant v0.1
 *
 * This file defines how Radiant communicates with the
 * Grindline Production Engine.
 *
 * It does NOT implement real pipelines yet. Instead, it forms correct
 * PIPELINE_REQUEST messages and returns stub PIPELINE_RESPONSE objects.
 */

export class GrindlineAdapter {
  
  constructor(config = {}) {
    this.moduleName = "grindline";
    this.version = "radiant-protocol-v0.1";
    this.config = config;
  }

  /**
   * Build a valid PIPELINE_REQUEST message
   */
  buildPipelineRequest({ pipeline, input, config = {}, metadata = {} }) {
    return {
      id: this.#generateId(),
      version: this.version,
      type: "PIPELINE_REQUEST",
      timestamp: new Date().toISOString(),
      payload: {
        pipeline_id: this.#generateId(),
        pipeline,
        input,
        config,
        metadata
      },
      meta: {
        source: "radiant",
        target: this.moduleName
      }
    };
  }

  /**
   * Validate a PIPELINE_RESPONSE (stub validator)
   */
  validatePipelineResponse(message) {
    if (!message || message.type !== "PIPELINE_RESPONSE") {
      throw new Error("Invalid Grindline response: wrong message type");
    }

    if (!message.payload || !message.payload.status) {
      throw new Error("Invalid Grindline response payload");
    }

    return true;
  }

  /**
   * Simulated call to Grindline (temporary stub)
   * In real integration, this will delegate to Grindline's runtime.
   */
  async executePipeline(requestMessage) {
    console.log("GrindlineAdapter: (stub) executing pipeline request...");

    // This stub returns a single output that says "processed".
    const fakeOutput = `Processed by Grindline (pipeline: ${requestMessage.payload.pipeline})`;

    return {
      id: this.#generateId(),
      version: this.version,
      type: "PIPELINE_RESPONSE",
      timestamp: new Date().toISOString(),
      payload: {
        pipeline_id: requestMessage.payload.pipeline_id,
        status: "ok",
        outputs: [
          {
            id: this.#generateId(),
            content: fakeOutput,
            format: "text"
          }
        ],
        metadata: {
          count: 1,
          pipeline: requestMessage.payload.pipeline
        }
      },
      meta: {
        source: this.moduleName,
        target: "radiant"
      }
    };
  }

  /**
   * Private helper to generate IDs
   */
  #generateId() {
    return "id-" + Math.random().toString(36).substring(2, 12);
  }
}

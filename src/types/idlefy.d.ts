// src/types/idlefy.d.ts
declare module "idlefy" {
  export interface IdleQueueOptions {
    ensureTasksRun?: boolean;
    timeout?: number;
  }

  export type Task = (state: "idle" | "running" | "completed") => void;

  export class IdleQueue {
    constructor(options?: IdleQueueOptions);
    pushTask(task: Task, options?: IdleQueueOptions): void;
  }
}

export {};

declare module "idlefy" {
  interface IdleQueueOptions {
    ensureTasksRun?: boolean;
    timeout?: number;
  }

  type Task = (state: "idle" | "running" | "completed") => void;

  class IdleQueue {
    constructor(options?: IdleQueueOptions);
    pushTask(task: Task, options?: IdleQueueOptions): void;
  }
}

import { IdleQueue, IdleQueueOptions } from "idlefy";

/**
 * Delays a task execution using setTimeout and requestAnimationFrame
 * @returns Promise that resolves when the task should be executed
 */
export function delayTask(): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 100);
    requestAnimationFrame(() => {
      setTimeout(resolve, 0);
    });
  });
}

/**
 * Delays a task until the browser is no longer busy
 * @param options - Configuration options for the IdleQueue
 * @returns Promise that resolves when the task should be executed
 */
export function delayTaskUntilUrgent(
  options?: IdleQueueOptions,
): Promise<void> {
  const queue = new IdleQueue({ ensureTasksRun: true, ...options });

  return new Promise<void>((resolve) => {
    queue.pushTask(resolve, options);
  });
}

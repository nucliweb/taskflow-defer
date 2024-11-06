import { describe, it, expect, vi } from "vitest";
import { delayTask, delayTaskUntilUrgent } from "../src";

describe("delayTask", () => {
  it("should execute function", async () => {
    const callback = vi.fn();

    // Mock timeouts and RAF for faster tests
    vi.useFakeTimers();

    const promise = delayTask().then(callback);

    // Avanzar los timers de manera controlada
    vi.advanceTimersByTime(100);
    await vi.runAllTimersAsync();

    await promise;

    expect(callback).toHaveBeenCalled();

    // Restaurar timers reales
    vi.useRealTimers();
  });
});

describe("delayTaskUntilUrgent", () => {
  it("should execute function", async () => {
    const callback = vi.fn();

    vi.useFakeTimers();

    const promise = delayTaskUntilUrgent().then(callback);

    await vi.runAllTimersAsync();

    await promise;

    expect(callback).toHaveBeenCalled();

    vi.useRealTimers();
  });
});

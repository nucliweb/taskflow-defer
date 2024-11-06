/**
 * Simulates a heavy computation task
 * This is used to demonstrate the performance impact
 */
export function compute(): void {
  const end = Date.now() + 500; // Simulate 500ms of heavy computation
  while (Date.now() < end) {
    // Blocking operation
  }
}

# Taskflow Defer

A lightweight library for managing task execution timing in the browser

## Demo

Check out the live demo: [https://taskflow-defer-demo.vercel.app](https://taskflow-defer-demo.vercel.app)

## Installation

```bash
npm install taskflow-defer
# or
pnpm add taskflow-defer
# or
yarn add taskflow-defer
```

## Usage

```typescript
import { delayTask, delayTaskUntilUrgent } from "taskflow-defer";

// Delay a task
await delayTask();
heavyComputation();

// Or delay until browser is idle
await delayTaskUntilUrgent();
heavyComputation();
```

## Local Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Run demo
pnpm demo
```

## License

MIT

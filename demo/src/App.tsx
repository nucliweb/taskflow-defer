import { useState } from "react";
import { Chrome } from "lucide-react";
import { delayTask, delayTaskUntilUrgent } from "taskflow-defer";
import { compute } from "./utils";
import type { OptimizationType } from "./types";

export default function App() {
  const [count, setCount] = useState(0);
  const [optimization, setOptimization] =
    useState<OptimizationType>("nonOptimized");

  const handleCount = async () => {
    setCount((prev) => prev + 1);

    optimization === "delayTask" && (await delayTask());
    optimization === "delayTaskUntilUrgent" && (await delayTaskUntilUrgent());

    compute();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Task Flow Defer Demo
          </h1>

          <div className="mt-10 p-6 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 text-gray-600 mb-4">
              <Chrome size={30} strokeWidth={1.5} className="flex-shrink-0" />
              <p className="text-sm">
                Open the DevTools, record a{" "}
                <a
                  href="https://developer.chrome.com/docs/devtools/performance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Performance profile
                </a>{" "}
                with CPU 6x slowdown and click the button below.
              </p>
            </div>

            <button
              onClick={handleCount}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Count is {count}
            </button>

            <p className="mt-6 mb-4 text-gray-700">
              Select a method to test different optimization approaches:
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="nonOptimized"
                  name="optimization"
                  value="nonOptimized"
                  checked={optimization === "nonOptimized"}
                  onChange={(e) =>
                    setOptimization(e.target.value as OptimizationType)
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label
                  htmlFor="nonOptimized"
                  className="ml-3 text-sm text-gray-700"
                >
                  Non-optimized version (blocking computation)
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="delayTask"
                  name="optimization"
                  value="delayTask"
                  checked={optimization === "delayTask"}
                  onChange={(e) =>
                    setOptimization(e.target.value as OptimizationType)
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label
                  htmlFor="delayTask"
                  className="ml-3 text-sm text-gray-700"
                >
                  Use delayTask (delayed computation)
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="delayTaskUntilUrgent"
                  name="optimization"
                  value="delayTaskUntilUrgent"
                  checked={optimization === "delayTaskUntilUrgent"}
                  onChange={(e) =>
                    setOptimization(e.target.value as OptimizationType)
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label
                  htmlFor="delayTaskUntilUrgent"
                  className="ml-3 text-sm text-gray-700"
                >
                  Use delayTaskUntilUrgent (idle-time computation)
                </label>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-700">
                👉 Try clicking the button multiple times with each option and
                observe the difference in responsiveness:
              </p>
              <ul className="mt-2 text-sm text-blue-600 list-disc list-inside">
                <li>Non-optimized: UI will freeze during computation</li>
                <li>
                  delayTask: Computation is delayed slightly to allow UI updates
                </li>
                <li>
                  delayTaskUntilUrgent: Computation runs during browser idle
                  time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

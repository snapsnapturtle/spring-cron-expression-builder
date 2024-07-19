import { useState } from "react";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="mt-4 font-mono text-xl">Vite + React</h1>
      <div className="card">
        <button
          className="rounded bg-amber-500 px-4 py-2 font-bold text-white hover:bg-amber-700"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

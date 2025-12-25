import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-slate-950 text-slate-100">
      
      {/* background grid */}
      <div className="absolute inset-0 w-full h-full 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:40px_40px]" 
      />

      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] 
        -translate-x-1/2 -translate-y-1/2 rounded-full 
        bg-indigo-600/20 blur-3xl" 
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-[9rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 select-none">
          404
        </h1>

        <p className="mt-2 text-xl font-medium">
          You are off the map
        </p>

        <p className="mt-3 max-w-md text-slate-400">
          The page you are looking for does not exist or was moved somewhere else.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10 text-xs text-slate-500">
          Error Code: LOST_IN_SPACE
        </div>
      </div>
    </div>
  );
}

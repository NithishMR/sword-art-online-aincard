"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PlayerNamePrompt({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (input.trim() !== "") {
      const trimmedName = input.trim();
      setUsername(trimmedName);
      setSubmitted(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        router.push("/main-menu");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black text-cyan-300 font-orbitron relative overflow-hidden font-mono px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.1)_0%,transparent_80%)] pointer-events-none"></div>

      <div className="z-10 text-center animate-fade-in-up p-4 sm:p-6 space-y-6 w-full max-w-md">
        {!submitted ? (
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase drop-shadow-[0_0_6px_#0ff]">
              Initialize Link Start
            </h1>
            <p className="text-base sm:text-lg text-cyan-400 font-light">
              Please enter your player name to log in:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g., Kirito"
                className="px-4 py-2 bg-black border border-cyan-400 text-cyan-200 rounded outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-64 text-center font-mono tracking-wide"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-2 border-2 border-cyan-400 hover:bg-cyan-500 hover:text-black transition rounded uppercase font-semibold text-cyan-300 tracking-wider w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold drop-shadow-[0_0_6px_#0ff]">
              Welcome, {username}
            </h2>
            <p className="mt-2 text-cyan-400 italic">
              Synchronizing NerveGear with Aincrad systems...
            </p>
          </>
        )}
      </div>
    </div>
  );
}

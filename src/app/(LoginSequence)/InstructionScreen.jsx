"use client";

import { useEffect, useState } from "react";

export default function InstructionsScreen({ onProceed }) {
  const fullText = `You are about to enter the world of Aincrad, a virtual MMORPG adventure inspired by Sword Art Online.

• Use your mouse to click menus and navigate.
• You can also use your keyboard to type commands or names.
• Progress is currently static (MVP), but more interaction is coming soon.

Make sure you're ready — this is a one-way trip (just kidding... or is it)`;

  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center px-4 sm:px-6 font-mono">
      <div className="w-full max-w-3xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-300 drop-shadow-[0_0_6px_#0ff]">
          Welcome to Sword Art Online
        </h1>

        {/* Typewritten text block */}
        <div className="text-gray-300 whitespace-pre-wrap text-left text-sm sm:text-base px-1 sm:px-4">
          {typed}
        </div>

        {/* Show button only after typing is fully done */}
        {done && (
          <div className="mt-6">
            <button
              onClick={onProceed}
              className="px-6 py-2 text-cyan-300 border-gray-50 drop-shadow-[0_0_6px_#0ff] hover:cursor-pointer"
            >
              Understood
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

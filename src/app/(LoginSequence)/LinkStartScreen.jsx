"use client";

import { useEffect, useState } from "react";

export default function LinkStartScreen({ onFinish }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowText(true), 1000); // Delay "LINK START"
    const timeout2 = setTimeout(() => {
      setShowText(false);
      onFinish(); // Proceed to auto login
    }, 4000); // Total duration

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onFinish]);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center font-mono">
      {showText && (
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-pulse tracking-widest">
          LINK START
        </h1>
      )}
    </div>
  );
}

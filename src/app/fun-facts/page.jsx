"use client";

import { useEffect, useState, useRef } from "react";
import FunFacts from "../(data)/FunFacts";
import CharacterPopup from "../Shared/FloatingCharacter/CharacterPopUp";

export default function FunFactsPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const factRefs = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setSelectedIndex((prev) => Math.min(prev + 1, FunFacts.length - 1));
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    factRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [selectedIndex]);

  return (
    <>
      <CharacterPopup />
      <div className="min-h-screen bg-black text-white px-6 py-10 font-mono">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-indigo-400">
          Aincrad Floor Fun Facts
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-400 mb-6">
          Use <span className="bg-gray-700 px-2 py-1 rounded mx-1">↑</span> and{" "}
          <span className="bg-gray-700 px-2 py-1 rounded mx-1">↓</span> keys to
          navigate floors
        </p>

        <div className="space-y-8 sm:space-y-10 max-w-3xl mx-auto">
          {FunFacts.map((floor, index) => (
            <div
              key={floor.floorNumber}
              ref={(el) => (factRefs.current[index] = el)}
              className={`p-6 border rounded-2xl transition-all duration-300 ${
                index === selectedIndex
                  ? "border-indigo-400 bg-gray-900 shadow-lg"
                  : "border-gray-700"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-2">
                Floor {floor.floorNumber}: {floor.floorName}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
                {floor.funFacts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

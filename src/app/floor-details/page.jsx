"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import floorDetails from "../(data)/FloorDetails";
import CharacterPopup from "../Shared/FloatingCharacter/CharacterPopUp";

const FloorDetailsHome = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef([]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? floorDetails.length - 1 : prev - 1
      );
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === floorDetails.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === "Enter") {
      const selectedFloor = floorDetails[selectedIndex];
      const href = `/floor-details/${selectedFloor.floor
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
      window.location.href = href;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    const el = itemRefs.current[selectedIndex];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedIndex]);

  // return (
  //   <div className="min-h-screen bg-black text-white px-6 py-10 font-mono">
  //     <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-indigo-400">
  //       Floors in Aincrad
  //     </h1>
  //     <p className="text-center text-sm text-gray-400 mb-6">
  //       Use <span className="bg-gray-700 px-2 py-1 rounded mx-1">↑</span> and{" "}
  //       <span className="bg-gray-700 px-2 py-1 rounded mx-1">↓</span> keys to
  //       navigate
  //     </p>

  //     <ul className="space-y-6 max-w-2xl mx-auto">
  //       {floorDetails.map((floor, index) => {
  //         const href = `/floor-details/${floor.floor
  //           .toLowerCase()
  //           .replace(/\s+/g, "-")}`;
  //         return (
  //           <li
  //             key={floor.floor}
  //             ref={(el) => (itemRefs.current[index] = el)}
  //             className={`p-6 border rounded-2xl cursor-pointer transition-all duration-300 ${
  //               selectedIndex === index
  //                 ? "border-indigo-400 bg-gray-900 shadow-lg scale-[1.03]"
  //                 : "border-gray-700 hover:bg-gray-800"
  //             }`}
  //             onMouseEnter={() => setSelectedIndex(index)}
  //             onClick={() => (window.location.href = href)}
  //           >
  //             <Link
  //               href={href}
  //               className="block text-xl sm:text-2xl font-semibold text-indigo-300"
  //             >
  //               {floor.floor} – {floor.theme}
  //             </Link>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
  return (
    <>
      <CharacterPopup />
      <div className="min-h-screen bg-black text-white px-6 py-10 font-mono">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-cyan-400 drop-shadow-[0_0_6px_#0ff]">
          Floors in Aincrad
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          Use <span className="bg-gray-700 px-2 py-1 rounded mx-1">↑</span> and{" "}
          <span className="bg-gray-700 px-2 py-1 rounded mx-1">↓</span> keys to
          navigate
        </p>

        <ul className="space-y-6 max-w-2xl mx-auto">
          {floorDetails.map((floor, index) => {
            const href = `/floor-details/${floor.floor
              .toLowerCase()
              .replace(/\s+/g, "-")}`;
            return (
              <li
                key={floor.floor}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`p-6 border rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedIndex === index
                    ? "border-cyan-400 bg-gray-900 shadow-lg scale-[1.03]"
                    : "border-gray-700 hover:bg-gray-800 hover:scale-105"
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => (window.location.href = href)}
              >
                <Link
                  href={href}
                  className="block text-xl sm:text-2xl font-semibold text-cyan-300 hover:text-indigo-400 transition-all duration-200"
                >
                  {floor.floor} – {floor.theme}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FloorDetailsHome;

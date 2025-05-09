"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CharacterPopup from "../Shared/FloatingCharacter/CharacterPopUp";

const menuOptions = [
  "Floor Details",
  "Ratings",
  "Must Visit Spots",
  "Fun Facts",
  "Aincard Model",
];

export default function GameMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) =>
        prev === 0 ? menuOptions.length - 1 : prev - 1
      );
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev === menuOptions.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === "Enter") {
      handleSelect(menuOptions[selectedIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleSelect = (option) => {
    switch (option) {
      case "Floor Details":
        router.push("/floor-details");
        break;
      case "Ratings":
        router.push("/ratings");
        break;
      case "Must Visit Spots":
        router.push("/must-visit");
        break;
      case "Fun Facts":
        router.push("/fun-facts");
        break;
      case "Aincard Model":
        router.push("/aincard-model");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="">
        <CharacterPopup />
        <div className="w-screen h-screen bg-black  flex items-center justify-center font-mono border-cyan-400  shadow-lg  text-cyan-300 ">
          <ul className="space-y-6 text-3xl">
            {menuOptions.map((option, index) => (
              <li
                key={option}
                className={`cursor-pointer px-24 py-3 border border-white rounded-xl ${
                  index === selectedIndex
                    ? "bg-white text-indigo-400 transition-all duration-200"
                    : "opacity-70"
                } transition duration-200`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

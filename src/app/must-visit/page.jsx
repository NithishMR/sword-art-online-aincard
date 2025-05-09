"use client";

import { useEffect, useState, useRef } from "react";
import CharacterPopup from "../Shared/FloatingCharacter/CharacterPopUp";

// Data for Must Visit Places
const MustVisit = [
  {
    floorNumber: 1,
    floorName: "The Beginning City",
    spots: [
      {
        name: "Starting City",
        description:
          "The first safe zone where players spawn and regroup after being trapped in SAO.",
        image: "/images/image1.webp",
      },
      {
        name: "Boss Room",
        description:
          "Where the first boss, Illfang the Kobold Lord, awaits the players. The first major challenge.",
        image: "/images/boss-room.webp",
      },
    ],
  },
  {
    floorNumber: 22,
    floorName: "Forest Cabin Floor",
    spots: [
      {
        name: "Asuna & Kirito's Cabin",
        description:
          "A log cabin where Kirito and Asuna took a break from fighting and built their home together.",
        image: "/images/cabin.webp",
      },
      {
        name: "Yui's Forest",
        description:
          "The forest where Kirito and Asuna discovered Yui, a unique AI who became their daughter.",
        image: "/images/first-forest.webp",
      },
    ],
  },
  {
    floorNumber: 35,
    floorName: "City of the Moon",
    spots: [
      {
        name: "Moonlit Plaza",
        description:
          "A romantic, peaceful plaza known for its glowing moonlight. Kirito and Asuna had a quiet moment here.",
        image: "/images/moonlit-plaza.jpg",
      },
      {
        name: "Moonlit Tower",
        description:
          "A towering spire said to reflect the moon’s light. A stunning view of the entire city can be seen from here.",
        image: "/FloorTwo/image1.webp",
      },
    ],
  },
  {
    floorNumber: 74,
    floorName: "Grand Colosseum",
    spots: [
      {
        name: "PvP Arena",
        description:
          "A massive arena where players can challenge each other in PvP battles. Kirito faced off against Heathcliff here.",
        image: "/images/pvp-arena.webp",
      },
      {
        name: "Champion's Throne",
        description:
          "The place where the strongest fighters in SAO would sit, earning glory and admiration.",
        image: "/images/champions-throne.webp",
      },
    ],
  },
];

export default function MustVisitPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const spotRefs = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setSelectedIndex((prev) => Math.min(prev + 1, MustVisit.length - 1));
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    spotRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [selectedIndex]);

  return (
    <>
      <CharacterPopup />
      <div className="min-h-screen bg-black text-white px-6 py-10 font-mono">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-indigo-400">
          Aincrad Must Visit Places
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          Use <span className="bg-gray-700 px-2 py-1 rounded mx-1">↑</span> and{" "}
          <span className="bg-gray-700 px-2 py-1 rounded mx-1">↓</span> keys to
          navigate floors
        </p>

        <div className="space-y-10 max-w-2xl mx-auto">
          {MustVisit.map((floor, index) => (
            <div
              key={floor.floorNumber}
              ref={(el) => (spotRefs.current[index] = el)}
              className={`p-6 border rounded-2xl transition-all duration-300 ${
                index === selectedIndex
                  ? "border-indigo-400 bg-gray-900 shadow-lg"
                  : "border-gray-700"
              }`}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-300 mb-2">
                Floor {floor.floorNumber}: {floor.floorName}
              </h2>
              <div className="space-y-6">
                {floor.spots.map((spot, i) => (
                  <div key={i} className="flex flex-col space-y-2">
                    <h3 className="text-lg text-indigo-300">{spot.name}</h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {spot.description}
                    </p>
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

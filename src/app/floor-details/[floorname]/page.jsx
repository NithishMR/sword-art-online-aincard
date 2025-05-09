"use client";

import { use } from "react";
import floorData from "@/app/(data)/FloorDetails";

export default function FloorDetailsPage({ params }) {
  const { floorname } = use(params); // unwrap the async params object
  const formattedName = floorname.replace(/-/g, " ").toLowerCase();
  const floor = floorData.find((f) => f.floor.toLowerCase() === formattedName);

  if (!floor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-400 font-mono text-xl">
        Floor not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 font-mono">
      <h1 className="text-4xl font-bold mb-2 text-center text-indigo-400">
        {floor.floor} – <span className="text-white">{floor.theme}</span>
      </h1>
      <p className="text-center text-gray-400 text-lg mb-10 max-w-3xl mx-auto">
        {floor.about}
      </p>

      {[
        { title: "Settlements", data: floor.settlements },
        { title: "Quests", data: floor.quests },
        { title: "Bosses", data: floor.bosses },
        { title: "Monsters", data: floor.monsters },
      ].map(({ title, data }) =>
        data.length > 0 ? (
          <div key={title} className="mb-10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-1 text-indigo-300">
              {title}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null
      )}

      {floor.gallery && Object.keys(floor.gallery).length > 0 && (
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-300 border-b border-gray-700 pb-1">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(floor.gallery).map(([label, src], index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-700 shadow-md hover:shadow-lg transition"
              >
                <img
                  src={src}
                  alt={label}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-800 text-center py-2 text-sm text-indigo-300 font-semibold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function Ratings() {
//   const [ratings, setRatings] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const itemRefs = useRef([]);

//   useEffect(() => {
//     fetch("/ratings.json")
//       .then((res) => res.json())
//       .then((data) => setRatings(data))
//       .catch((err) => console.error("Failed to load ratings.json:", err));
//   }, []);

//   const handleKeyDown = (e) => {
//     if (!ratings) return;

//     const categories = Object.keys(ratings);
//     if (categories.length === 0) return;

//     if (e.key === "ArrowUp") {
//       e.preventDefault();
//       setSelectedIndex((prev) =>
//         prev === 0 ? categories.length - 1 : prev - 1
//       );
//     } else if (e.key === "ArrowDown") {
//       e.preventDefault();
//       setSelectedIndex((prev) =>
//         prev === categories.length - 1 ? 0 : prev + 1
//       );
//     } else if (e.key === "Enter") {
//       handleSelect(categories[selectedIndex]);
//     }
//   };

//   const handleSelect = (category) => {
//     console.log(`Navigating to category: ${category}`);
//     // router.push(`/floor/${category}`); // Optional
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [ratings, selectedIndex]);

//   // Auto-scroll selected item into view
//   useEffect(() => {
//     const selectedEl = itemRefs.current[selectedIndex];
//     if (selectedEl) {
//       selectedEl.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   }, [selectedIndex]);

//   if (!ratings) {
//     return (
//       <div className="w-full min-h-screen bg-sao-dark-blue flex justify-center items-center text-sao-light-text p-4">
//         <div className="animate-pulse text-2xl">Loading Floor Data...</div>
//       </div>
//     );
//   }

//   const categories = Object.entries(ratings);

//   return (
//     <div className="w-full min-h-screen bg-sao-dark-blue text-sao-light-text p-4 sm:p-8 flex flex-col items-center">
//       <div className="w-full max-w-4xl">
//         <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-sao-accent tracking-wider">
//           Aincrad Floor Ratings
//         </h1>
//         {categories.length === 0 ? (
//           <div className="text-center text-xl text-sao-light-text opacity-75">
//             No floor ratings available.
//           </div>
//         ) : (
//           categories.map(([category, reviews], index) => (
//             <div
//               key={category}
//               ref={(el) => (itemRefs.current[index] = el)}
//               className={`p-5 sm:p-6 mb-6 rounded-md border border-sao-border transition-all duration-300 ease-in-out group ${
//                 selectedIndex === index
//                   ? "bg-sao-selected-bg shadow-lg transform scale-105 border-sao-accent"
//                   : "bg-sao-item-bg hover:bg-sao-hover-bg"
//               }`}
//               onMouseEnter={() => setSelectedIndex(index)}
//               onClick={() => handleSelect(category)}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") handleSelect(category);
//               }}
//             >
//               <h2 className="text-2xl sm:text-3xl mb-4 font-sao-header text-sao-accent ">
//                 {category} Ratings
//               </h2>
//               <ul className="space-y-4">
//                 {reviews.map((review) => (
//                   <li
//                     key={review.id}
//                     className="border-l-4 border-sao-accent pl-4 py-2  bg-opacity-20 rounded-r-md"
//                   >
//                     <div className="font-semibold text-lg text-sao-light-text">
//                       Floor {review.floorNumber} —{" "}
//                       <span className="text-sao-gold">{review.reviewer}</span>
//                     </div>
//                     <div className="text-sm text-sao-light-text opacity-90">
//                       Rating:{" "}
//                       <span className="text-sao-gold font-bold">
//                         {review.rating}
//                       </span>
//                       /5
//                     </div>
//                     <div className="mt-1 text-sao-light-text opacity-95">
//                       <strong className="font-normal">Review:</strong>{" "}
//                       <em className="italic font-light">{review.comment}</em>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import CharacterPopup from "@/app/Shared/FloatingCharacter/CharacterPopUp";
import { useEffect, useRef, useState } from "react";

export default function Ratings() {
  const [ratings, setRatings] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    fetch("/ratings.json")
      .then((res) => res.json())
      .then((data) => setRatings(data))
      .catch((err) => console.error("Failed to load ratings.json:", err));
  }, []);

  const handleKeyDown = (e) => {
    if (!ratings) return;

    const categories = Object.keys(ratings);
    if (categories.length === 0) return;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? categories.length - 1 : prev - 1
      );
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === categories.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === "Enter") {
      handleSelect(categories[selectedIndex]);
    }
  };

  const handleSelect = (category) => {
    console.log(`Navigating to category: ${category}`);
    // router.push(`/floor/${category}`); // Optional
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [ratings, selectedIndex]);

  // Auto-scroll selected item into view
  useEffect(() => {
    const selectedEl = itemRefs.current[selectedIndex];
    if (selectedEl) {
      selectedEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedIndex]);

  if (!ratings) {
    return (
      <div className="w-full min-h-screen bg-black flex justify-center items-center text-white p-4">
        <div className="animate-pulse text-2xl">Loading Ratings...</div>
      </div>
    );
  }

  const categories = Object.entries(ratings);

  return (
    <>
      <CharacterPopup />
      <div className="w-full min-h-screen bg-black text-white p-4 sm:p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-indigo-400 tracking-wider">
            Aincrad Floor Ratings
          </h1>
          {categories.length === 0 ? (
            <div className="text-center text-xl text-gray-400 opacity-75">
              No floor ratings available.
            </div>
          ) : (
            categories.map(([category, reviews], index) => (
              <div
                key={category}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`p-6 mb-8 rounded-lg border border-gray-700 transition-all duration-300 ease-in-out group ${"bg-gray-800"}`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => handleSelect(category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    handleSelect(category);
                }}
              >
                <h2 className="text-2xl sm:text-3xl mb-4 font-semibold text-indigo-400">
                  {category} Ratings
                </h2>
                <ul className="space-y-4">
                  {reviews.map((review) => (
                    <li
                      key={review.id}
                      className="border-l-4 border-indigo-400 pl-4 py-2 bg-opacity-20 rounded-r-md"
                    >
                      <div className="font-semibold text-lg text-white">
                        Floor {review.floorNumber} —{" "}
                        <span className="text-yellow-500">
                          {review.reviewer}
                        </span>
                      </div>
                      <div className="text-sm text-white opacity-90">
                        Rating:{" "}
                        <span className="text-yellow-500 font-bold">
                          {review.rating}
                        </span>
                        /5
                      </div>
                      <div className="mt-1 text-white opacity-95">
                        <strong className="font-normal">Review:</strong>{" "}
                        <em className="italic font-light">{review.comment}</em>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

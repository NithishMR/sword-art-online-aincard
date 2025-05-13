"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const messages = {
  "/main-menu":
    "Navigator online. Select your desired path to proceed through the interface.",
  "/floor-details":
    "Initializing floor data... Explore detailed layouts and floor-specific information.",
  "/ratings":
    "Data stream active. You may rate each floor to contribute to popularity metrics.",
  "/must-visit":
    "Highlighting strategic locations. These are essential visit points within Aincrad.",
  "/fun-facts":
    "Engaging curiosity protocol. Here's a lesser-known fact about Aincrad.",
  "/aincard-model":
    "3D model rendering initiated. You are now in visual exploration mode.",
};

export default function CharacterPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [fadeBg, setFadeBg] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem(`popup:${pathname}`);
    const timer = setTimeout(() => {
      if (!hasSeen) {
        setFadeBg(true);
        setVisible(true);

        // Auto-close after 5 seconds
        setTimeout(() => {
          handleClose();
        }, 5000);
      }
    }, 2000); // Delay show by 2 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    sessionStorage.setItem(`popup:${pathname}`, "true");
    setVisible(false);
    setFadeBg(false);
  };

  const message = messages[pathname];
  if (!visible || !message) return null;

  return (
    <>
      {/* Backdrop fade effect */}
      {fadeBg && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity"></div>
      )}

      {/* Popup */}
      <div className="fixed bottom-10 left-10 flex items-start space-x-3 z-50 animate-fade-in">
        {/* Character Image */}
        <img
          src="/kirito.png"
          alt="Guide"
          width={70}
          height={70}
          className="rounded-full border-2 border-white w-16 h-16 sm:w-20 sm:h-20"
        />

        {/* Speech Bubble */}
        <div className="relative bg-black/90 text-white p-4 rounded-xl max-w-md w-full sm:max-w-xs md:max-w-lg border border-cyan-500 shadow-lg backdrop-blur-md">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-mono">
            {message}
          </p>

          {/* Triangle */}
          <div className="absolute left-0 top-6 -translate-x-full w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black/90"></div>
        </div>
      </div>
    </>
  );
}

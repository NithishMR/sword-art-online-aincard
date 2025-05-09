// src/app/page.jsx or src/pages/index.jsx (based on your Next.js setup)
"use client";

const AincardMap = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Explore Aincrad</h1>

      <div className="sketchfab-embed-wrapper w-full max-w-[800px] aspect-video">
        <iframe
          title="Aincrad"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/b8b3eb6b9be44ad2b4c2662abd912d53/embed?autospin=1&autostart=1&transparent=1"
          className="w-full h-full"
        ></iframe>
      </div>

      <p className="text-sm mt-4 text-center">
        <a
          href="https://sketchfab.com/3d-models/aincrad-b8b3eb6b9be44ad2b4c2662abd912d53"
          target="_blank"
          rel="nofollow"
          className="text-cyan-400 font-semibold"
        >
          Aincrad
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/markystal"
          target="_blank"
          rel="nofollow"
          className="text-cyan-400 font-semibold"
        >
          markystal
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com"
          target="_blank"
          rel="nofollow"
          className="text-cyan-400 font-semibold"
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default AincardMap;

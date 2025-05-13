// "use client";

// import { useEffect } from "react";

// export default function AutoLoginScreen({ onFinish }) {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       onFinish(); // Proceed to player name prompt
//     }, 2500); // Simulate auto login duration

//     return () => clearTimeout(timeout);
//   }, [onFinish]);

//   return (
//     <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white font-mono">
//       <p className="text-xl animate-pulse">Logging in...</p>
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";

export default function AutoLoginScreen({ onFinish }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish(); // Proceed to player name prompt
    }, 2500);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white font-mono px-4">
      <p className="text-lg sm:text-xl animate-pulse text-center">
        Logging in...
      </p>
    </div>
  );
}

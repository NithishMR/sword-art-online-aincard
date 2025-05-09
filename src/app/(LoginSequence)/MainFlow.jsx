"use client";

import { useState } from "react";
import LinkStartScreen from "./LinkStartScreen";
import AutoLoginScreen from "./AutoLoginScreen";
import PlayerNamePrompt from "../(PlayerNamePrompt)/PlayerNamePrompt";
import GameMenu from "../(GameMenu)/GameMenu";
import InstructionsScreen from "./InstructionScreen";

export default function MainFlow() {
  const [step, setStep] = useState(0);
  const [playerName, setPlayerName] = useState("");

  return (
    <>
      {step === 0 && <InstructionsScreen onProceed={() => setStep(1)} />}
      {step === 1 && <LinkStartScreen onFinish={() => setStep(2)} />}
      {step === 2 && <AutoLoginScreen onFinish={() => setStep(3)} />}
      {step === 3 && (
        <PlayerNamePrompt
          onSubmit={(name) => {
            setPlayerName(name);
            setTimeout(() => setStep(4), 3000);
          }}
        />
      )}
      {step === 4 && <GameMenu />}
    </>
  );
}

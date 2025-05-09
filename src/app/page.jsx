import Image from "next/image";
import PlayerNamePrompt from "./(PlayerNamePrompt)/PlayerNamePrompt";
import GameMenu from "./(GameMenu)/GameMenu";
import MainFlow from "./(LoginSequence)/MainFlow";

export default function Home() {
  return (
    <>
      <div className="">
        {/* <PlayerNamePrompt /> */}
        <MainFlow />
        {/* <GameMenu /> */}
      </div>
    </>
  );
}

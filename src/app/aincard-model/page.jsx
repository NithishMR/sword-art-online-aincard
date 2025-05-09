"use client";
import AincardMap from "../(Components)/AincardMap";
import CharacterPopup from "../Shared/FloatingCharacter/CharacterPopUp";
export default function HomePage() {
  return (
    <>
      <div className="">
        <CharacterPopup />
        <AincardMap />
      </div>
    </>
  );
}

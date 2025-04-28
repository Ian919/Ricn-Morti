"use client";
import { useState, useEffect } from "react";

export default function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const [character, setCharacter] = useState<any>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const resolvedParams = await params;
      const characterId = resolvedParams.id;
      const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
      const data = await res.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [params]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <img src={character.image} alt={character.name} className="w-48 h-48 rounded-full" />
      <h1 className="text-2xl font-bold mt-4">{character.name}</h1>
    </div>
  );
}
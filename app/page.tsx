import { CharacterCard } from "@/components/CharacterCard";
import { Character } from "@/types/types";

export default async function Home() {
  const data = await fetch('https://rickandmortyapi.com/api/character', { next: { revalidate: 60 } })
  const characters = await data.json()

  return (
    <>
      <ul>
        {characters.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
      
    </>
  )
}
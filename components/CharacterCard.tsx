import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Card, CardTitle } from "./ui/card"
import { Character } from "@/types/types"

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <>
      <Link href={`character/${character.id}`}>
        <Card>
          <CardTitle>{character.name}</CardTitle>
          <Avatar>
            <AvatarImage src={character.image} />
          </Avatar>
        </Card>
      </Link>
    </>
  )
}
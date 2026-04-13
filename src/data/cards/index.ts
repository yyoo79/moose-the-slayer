import type { Card, CharacterId } from '../../types'
import { ironcladCards } from './ironclad'
import { silentCards } from './silent'
import { regentCards } from './regent'
import { necrobinderCards } from './necrobinder'
import { defectCards } from './defect'
import { colorlessCards } from './colorless'

export const allCards: Card[] = [
  ...ironcladCards,
  ...silentCards,
  ...regentCards,
  ...necrobinderCards,
  ...defectCards,
  ...colorlessCards,
]

export function getCardsForCharacter(character: CharacterId): Card[] {
  return allCards.filter(
    (card) => card.character === character || card.character === 'colorless'
  )
}

export function searchCards(query: string, character: CharacterId | null): Card[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  const pool = character ? getCardsForCharacter(character) : allCards
  return pool.filter(
    (card) =>
      card.name.toLowerCase().includes(q) ||
      card.description.toLowerCase().includes(q) ||
      card.keywords?.some((k) => k.toLowerCase().includes(q))
  )
}

export {
  ironcladCards,
  silentCards,
  regentCards,
  necrobinderCards,
  defectCards,
  colorlessCards,
}

import type { CardType, CardRarity } from '../types'

interface TypeBadgeProps {
  type: CardType
}

interface RarityBadgeProps {
  rarity: CardRarity
}

interface CostBadgeProps {
  cost: number | 'X' | '-'
}

const typeColors: Record<CardType, string> = {
  Attack: 'bg-red-900/80 text-red-200',
  Skill: 'bg-blue-900/80 text-blue-200',
  Power: 'bg-purple-900/80 text-purple-200',
  Status: 'bg-gray-700/80 text-gray-300',
  Curse: 'bg-slate-800/80 text-slate-300',
}

const rarityColors: Record<CardRarity, string> = {
  Basic: 'bg-gray-600/60 text-gray-300',
  Common: 'bg-gray-500/60 text-gray-200',
  Uncommon: 'bg-blue-700/60 text-blue-200',
  Rare: 'bg-amber-600/60 text-amber-200',
  Ancient: 'bg-rose-800/60 text-rose-200',
}

export function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <span className={`card-badge ${typeColors[type]}`}>{type}</span>
  )
}

export function RarityBadge({ rarity }: RarityBadgeProps) {
  return (
    <span className={`card-badge ${rarityColors[rarity]}`}>{rarity}</span>
  )
}

export function CostBadge({ cost }: CostBadgeProps) {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-800 text-amber-100 text-xs font-bold">
      {cost}
    </span>
  )
}

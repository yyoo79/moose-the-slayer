import { useState } from 'react'
import type { Card } from '../types'
import { TypeBadge, RarityBadge, CostBadge } from './CardBadge'

interface Props {
  cards: Card[]
  onRemove: (cardId: string) => void
}

export function CardList({ cards, onRemove }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null)

  // Group cards by id for display (show count)
  const grouped = cards.reduce<Map<string, { card: Card; count: number }>>(
    (acc, card) => {
      const existing = acc.get(card.id)
      if (existing) {
        existing.count++
      } else {
        acc.set(card.id, { card, count: 1 })
      }
      return acc
    },
    new Map()
  )

  if (cards.length === 0) {
    return (
      <div className="text-center py-8 text-amber-700 text-sm italic">
        No cards added yet. Search above to add cards.
      </div>
    )
  }

  const sortedCards = [...grouped.values()].sort((a, b) => {
    // Sort by type then name
    if (a.card.type !== b.card.type) {
      const order = ['Power', 'Skill', 'Attack', 'Status', 'Curse']
      return order.indexOf(a.card.type) - order.indexOf(b.card.type)
    }
    return a.card.name.localeCompare(b.card.name)
  })

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-amber-500">{cards.length} card{cards.length !== 1 ? 's' : ''}</span>
      </div>
      {sortedCards.map(({ card, count }) => (
        <div
          key={card.id}
          className={`rounded-lg border transition-all duration-150 cursor-pointer
            ${expanded === card.id
              ? 'border-amber-700/70 bg-amber-900/20'
              : 'border-amber-900/30 bg-[#1e140a] hover:border-amber-800/60 hover:bg-amber-900/10'
            }`}
          onClick={() => setExpanded(expanded === card.id ? null : card.id)}
        >
          <div className="flex items-center gap-2 px-3 py-2">
            <CostBadge cost={card.cost} />
            <div className="flex-1 min-w-0 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-amber-100 font-medium">{card.name}</span>
              {count > 1 && (
                <span className="text-xs bg-amber-800/60 text-amber-300 px-1.5 py-0.5 rounded">×{count}</span>
              )}
              <TypeBadge type={card.type} />
              <RarityBadge rarity={card.rarity} />
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onRemove(card.id) }}
              className="text-red-700 hover:text-red-400 text-sm px-2 py-0.5 rounded hover:bg-red-900/20 transition-colors"
              title="Remove card"
            >
              ✕
            </button>
          </div>
          {expanded === card.id && (
            <div className="px-3 pb-3 pt-0">
              <p className="text-xs text-amber-300/80 leading-relaxed">{card.description}</p>
              {card.keywords && card.keywords.length > 0 && (
                <div className="flex gap-1 flex-wrap mt-2">
                  {card.keywords.map((kw) => (
                    <span key={kw} className="text-xs bg-amber-900/30 text-amber-400 px-1.5 py-0.5 rounded capitalize">
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

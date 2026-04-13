import { useState, useRef, useEffect } from 'react'
import type { Card, CharacterId } from '../types'
import { searchCards } from '../data/cards'
import { TypeBadge, RarityBadge, CostBadge } from './CardBadge'

interface Props {
  character: CharacterId
  onAdd: (card: Card) => void
}

export function CardSearch({ character, onAdd }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Card[]>([])
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (query.length < 1) {
      setResults([])
      setOpen(false)
      return
    }
    const found = searchCards(query, character).slice(0, 10)
    setResults(found)
    setOpen(found.length > 0)
    setHighlighted(0)
  }, [query, character])

  function handleSelect(card: Card) {
    onAdd(card)
    setQuery('')
    setResults([])
    setOpen(false)
    inputRef.current?.focus()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted((h) => Math.min(h + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted((h) => Math.max(h - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[highlighted]) handleSelect(results[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
      setQuery('')
    }
  }

  // Scroll highlighted item into view
  useEffect(() => {
    if (!listRef.current) return
    const item = listRef.current.children[highlighted] as HTMLElement
    item?.scrollIntoView({ block: 'nearest' })
  }, [highlighted])

  return (
    <div className="relative">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => results.length > 0 && setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            placeholder="Search cards by name or keyword..."
            className="w-full bg-[#2a1e0f] border border-amber-900/50 rounded-lg px-4 py-2.5 text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/50 text-sm"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setOpen(false) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600 hover:text-amber-400"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {open && (
        <ul
          ref={listRef}
          className="absolute z-50 left-0 right-0 mt-1 bg-[#1a1208] border border-amber-900/60 rounded-xl shadow-2xl max-h-80 overflow-y-auto"
        >
          {results.map((card, i) => (
            <li key={`${card.id}-${i}`}>
              <button
                onMouseDown={() => handleSelect(card)}
                onMouseEnter={() => setHighlighted(i)}
                className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors
                  ${i === highlighted ? 'bg-amber-900/30' : 'hover:bg-amber-900/20'}
                  ${i < results.length - 1 ? 'border-b border-amber-900/30' : ''}
                `}
              >
                <CostBadge cost={card.cost} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-amber-100 text-sm">{card.name}</span>
                    <TypeBadge type={card.type} />
                    <RarityBadge rarity={card.rarity} />
                    {card.character === 'colorless' && (
                      <span className="card-badge bg-amber-900/40 text-amber-300 text-xs">Colorless</span>
                    )}
                  </div>
                  <p className="text-xs text-amber-300/60 mt-0.5 line-clamp-2">{card.description}</p>
                </div>
                <span className="text-amber-600 text-sm shrink-0 mt-0.5">+</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

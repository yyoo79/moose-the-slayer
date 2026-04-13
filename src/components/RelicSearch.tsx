import { useState, useRef, useEffect } from 'react'
import type { Relic, CharacterId } from '../types'
import { searchRelics } from '../data/relics'

interface Props {
  character: CharacterId
  onAdd: (relic: Relic) => void
  ownedRelicIds: string[]
}

const rarityColors: Record<string, string> = {
  Starter: 'bg-gray-600/50 text-gray-300',
  Common: 'bg-gray-500/50 text-gray-200',
  Uncommon: 'bg-blue-700/50 text-blue-200',
  Rare: 'bg-amber-600/50 text-amber-200',
  Shop: 'bg-green-700/50 text-green-200',
  Ancient: 'bg-red-800/50 text-red-200',
  Event: 'bg-purple-700/50 text-purple-200',
}

export function RelicSearch({ character, onAdd, ownedRelicIds }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Relic[]>([])
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.length < 1) {
      setResults([])
      setOpen(false)
      return
    }
    const found = searchRelics(query, character)
      .filter((r) => !ownedRelicIds.includes(r.id))
      .slice(0, 8)
    setResults(found)
    setOpen(found.length > 0)
    setHighlighted(0)
  }, [query, character, ownedRelicIds])

  function handleSelect(relic: Relic) {
    onAdd(relic)
    setQuery('')
    setResults([])
    setOpen(false)
    inputRef.current?.focus()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted((h) => Math.min(h + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlighted((h) => Math.max(h - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); if (results[highlighted]) handleSelect(results[highlighted]) }
    else if (e.key === 'Escape') { setOpen(false); setQuery('') }
  }

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Search relics by name or effect..."
          className="w-full bg-[#2a1e0f] border border-amber-900/50 rounded-lg px-4 py-2.5 text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/50 text-sm"
        />
        {query && (
          <button onClick={() => { setQuery(''); setOpen(false) }} className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600 hover:text-amber-400">✕</button>
        )}
      </div>

      {open && (
        <ul className="absolute z-50 left-0 right-0 mt-1 bg-[#1a1208] border border-amber-900/60 rounded-xl shadow-2xl max-h-72 overflow-y-auto">
          {results.map((relic, i) => (
            <li key={relic.id}>
              <button
                onMouseDown={() => handleSelect(relic)}
                onMouseEnter={() => setHighlighted(i)}
                className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors
                  ${i === highlighted ? 'bg-amber-900/30' : 'hover:bg-amber-900/20'}
                  ${i < results.length - 1 ? 'border-b border-amber-900/30' : ''}
                `}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-amber-100 text-sm">{relic.name}</span>
                    <span className={`card-badge text-xs ${rarityColors[relic.rarity] ?? 'bg-gray-700/50 text-gray-300'}`}>
                      {relic.rarity}
                    </span>
                    {relic.character !== 'shared' && (
                      <span className="card-badge bg-amber-900/40 text-amber-400 text-xs capitalize">{relic.character}</span>
                    )}
                  </div>
                  <p className="text-xs text-amber-300/60 mt-0.5">{relic.description}</p>
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

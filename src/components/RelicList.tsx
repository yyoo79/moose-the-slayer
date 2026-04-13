import type { Relic } from '../types'

interface Props {
  relics: Relic[]
  onRemove: (relicId: string) => void
}

const rarityColors: Record<string, string> = {
  Starter: 'bg-gray-600/40 border-gray-600/40',
  Common: 'bg-gray-500/20 border-gray-600/30',
  Uncommon: 'bg-blue-900/20 border-blue-800/40',
  Rare: 'bg-amber-900/20 border-amber-700/40',
  Shop: 'bg-green-900/20 border-green-800/40',
  Ancient: 'bg-red-900/20 border-red-800/40',
  Event: 'bg-purple-900/20 border-purple-800/40',
}

export function RelicList({ relics, onRemove }: Props) {
  if (relics.length === 0) {
    return (
      <div className="text-center py-6 text-amber-700 text-sm italic">
        No relics added yet. Search above to add relics.
      </div>
    )
  }

  return (
    <div className="space-y-1.5">
      <span className="text-xs text-amber-500">{relics.length} relic{relics.length !== 1 ? 's' : ''}</span>
      {relics.map((relic) => (
        <div
          key={relic.id}
          className={`rounded-lg border px-3 py-2.5 flex items-start gap-3 ${rarityColors[relic.rarity] ?? 'bg-gray-900/20 border-gray-700/30'}`}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-amber-100 font-medium">{relic.name}</span>
              <span className="text-xs text-amber-500">{relic.rarity}</span>
            </div>
            <p className="text-xs text-amber-300/60 mt-0.5 leading-relaxed">{relic.description}</p>
          </div>
          <button
            onClick={() => onRemove(relic.id)}
            className="text-red-700 hover:text-red-400 text-sm px-2 py-0.5 rounded hover:bg-red-900/20 transition-colors shrink-0"
            title="Remove relic"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

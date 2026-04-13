import type { CharacterId } from '../types'
import { characters } from '../data/characters'

interface Props {
  selected: CharacterId | null
  onSelect: (id: CharacterId) => void
}

const characterColors: Record<CharacterId, string> = {
  ironclad: 'from-red-950 to-red-900 border-red-700 hover:border-red-500',
  silent: 'from-green-950 to-green-900 border-green-800 hover:border-green-600',
  regent: 'from-purple-950 to-purple-900 border-purple-700 hover:border-purple-500',
  necrobinder: 'from-blue-950 to-slate-900 border-blue-800 hover:border-blue-600',
  defect: 'from-cyan-950 to-slate-900 border-cyan-800 hover:border-cyan-600',
}

const selectedRing: Record<CharacterId, string> = {
  ironclad: 'ring-2 ring-red-400 border-red-400',
  silent: 'ring-2 ring-green-400 border-green-400',
  regent: 'ring-2 ring-purple-400 border-purple-400',
  necrobinder: 'ring-2 ring-blue-400 border-blue-400',
  defect: 'ring-2 ring-cyan-400 border-cyan-400',
}

export function CharacterSelect({ selected, onSelect }: Props) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-display text-amber-300 mb-4 tracking-wide">Choose Your Character</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {characters.map((char) => (
          <button
            key={char.id}
            onClick={() => onSelect(char.id)}
            className={`
              relative text-left rounded-xl border bg-gradient-to-b p-4 transition-all duration-200
              ${characterColors[char.id]}
              ${selected === char.id ? selectedRing[char.id] : ''}
              ${selected && selected !== char.id ? 'opacity-50' : 'opacity-100'}
            `}
          >
            {selected === char.id && (
              <span className="absolute top-2 right-2 text-amber-300 text-xs font-bold tracking-wide">ACTIVE</span>
            )}
            <div className="font-display text-sm font-semibold text-amber-200 mb-1">{char.name}</div>
            <div className="text-xs text-amber-300/70 mb-2 italic">{char.mechanic.split('.')[0]}.</div>
            <div className="text-xs text-amber-100/50">{char.startingRelic}</div>
          </button>
        ))}
      </div>
    </section>
  )
}

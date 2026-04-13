import { useState } from 'react'
import { useDeck } from './hooks/useDeck'
import { CharacterSelect } from './components/CharacterSelect'
import { CardSearch } from './components/CardSearch'
import { CardList } from './components/CardList'
import { RelicSearch } from './components/RelicSearch'
import { RelicList } from './components/RelicList'
import { AnalysisPanel } from './components/AnalysisPanel'

type Tab = 'cards' | 'relics'

export default function App() {
  const deck = useDeck()
  const [tab, setTab] = useState<Tab>('cards')

  return (
    <div className="min-h-screen bg-[#0f0a04]">
      {/* Header */}
      <header className="border-b border-amber-900/40 bg-[#0f0a04]/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl text-amber-400 tracking-wider">Moose the Slayer</h1>
            <p className="text-xs text-amber-700">Slay the Spire 2 Strategy Guide</p>
          </div>
          {deck.character && (
            <button
              onClick={deck.reset}
              className="btn-ghost text-xs text-amber-700 hover:text-amber-400"
            >
              Reset Run
            </button>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Character Select */}
        <CharacterSelect
          selected={deck.character}
          onSelect={deck.setCharacter}
        />

        {deck.character ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
            {/* Left: Cards + Relics */}
            <div className="space-y-5">
              {/* Tab switcher */}
              <div className="flex gap-1 bg-[#1a1208] border border-amber-900/40 rounded-xl p-1 w-fit">
                <button
                  onClick={() => setTab('cards')}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors
                    ${tab === 'cards' ? 'bg-amber-800 text-amber-100' : 'text-amber-500 hover:text-amber-300'}`}
                >
                  Cards {deck.cards.length > 0 && <span className="ml-1 text-xs opacity-70">({deck.cards.length})</span>}
                </button>
                <button
                  onClick={() => setTab('relics')}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors
                    ${tab === 'relics' ? 'bg-amber-800 text-amber-100' : 'text-amber-500 hover:text-amber-300'}`}
                >
                  Relics {deck.relics.length > 0 && <span className="ml-1 text-xs opacity-70">({deck.relics.length})</span>}
                </button>
              </div>

              {tab === 'cards' && (
                <div className="panel space-y-4">
                  <div>
                    <h2 className="font-display text-amber-300 text-sm tracking-wide mb-3">Add Cards</h2>
                    <CardSearch character={deck.character} onAdd={deck.addCard} />
                  </div>
                  <div>
                    <h2 className="font-display text-amber-300 text-sm tracking-wide mb-2">Your Deck</h2>
                    <CardList cards={deck.cards} onRemove={deck.removeCard} />
                  </div>
                </div>
              )}

              {tab === 'relics' && (
                <div className="panel space-y-4">
                  <div>
                    <h2 className="font-display text-amber-300 text-sm tracking-wide mb-3">Add Relics</h2>
                    <RelicSearch
                      character={deck.character}
                      onAdd={deck.addRelic}
                      ownedRelicIds={deck.relics.map((r) => r.id)}
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-amber-300 text-sm tracking-wide mb-2">Your Relics</h2>
                    <RelicList relics={deck.relics} onRemove={deck.removeRelic} />
                  </div>
                </div>
              )}
            </div>

            {/* Right: Analysis */}
            <div>
              <h2 className="font-display text-amber-300 text-sm tracking-wide mb-3">Analysis</h2>
              <AnalysisPanel
                character={deck.character}
                cards={deck.cards}
                relics={deck.relics}
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">⚔️</div>
            <p className="text-amber-600 text-lg">Select a character to begin building your strategy.</p>
            <p className="text-amber-800 text-sm mt-2">Track your cards and relics for real-time deck analysis.</p>
          </div>
        )}
      </main>

      <footer className="border-t border-amber-900/20 mt-12 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-amber-900">
          Fan-made strategy tool. Not affiliated with MegaCrit. Card data sourced from the STS2 wiki.
        </div>
      </footer>
    </div>
  )
}

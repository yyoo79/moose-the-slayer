import { useMemo } from 'react'
import type { Card, Relic, CharacterId } from '../types'
import { analyzeDeck } from '../engine/analyzer'

interface Props {
  character: CharacterId
  cards: Card[]
  relics: Relic[]
}

const strengthColors = {
  weak: 'text-gray-400',
  moderate: 'text-blue-300',
  strong: 'text-amber-300',
  excellent: 'text-green-300',
}

const strengthBars = {
  weak: 1,
  moderate: 2,
  strong: 3,
  excellent: 4,
}

function ScoreBar({ score }: { score: number }) {
  const color = score >= 70 ? 'bg-green-500' : score >= 45 ? 'bg-amber-500' : score >= 20 ? 'bg-blue-500' : 'bg-gray-600'
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-[#2a1e0f] rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-sm font-bold text-amber-200 w-8 text-right">{score}</span>
    </div>
  )
}

function SynergyStrengthDots({ strength }: { strength: keyof typeof strengthBars }) {
  const filled = strengthBars[strength]
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i <= filled ? 'bg-amber-400' : 'bg-amber-900/40'}`}
        />
      ))}
    </div>
  )
}

export function AnalysisPanel({ character, cards, relics }: Props) {
  const analysis = useMemo(
    () => analyzeDeck(character, cards, relics),
    [character, cards, relics]
  )

  return (
    <div className="space-y-5">
      {/* Summary */}
      <div className="panel">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-amber-300 text-sm tracking-wide">Strategy Score</h3>
        </div>
        <ScoreBar score={analysis.overallScore} />
        <p className="mt-3 text-sm text-amber-200/80 leading-relaxed">{analysis.summary}</p>
      </div>

      {/* Detected Archetypes */}
      {analysis.detectedArchetypes.length > 0 && (
        <div className="panel">
          <h3 className="font-display text-amber-300 text-sm tracking-wide mb-3">Detected Archetypes</h3>
          <div className="space-y-3">
            {analysis.detectedArchetypes.slice(0, 3).map((arch) => (
              <div key={arch.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-amber-100">{arch.name}</span>
                  <span className="text-xs text-amber-400">{arch.confidence}%</span>
                </div>
                <div className="w-full bg-[#2a1e0f] rounded-full h-1.5 overflow-hidden mb-1.5">
                  <div
                    className="h-full bg-amber-600 rounded-full transition-all duration-500"
                    style={{ width: `${arch.confidence}%` }}
                  />
                </div>
                {arch.presentCards.length > 0 && (
                  <div className="flex gap-1 flex-wrap mt-1">
                    {arch.presentCards.map((c) => (
                      <span key={c} className="text-xs bg-green-900/30 text-green-300 px-1.5 py-0.5 rounded">✓ {c}</span>
                    ))}
                  </div>
                )}
                {arch.missingKeyCards.length > 0 && (
                  <div className="flex gap-1 flex-wrap mt-1">
                    {arch.missingKeyCards.slice(0, 3).map((c) => (
                      <span key={c} className="text-xs bg-gray-800/40 text-gray-400 px-1.5 py-0.5 rounded capitalize">○ {c}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Synergy Highlights */}
      {analysis.synergyHighlights.length > 0 && (
        <div className="panel">
          <h3 className="font-display text-amber-300 text-sm tracking-wide mb-3">Active Synergies</h3>
          <div className="space-y-3">
            {analysis.synergyHighlights.map((syn) => (
              <div key={syn.name} className="border-l-2 border-amber-700/50 pl-3">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${strengthColors[syn.strength]}`}>{syn.name}</span>
                  <SynergyStrengthDots strength={syn.strength} />
                </div>
                <p className="text-xs text-amber-300/60 mt-0.5 leading-relaxed">{syn.description}</p>
                <div className="flex gap-1 flex-wrap mt-1.5">
                  {syn.cards.slice(0, 4).map((c) => (
                    <span key={c} className="text-xs bg-amber-900/20 text-amber-400 px-1.5 py-0.5 rounded">{c}</span>
                  ))}
                  {syn.cards.length > 4 && (
                    <span className="text-xs text-amber-700">+{syn.cards.length - 4} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deck Gaps */}
      {analysis.gaps.length > 0 && (
        <div className="panel">
          <h3 className="font-display text-amber-300 text-sm tracking-wide mb-3">Deck Gaps</h3>
          <div className="space-y-2">
            {analysis.gaps.map((gap, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 text-sm p-2.5 rounded-lg
                  ${gap.severity === 'major' ? 'bg-red-900/20 border border-red-800/30' : 'bg-amber-900/10 border border-amber-900/20'}
                `}
              >
                <span className={gap.severity === 'major' ? 'text-red-400' : 'text-amber-500'}>
                  {gap.severity === 'major' ? '⚠' : '•'}
                </span>
                <span className={gap.severity === 'major' ? 'text-red-200' : 'text-amber-300/70'}>
                  {gap.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Card Suggestions */}
      {analysis.suggestedCards.length > 0 && (
        <div className="panel">
          <h3 className="font-display text-amber-300 text-sm tracking-wide mb-3">Suggested Picks</h3>
          <div className="space-y-2">
            {analysis.suggestedCards.map((sug) => (
              <div key={sug.cardName} className="flex items-start gap-3">
                <span className={`text-xs px-1.5 py-0.5 rounded mt-0.5 shrink-0 font-medium
                  ${sug.priority === 'high' ? 'bg-amber-700/60 text-amber-200' : sug.priority === 'medium' ? 'bg-blue-800/60 text-blue-200' : 'bg-gray-700/60 text-gray-300'}
                `}>
                  {sug.priority.toUpperCase()}
                </span>
                <div>
                  <span className="text-sm text-amber-100 font-medium capitalize">{sug.cardName}</span>
                  <p className="text-xs text-amber-300/60 mt-0.5">{sug.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {cards.length === 0 && (
        <div className="panel text-center py-8">
          <div className="text-4xl mb-3">🃏</div>
          <p className="text-amber-600 text-sm">Add cards and relics from your current run to see analysis.</p>
        </div>
      )}
    </div>
  )
}

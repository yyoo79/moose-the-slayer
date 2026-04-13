import type {
  Card,
  Relic,
  CharacterId,
  AnalysisResult,
  DetectedArchetype,
  SynergyHighlight,
  DeckGap,
  CardSuggestion,
} from '../types'
import { characters } from '../data/characters'

function hasCard(cards: Card[], id: string): boolean {
  return cards.some((c) => c.id === id)
}

function hasRelic(relics: Relic[], id: string): boolean {
  return relics.some((r) => r.id === id)

}

function detectArchetypes(
  character: CharacterId,
  cards: Card[],
  relics: Relic[]
): DetectedArchetype[] {
  const char = characters.find((c) => c.id === character)
  if (!char) return []

  return char.archetypes
    .map((arch) => {
      const presentCards = arch.keyCards.filter((id) => hasCard(cards, id))
      const presentRelics = arch.keyRelics.filter((id) => hasRelic(relics, id))
      const presentCount = presentCards.length + presentRelics.length
      const totalKey = arch.keyCards.length + arch.keyRelics.length
      const confidence = Math.round((presentCount / totalKey) * 100)

      return {
        name: arch.name,
        confidence,
        description: arch.description,
        presentCards: presentCards.map(
          (id) => cards.find((c) => c.id === id)?.name ?? id
        ),
        missingKeyCards: arch.keyCards
          .filter((id) => !hasCard(cards, id))
          .map((id) => {
            // Try to get name from any source
            return id.replace(/^[a-z]+_/, '').replace(/_/g, ' ')
          }),
      }
    })
    .filter((a) => a.confidence > 0)
    .sort((a, b) => b.confidence - a.confidence)
}

function detectSynergies(
  character: CharacterId,
  cards: Card[],
  relics: Relic[]
): SynergyHighlight[] {
  const highlights: SynergyHighlight[] = []

  if (character === 'ironclad') {
    // Exhaust synergy
    const exhaustCards = cards.filter(
      (c) => c.description.toLowerCase().includes('exhaust') || c.id === 'ic_feel_no_pain' || c.id === 'ic_burning_pact'
    )
    if (exhaustCards.length >= 3) {
      highlights.push({
        name: 'Exhaust Engine',
        description: 'Multiple Exhaust cards detected. Feel No Pain and Charon\'s Ashes thrive here.',
        cards: exhaustCards.map((c) => c.name),
        strength: exhaustCards.length >= 5 ? 'strong' : 'moderate',
      })
    }

    // Strength + multi-hit
    const strengthCards = cards.filter(
      (c) => c.description.toLowerCase().includes('strength') || c.id === 'ic_inflame'
    )
    const multiHitCards = cards.filter(
      (c) =>
        c.id === 'ic_whirlwind' || c.id === 'ic_twin_strike' || c.id === 'ic_sword_boomerang'
    )
    if (strengthCards.length >= 1 && multiHitCards.length >= 1) {
      highlights.push({
        name: 'Strength × Multi-Hit',
        description: 'Strength buffs multiply across every hit of multi-hit attacks.',
        cards: [...strengthCards, ...multiHitCards].map((c) => c.name),
        strength: strengthCards.length >= 2 && multiHitCards.length >= 2 ? 'excellent' : 'moderate',
      })
    }

    // Self-damage
    const selfDmgCards = cards.filter(
      (c) =>
        c.description.toLowerCase().includes('lose') && c.description.toLowerCase().includes('hp')
    )
    if (selfDmgCards.length >= 2 && hasCard(cards, 'ic_rupture')) {
      highlights.push({
        name: 'Rupture Self-Damage',
        description: 'Self-damage cards pair perfectly with Rupture to convert HP loss into Strength.',
        cards: selfDmgCards.map((c) => c.name),
        strength: 'strong',
      })
    }

    // Barricade + Body Slam
    if (hasCard(cards, 'ic_barricade') && hasCard(cards, 'ic_body_slam')) {
      highlights.push({
        name: 'Barricade + Body Slam',
        description: 'Block accumulates across turns and Body Slam converts it into damage.',
        cards: ['Barricade', 'Body Slam'],
        strength: 'excellent',
      })
    }
  }

  if (character === 'silent') {
    // Poison combo
    const poisonCards = cards.filter((c) => c.keywords?.includes('poison'))
    if (poisonCards.length >= 2 && hasCard(cards, 'sl_catalyst')) {
      highlights.push({
        name: 'Poison + Catalyst',
        description: 'Catalyst doubles existing Poison stacks. Combined with Noxious Fumes and Accelerant this scales infinitely.',
        cards: [...poisonCards.map((c) => c.name)],
        strength: poisonCards.length >= 4 ? 'excellent' : 'strong',
      })
    } else if (poisonCards.length >= 3) {
      highlights.push({
        name: 'Poison Stack',
        description: 'Multiple poison sources create consistent damage-over-time.',
        cards: poisonCards.map((c) => c.name),
        strength: 'moderate',
      })
    }

    // Shiv synergy
    const shivCards = cards.filter((c) => c.keywords?.includes('shiv'))
    if (shivCards.length >= 2 && hasCard(cards, 'sl_accuracy')) {
      highlights.push({
        name: 'Shiv + Accuracy',
        description: 'Accuracy gives all Shivs +4 damage (stacks). With multiple Accuracies and Infinite Blades this shreds.',
        cards: shivCards.map((c) => c.name),
        strength: 'strong',
      })
    }

    // Discard synergy
    const discardCards = cards.filter(
      (c) =>
        c.description.toLowerCase().includes('discard') ||
        c.id === 'sl_acrobatics' ||
        c.id === 'sl_calculated_gamble'
    )
    if (discardCards.length >= 3) {
      highlights.push({
        name: 'Discard / Sly Cycle',
        description: 'Discarding cards triggers Sly effects and Finisher scales with Attacks played.',
        cards: discardCards.map((c) => c.name),
        strength: discardCards.length >= 5 ? 'strong' : 'moderate',
      })
    }
  }

  if (character === 'regent') {
    // Star generation
    const starGenCards = cards.filter((c) => c.keywords?.includes('star') && c.description.toLowerCase().includes('gain'))
    if (starGenCards.length >= 3) {
      highlights.push({
        name: 'Star Generation Engine',
        description: 'Multiple Star-generating cards create a steady resource stream for powerful spells.',
        cards: starGenCards.map((c) => c.name),
        strength: starGenCards.length >= 5 ? 'strong' : 'moderate',
      })
    }

    // Forge combo
    const forgeCards = cards.filter((c) => c.keywords?.includes('forge'))
    if (forgeCards.length >= 2 && hasCard(cards, 'rg_sovereign_blade')) {
      highlights.push({
        name: 'Forge + Sovereign Blade',
        description: 'Stack Forge via multiple cards, then release the Sovereign Blade for massive burst damage.',
        cards: [...forgeCards.map((c) => c.name), 'Sovereign Blade'],
        strength: forgeCards.length >= 4 ? 'excellent' : 'strong',
      })
    }

    // Star spending
    const starSpendCards = cards.filter(
      (c) => c.keywords?.includes('star') && c.description.toLowerCase().includes('spend')
    )
    if (starGenCards.length >= 2 && starSpendCards.length >= 1 && hasCard(cards, 'rg_child_of_the_stars')) {
      highlights.push({
        name: 'Child of the Stars Defense',
        description: 'Spending Star generates Block via Child of the Stars, creating offense-defense synergy.',
        cards: ['Child of the Stars', ...starSpendCards.map((c) => c.name)],
        strength: 'strong',
      })
    }
  }

  if (character === 'necrobinder') {
    // Doom execute
    const doomCards = cards.filter((c) => c.keywords?.includes('doom'))
    if (doomCards.length >= 3 && hasCard(cards, 'nb_times_up')) {
      highlights.push({
        name: 'Doom Execute Combo',
        description: 'Stack Doom quickly via multiple cards, then use Time\'s Up to instantly kill enemies.',
        cards: [...doomCards.map((c) => c.name), "Time's Up"],
        strength: doomCards.length >= 5 ? 'excellent' : 'strong',
      })
    } else if (doomCards.length >= 3) {
      highlights.push({
        name: 'Doom Accumulation',
        description: 'Multiple Doom sources building toward the threshold for instant kills.',
        cards: doomCards.map((c) => c.name),
        strength: 'moderate',
      })
    }

    // Osty support
    const ostyCards = cards.filter((c) => c.keywords?.includes('osty'))
    if (ostyCards.length >= 3) {
      highlights.push({
        name: 'Osty Army',
        description: 'Osty attacks multiple times per turn, absorbing hits and dealing consistent damage.',
        cards: ostyCards.map((c) => c.name),
        strength: ostyCards.length >= 5 ? 'strong' : 'moderate',
      })
    }

    // Soul cycling
    const soulCards = cards.filter((c) => c.keywords?.includes('soul'))
    if (soulCards.length >= 3) {
      highlights.push({
        name: 'Soul Cycling',
        description: 'Souls provide extra card draw and resource generation when burned.',
        cards: soulCards.map((c) => c.name),
        strength: 'moderate',
      })
    }
  }

  if (character === 'defect') {
    // Claw spam
    const clawCount = cards.filter((c) => c.id === 'df_claw').length
    if (clawCount >= 1 && hasCard(cards, 'df_all_for_one')) {
      highlights.push({
        name: 'Claw + All for One',
        description: 'Claw permanently increases its damage. All for One recycles all 0-cost Claws from Discard for free re-plays.',
        cards: ['Claw', 'All for One'],
        strength: clawCount >= 2 ? 'excellent' : 'strong',
      })
    }

    // Focus + Orb synergy
    const focusCards = cards.filter((c) => c.keywords?.includes('focus'))
    const orbCards = cards.filter(
      (c) => c.keywords?.includes('lightning') || c.keywords?.includes('frost') || c.keywords?.includes('dark')
    )
    if (focusCards.length >= 2 && orbCards.length >= 3) {
      highlights.push({
        name: 'Focus + Orb Amplification',
        description: 'Focus multiplies all Orb effects. Lightning deals more, Frost blocks more, Dark accumulates faster.',
        cards: [...focusCards, ...orbCards.slice(0, 4)].map((c) => c.name),
        strength: focusCards.length >= 3 ? 'excellent' : 'strong',
      })
    }

    // Electrodynamics
    if (hasCard(cards, 'df_electrodynamics')) {
      const lightningCards = cards.filter((c) => c.keywords?.includes('lightning'))
      highlights.push({
        name: 'Electrodynamics AoE',
        description: 'Electrodynamics makes Lightning Orbs hit ALL enemies — transforms single-target into board clear.',
        cards: ['Electrodynamics', ...lightningCards.map((c) => c.name)],
        strength: lightningCards.length >= 3 ? 'excellent' : 'strong',
      })
    }

    // Loop + passive orbs
    if (hasCard(cards, 'df_loop') && orbCards.length >= 2) {
      highlights.push({
        name: 'Loop + Passive Orbs',
        description: 'Loop triggers your rightmost Orb\'s passive every turn, effectively doubling its effect.',
        cards: ['Loop', ...orbCards.slice(0, 3).map((c) => c.name)],
        strength: 'strong',
      })
    }
  }

  // Relic synergies (shared)
  if (hasRelic(relics, 'paper_phrog') && cards.some((c) => c.description.toLowerCase().includes('vulnerable'))) {
    highlights.push({
      name: 'Paper Phrog + Vulnerable',
      description: 'Paper Phrog increases Vulnerable damage to 75%. Pairs with any card that applies Vulnerable.',
      cards: cards.filter((c) => c.description.toLowerCase().includes('vulnerable')).map((c) => c.name),
      strength: 'strong',
    })
  }

  return highlights
}

function detectGaps(character: CharacterId, cards: Card[], _relics: Relic[]): DeckGap[] {
  const gaps: DeckGap[] = []
  const attacks = cards.filter((c) => c.type === 'Attack')
  const skills = cards.filter((c) => c.type === 'Skill')
  const powers = cards.filter((c) => c.type === 'Power')
  const blockCards = cards.filter(
    (c) => c.description.toLowerCase().includes('block')
  )
  const drawCards = cards.filter(
    (c) =>
      c.description.toLowerCase().includes('draw') &&
      !c.description.toLowerCase().includes('draw pile')
  )

  if (cards.length === 0) return []

  // Not enough cards to analyze gaps meaningfully
  if (cards.length < 4) return []

  if (attacks.length === 0) {
    gaps.push({ type: 'damage', severity: 'major', description: 'No Attack cards in deck — unable to deal damage.' })
  } else if (attacks.length <= 2 && character !== 'defect') {
    gaps.push({ type: 'damage', severity: 'minor', description: 'Very few Attack cards — consider adding more damage sources.' })
  }

  if (blockCards.length === 0) {
    gaps.push({ type: 'block', severity: 'major', description: 'No Block cards — very vulnerable to enemy attacks.' })
  } else if (blockCards.length <= 1) {
    gaps.push({ type: 'block', severity: 'minor', description: 'Only 1 Block source — consider adding more defensive options.' })
  }

  if (drawCards.length === 0 && cards.length > 6) {
    gaps.push({ type: 'draw', severity: 'minor', description: 'No card draw — a thinner deck or draw cards would improve consistency.' })
  }

  // Character-specific scaling checks
  if (character === 'ironclad' && powers.filter((c) => c.description.toLowerCase().includes('strength')).length === 0 && cards.length > 8) {
    gaps.push({ type: 'scaling', severity: 'minor', description: 'No Strength scaling — Ironclad damage falls off without Strength buffs late game.' })
  }

  if (character === 'silent' && skills.length < 2 && cards.length > 6) {
    gaps.push({ type: 'damage', severity: 'minor', description: 'Silent relies on Skills for cycling — more Skills would improve deck flow.' })
  }

  if (character === 'defect' && !cards.some((c) => c.keywords?.includes('channel')) && cards.length > 4) {
    gaps.push({ type: 'scaling', severity: 'major', description: 'No Orb-channeling cards — Defect\'s passive Orb effects are its primary scaling.' })
  }

  if (character === 'regent' && !cards.some((c) => c.keywords?.includes('star')) && cards.length > 4) {
    gaps.push({ type: 'energy', severity: 'major', description: 'No Star generation — Regent\'s powerful spells require Star as a resource.' })
  }

  if (character === 'necrobinder' && !cards.some((c) => c.keywords?.includes('doom') || c.keywords?.includes('osty')) && cards.length > 4) {
    gaps.push({ type: 'scaling', severity: 'major', description: 'No Doom or Osty cards — Necrobinder needs these core mechanics to function.' })
  }

  return gaps
}

function suggestCards(
  character: CharacterId,
  cards: Card[],
  archetypes: DetectedArchetype[]
): CardSuggestion[] {
  const suggestions: CardSuggestion[] = []

  if (archetypes.length === 0) return []

  const topArchetype = archetypes[0]

  // Suggest missing key cards for the top archetype
  topArchetype.missingKeyCards.slice(0, 3).forEach((name) => {
    suggestions.push({
      cardName: name,
      reason: `Key card for your ${topArchetype.name} strategy.`,
      priority: topArchetype.confidence > 50 ? 'high' : 'medium',
    })
  })

  // Character-specific universal suggestions
  if (character === 'ironclad' && !cards.some((c) => c.id === 'ic_feel_no_pain')) {
    suggestions.push({ cardName: 'Feel No Pain', reason: 'Core Exhaust synergy card — turns Exhaust cards into Block.', priority: 'high' })
  }
  if (character === 'silent' && !cards.some((c) => c.id === 'sl_catalyst')) {
    suggestions.push({ cardName: 'Catalyst', reason: 'Doubles Poison stacks — essential for any Poison build.', priority: 'high' })
  }
  if (character === 'defect' && !cards.some((c) => c.id === 'df_defragment')) {
    suggestions.push({ cardName: 'Defragment', reason: 'Permanently boosts Focus — amplifies all Orb effects every turn.', priority: 'high' })
  }
  if (character === 'regent' && !cards.some((c) => c.id === 'rg_chart_of_the_stars')) {
    suggestions.push({ cardName: 'Chart of the Stars', reason: 'Passive Star generation every turn — the backbone of Star builds.', priority: 'high' })
  }
  if (character === 'necrobinder' && !cards.some((c) => c.id === 'nb_times_up')) {
    suggestions.push({ cardName: "Time's Up", reason: 'Converts Doom stacks into instant kills — the payoff for any Doom build.', priority: 'high' })
  }

  // Remove duplicates
  const seen = new Set<string>()
  return suggestions.filter((s) => {
    if (seen.has(s.cardName)) return false
    seen.add(s.cardName)
    return true
  }).slice(0, 5)
}

export function analyzeDeck(
  character: CharacterId,
  cards: Card[],
  relics: Relic[]
): AnalysisResult {
  const archetypes = detectArchetypes(character, cards, relics)
  const synergies = detectSynergies(character, cards, relics)
  const gaps = detectGaps(character, cards, relics)
  const suggestions = suggestCards(character, cards, archetypes)

  // Score: weighted combination of archetype confidence + synergies - gaps
  let score = 0
  if (archetypes.length > 0) score += archetypes[0].confidence * 0.5
  score += Math.min(synergies.length * 10, 30)
  score -= gaps.filter((g) => g.severity === 'major').length * 15
  score -= gaps.filter((g) => g.severity === 'minor').length * 5
  score = Math.max(0, Math.min(100, Math.round(score)))

  let summary = ''
  if (cards.length === 0) {
    summary = 'Add cards to your deck to get strategy analysis.'
  } else if (archetypes.length === 0) {
    summary = 'No clear archetype detected yet. Keep adding cards to reveal your build direction.'
  } else {
    const top = archetypes[0]
    summary = `Your deck is shaping up as a ${top.name} (${top.confidence}% match). ${top.description}`
    if (archetypes.length > 1) {
      summary += ` You also have elements of a ${archetypes[1].name}.`
    }
    if (gaps.length > 0) {
      const majorGaps = gaps.filter((g) => g.severity === 'major')
      if (majorGaps.length > 0) {
        summary += ` Warning: ${majorGaps[0].description}`
      }
    }
  }

  return {
    character,
    detectedArchetypes: archetypes,
    synergyHighlights: synergies,
    gaps,
    suggestedCards: suggestions,
    overallScore: score,
    summary,
  }
}

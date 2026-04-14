export type CharacterId = 'ironclad' | 'silent' | 'regent' | 'necrobinder' | 'defect'

export type CardType = 'Attack' | 'Skill' | 'Power' | 'Status' | 'Curse'
export type CardRarity = 'Basic' | 'Common' | 'Uncommon' | 'Rare' | 'Ancient'

export interface Card {
  id: string
  name: string
  character: CharacterId | 'colorless'
  cost: number | 'X' | '-'
  type: CardType
  rarity: CardRarity
  description: string
  descriptionUpgraded?: string
  keywords?: string[]
  imageUrl?: string
}

export type RelicRarity = 'Starter' | 'Common' | 'Uncommon' | 'Rare' | 'Shop' | 'Ancient' | 'Event'

export interface Relic {
  id: string
  name: string
  character: CharacterId | 'shared'
  rarity: RelicRarity
  description: string
  imageUrl?: string
}

export interface Character {
  id: CharacterId
  name: string
  description: string
  mechanic: string
  startingRelic: string
  color: string
  archetypes: Archetype[]
  imageUrl?: string
}

export interface Archetype {
  id: string
  name: string
  description: string
  keyCards: string[]   // card ids
  keyRelics: string[]  // relic ids
  tags: string[]
}

export type SynergyStrength = 'weak' | 'moderate' | 'strong' | 'excellent'

export interface SynergyRule {
  id: string
  name: string
  description: string
  cardIds: string[]           // cards that trigger this synergy
  relicIds?: string[]         // relics that amplify it
  requiredCount: number       // minimum cards needed to count as this synergy
  archetype: string           // which archetype this belongs to
  strength: SynergyStrength
}

export interface AnalysisResult {
  character: CharacterId
  detectedArchetypes: DetectedArchetype[]
  synergyHighlights: SynergyHighlight[]
  gaps: DeckGap[]
  suggestedCards: CardSuggestion[]
  overallScore: number  // 0-100
  summary: string
}

export interface DetectedArchetype {
  name: string
  confidence: number   // 0-100
  description: string
  presentCards: string[]
  missingKeyCards: string[]
}

export interface SynergyHighlight {
  name: string
  description: string
  cards: string[]
  strength: SynergyStrength
}

export interface DeckGap {
  type: 'damage' | 'block' | 'scaling' | 'draw' | 'aoe' | 'exhaust' | 'energy'
  severity: 'minor' | 'major'
  description: string
}

export interface CardSuggestion {
  cardName: string
  reason: string
  priority: 'high' | 'medium' | 'low'
}

export interface DeckState {
  character: CharacterId | null
  cards: Card[]
  relics: Relic[]
}

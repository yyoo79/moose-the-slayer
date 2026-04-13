import type { Card } from '../../types'

export const regentCards: Card[] = [
  // Basic
  { id: 'rg_strike', name: 'Strike', character: 'regent', cost: 1, type: 'Attack', rarity: 'Basic', description: 'Deal 6 damage.', keywords: ['strike'] },
  { id: 'rg_defend', name: 'Defend', character: 'regent', cost: 1, type: 'Skill', rarity: 'Basic', description: 'Gain 5 Block.', keywords: ['defend'] },
  { id: 'rg_falling_star', name: 'Falling Star', character: 'regent', cost: 0, type: 'Attack', rarity: 'Basic', description: 'Deal 6 damage. Gain 1 Star.' },
  { id: 'rg_venerate', name: 'Venerate', character: 'regent', cost: 1, type: 'Skill', rarity: 'Basic', description: 'Gain 5 Block. Gain 1 Star.' },

  // Common
  { id: 'rg_alignment', name: 'Alignment', character: 'regent', cost: 0, type: 'Skill', rarity: 'Common', description: 'Gain 2 Star Energy.', keywords: ['star'] },
  { id: 'rg_astral_pulse', name: 'Astral Pulse', character: 'regent', cost: 0, type: 'Attack', rarity: 'Common', description: 'Deal 14 damage to ALL enemies.', keywords: ['star'] },
  { id: 'rg_beat_into_shape', name: 'Beat into Shape', character: 'regent', cost: 1, type: 'Attack', rarity: 'Common', description: 'Deal 5 damage. Forge 5. Forges an additional 5 for each previous hit.', keywords: ['forge'] },
  { id: 'rg_begone', name: 'Begone!', character: 'regent', cost: 1, type: 'Attack', rarity: 'Common', description: 'Deal 4 damage. Transform a card in your Hand into a Minion Dive Bomb.' },
  { id: 'rg_big_bang', name: 'Big Bang', character: 'regent', cost: 0, type: 'Skill', rarity: 'Common', description: 'Innate. Draw 1 card. Gain 1 Star Energy twice. Forge 5.', keywords: ['star', 'forge'] },
  { id: 'rg_bombardment', name: 'Bombardment', character: 'regent', cost: 3, type: 'Attack', rarity: 'Common', description: 'Deal 18 damage. At the start of your turn, play from your Exhaust Pile. Exhaust.' },
  { id: 'rg_bulwark', name: 'Bulwark', character: 'regent', cost: 2, type: 'Skill', rarity: 'Common', description: 'Gain 13 Block. Forge 10.', keywords: ['forge'] },
  { id: 'rg_bundle_of_joy', name: 'Bundle of Joy', character: 'regent', cost: 2, type: 'Skill', rarity: 'Common', description: 'Add 3 random Colorless cards to your Hand. Exhaust.' },
  { id: 'rg_celestial_might', name: 'Celestial Might', character: 'regent', cost: 2, type: 'Attack', rarity: 'Common', description: 'Deal 6 damage 3 times.' },
  { id: 'rg_charge', name: 'CHARGE!!', character: 'regent', cost: 1, type: 'Skill', rarity: 'Common', description: 'Choose 2 cards in your Draw Pile to Transform into Minion Strikes.' },
  { id: 'rg_cloak_of_stars', name: 'Cloak of Stars', character: 'regent', cost: 0, type: 'Skill', rarity: 'Common', description: 'Gain 7 Block.', keywords: ['star'] },
  { id: 'rg_comet', name: 'Comet', character: 'regent', cost: 0, type: 'Attack', rarity: 'Common', description: 'Deal 33 damage. Apply 3 Weak. Apply 3 Vulnerable.', keywords: ['star'] },
  { id: 'rg_collision_course', name: 'Collision Course', character: 'regent', cost: 0, type: 'Attack', rarity: 'Common', description: 'Deal 9 damage. Add Debris into your Hand.' },
  { id: 'rg_cosmic_indifference', name: 'Cosmic Indifference', character: 'regent', cost: 1, type: 'Skill', rarity: 'Common', description: 'Gain 7 Block. Forge 7.', keywords: ['forge'] },
  { id: 'rg_gather_light', name: 'Gather Light', character: 'regent', cost: 1, type: 'Skill', rarity: 'Common', description: 'Gain 2 Star. Draw 1 card.', keywords: ['star'] },
  { id: 'rg_glow', name: 'Glow', character: 'regent', cost: 0, type: 'Skill', rarity: 'Common', description: 'Gain 1 Star. Gain 3 Block.', keywords: ['star'] },
  { id: 'rg_shining_strike', name: 'Shining Strike', character: 'regent', cost: 1, type: 'Attack', rarity: 'Common', description: 'Deal 9 damage. Gain 2 Star.', keywords: ['star', 'strike'] },
  { id: 'rg_solar_strike', name: 'Solar Strike', character: 'regent', cost: 1, type: 'Attack', rarity: 'Common', description: 'Spend 1 Star. Deal 18 damage.', keywords: ['star', 'strike'] },
  { id: 'rg_summon_forth', name: 'Summon Forth', character: 'regent', cost: 1, type: 'Skill', rarity: 'Common', description: 'Summon 2 Minions. Forge 5.', keywords: ['forge'] },
  { id: 'rg_wrought_in_war', name: 'Wrought in War', character: 'regent', cost: 1, type: 'Attack', rarity: 'Common', description: 'Deal 8 damage. Forge 8.', keywords: ['forge'] },

  // Uncommon
  { id: 'rg_arsenal', name: 'Arsenal', character: 'regent', cost: 1, type: 'Power', rarity: 'Uncommon', description: 'Whenever you play a Colorless card, gain 1 Strength.' },
  { id: 'rg_black_hole', name: 'Black Hole', character: 'regent', cost: 1, type: 'Power', rarity: 'Uncommon', description: 'Whenever you spend or gain Star Energy, deal 3 damage to ALL enemies.', keywords: ['star'] },
  { id: 'rg_child_of_the_stars', name: 'Child of the Stars', character: 'regent', cost: 1, type: 'Power', rarity: 'Uncommon', description: 'Whenever you spend 1 Star Energy, gain 2 Block per Energy spent.', keywords: ['star'] },
  { id: 'rg_convergence', name: 'Convergence', character: 'regent', cost: 1, type: 'Skill', rarity: 'Uncommon', description: 'Gain 3 Star. Gain 6 Block.', keywords: ['star'] },
  { id: 'rg_cosmic_strike', name: 'Cosmic Strike', character: 'regent', cost: 1, type: 'Attack', rarity: 'Uncommon', description: 'Deal 7 damage. Spend all Star to deal additional damage.', keywords: ['star', 'strike'] },
  { id: 'rg_gamma_blast', name: 'Gamma Blast', character: 'regent', cost: 0, type: 'Attack', rarity: 'Uncommon', description: 'Spend 2 Star. Deal 20 damage to ALL enemies.', keywords: ['star'] },
  { id: 'rg_hidden_cache', name: 'Hidden Cache', character: 'regent', cost: 0, type: 'Skill', rarity: 'Uncommon', description: 'Gain 1 Star. Add a random Colorless card to your Hand.', keywords: ['star'] },
  { id: 'rg_minion_assault', name: 'Minion Assault', character: 'regent', cost: 1, type: 'Skill', rarity: 'Uncommon', description: 'All your Minions attack. Forge 3 per Minion.' },
  { id: 'rg_nova_burst', name: 'Nova Burst', character: 'regent', cost: 2, type: 'Attack', rarity: 'Uncommon', description: 'Spend 3 Star. Deal 12 damage to ALL enemies. Apply 3 Vulnerable to ALL enemies.', keywords: ['star'] },
  { id: 'rg_royal_decree', name: 'Royal Decree', character: 'regent', cost: 1, type: 'Skill', rarity: 'Uncommon', description: 'Transform your Minions into stronger versions. Gain 1 Star per Minion transformed.', keywords: ['star'] },
  { id: 'rg_star_shower', name: 'Star Shower', character: 'regent', cost: 2, type: 'Attack', rarity: 'Uncommon', description: 'Deal 5 damage 5 times. Gain 1 Star per hit.', keywords: ['star'] },
  { id: 'rg_stellar_shield', name: 'Stellar Shield', character: 'regent', cost: 1, type: 'Skill', rarity: 'Uncommon', description: 'Spend 1 Star. Gain 12 Block.', keywords: ['star'] },
  { id: 'rg_void_form', name: 'Void Form', character: 'regent', cost: 0, type: 'Power', rarity: 'Uncommon', description: 'Whenever you play a card that costs Star, draw 1 card.', keywords: ['star'] },

  // Rare
  { id: 'rg_chart_of_the_stars', name: 'Chart of the Stars', character: 'regent', cost: 1, type: 'Power', rarity: 'Rare', description: 'At the start of your turn, gain 1 Star.', keywords: ['star'] },
  { id: 'rg_decision_decision', name: 'Decision Decision', character: 'regent', cost: 2, type: 'Skill', rarity: 'Rare', description: 'Choose a card in your Hand. Play it 3 times. Exhaust.' },
  { id: 'rg_forge_destiny', name: 'Forge Destiny', character: 'regent', cost: 2, type: 'Skill', rarity: 'Rare', description: 'Forge 30. Exhaust.', keywords: ['forge'] },
  { id: 'rg_sealed_throne', name: 'Sealed Throne', character: 'regent', cost: 3, type: 'Power', rarity: 'Rare', description: 'Whenever you play a Star card, gain 1 Energy.', keywords: ['star'] },
  { id: 'rg_sovereign_blade', name: 'Sovereign Blade', character: 'regent', cost: 1, type: 'Attack', rarity: 'Rare', description: 'Deal damage equal to your Sovereign Blade\'s Forge value. Resets on use.', keywords: ['forge'] },
  { id: 'rg_supernova', name: 'Supernova', character: 'regent', cost: 'X', type: 'Attack', rarity: 'Rare', description: 'Spend X Star. Deal 15 damage to ALL enemies for each Star spent. Exhaust.', keywords: ['star'] },
]

import type { Card } from '../../types'

export const necrobinderCards: Card[] = [
  // Basic
  { id: 'nb_strike', name: 'Strike', character: 'necrobinder', cost: 1, type: 'Attack', rarity: 'Basic', description: 'Deal 6 damage.', keywords: ['strike'] },
  { id: 'nb_defend', name: 'Defend', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Basic', description: 'Gain 5 Block.', keywords: ['defend'] },
  { id: 'nb_bodyguard', name: 'Bodyguard', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Basic', description: 'Summon 5.', keywords: ['summon'] },
  { id: 'nb_unleash', name: 'Unleash', character: 'necrobinder', cost: 0, type: 'Attack', rarity: 'Basic', description: 'Deal damage equal to Osty\'s current HP.', keywords: ['osty'] },

  // Common
  { id: 'nb_afterlife', name: 'Afterlife', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Common', description: 'Summon 6. Exhaust.', keywords: ['summon'] },
  { id: 'nb_banshees_cry', name: "Banshee's Cry", character: 'necrobinder', cost: 6, type: 'Attack', rarity: 'Common', description: 'Deal 33 damage to ALL enemies. Costs 2 Energy less per Ethereal card played.', keywords: ['ethereal'] },
  { id: 'nb_blight_strike', name: 'Blight Strike', character: 'necrobinder', cost: 1, type: 'Attack', rarity: 'Common', description: 'Deal 8 damage. Apply Doom equal to damage dealt.', keywords: ['doom'] },
  { id: 'nb_bone_shards', name: 'Bone Shards', character: 'necrobinder', cost: 1, type: 'Attack', rarity: 'Common', description: 'If Osty is alive, deal 9 damage to ALL enemies and gain 9 Block. Osty dies.', keywords: ['osty'] },
  { id: 'nb_borrowed_time', name: 'Borrowed Time', character: 'necrobinder', cost: 0, type: 'Skill', rarity: 'Common', description: 'Apply 3 Doom to yourself. Gain 1 Energy.', keywords: ['doom'] },
  { id: 'nb_bury', name: 'Bury', character: 'necrobinder', cost: 4, type: 'Attack', rarity: 'Common', description: 'Deal 52 damage.' },
  { id: 'nb_calcify', name: 'Calcify', character: 'necrobinder', cost: 1, type: 'Power', rarity: 'Common', description: "Osty's attacks deal 4 additional damage.", keywords: ['osty'] },
  { id: 'nb_call_of_the_void', name: 'Call of the Void', character: 'necrobinder', cost: 1, type: 'Power', rarity: 'Common', description: 'Innate. At the start of your turn, add 1 random card to your Hand. It is Ethereal.', keywords: ['ethereal'] },
  { id: 'nb_capture_spirit', name: 'Capture Spirit', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Common', description: 'The enemy loses 3 HP. Add 3 Souls to your Draw Pile.', keywords: ['soul'] },
  { id: 'nb_cleanse', name: 'Cleanse', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Common', description: 'Summon 3. Exhaust 1 card from your Draw Pile.', keywords: ['summon'] },
  { id: 'nb_defile', name: 'Defile', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Common', description: 'Apply 5 Doom.', keywords: ['doom'] },
  { id: 'nb_doom_cloud', name: 'Doom Cloud', character: 'necrobinder', cost: 2, type: 'Skill', rarity: 'Common', description: 'Apply 3 Doom to ALL enemies.', keywords: ['doom'] },
  { id: 'nb_drain_life', name: 'Drain Life', character: 'necrobinder', cost: 1, type: 'Attack', rarity: 'Common', description: 'Deal 7 damage. Summon equal to damage dealt.', keywords: ['summon'] },
  { id: 'nb_eerie_silence', name: 'Eerie Silence', character: 'necrobinder', cost: 0, type: 'Skill', rarity: 'Common', description: 'Gain 4 Block. Retain.' },
  { id: 'nb_fetch', name: 'Fetch', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Common', description: 'Osty attacks the enemy for 6 damage. Draw 1 card.', keywords: ['osty'] },
  { id: 'nb_grave_robber', name: 'Grave Robber', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Common', description: 'Discard 1 card. Add 1 Soul to your Hand. Draw 1 card.', keywords: ['soul'] },
  { id: 'nb_negative_pulse', name: 'Negative Pulse', character: 'necrobinder', cost: 1, type: 'Attack', rarity: 'Common', description: 'Deal 6 damage. Apply 3 Doom. Osty attacks for 4 damage.', keywords: ['doom', 'osty'] },
  { id: 'nb_pull_aggro', name: 'Pull Aggro', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Common', description: 'Summon 8. Enemies target Osty until your next turn.', keywords: ['summon', 'osty'] },
  { id: 'nb_rattle', name: 'Rattle', character: 'necrobinder', cost: 0, type: 'Skill', rarity: 'Common', description: 'Osty attacks for 4 damage. Gain 4 Block.', keywords: ['osty'] },
  { id: 'nb_scourge', name: 'Scourge', character: 'necrobinder', cost: 1, type: 'Attack', rarity: 'Common', description: 'Deal 5 damage. Apply 1 Doom per unspent Energy.', keywords: ['doom'] },
  { id: 'nb_snap', name: 'Snap', character: 'necrobinder', cost: 0, type: 'Attack', rarity: 'Common', description: 'Osty attacks for 5 damage. Gain 5 Block.', keywords: ['osty'] },
  { id: 'nb_soul_harvest', name: 'Soul Harvest', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Common', description: 'Add 5 Souls to your Draw Pile.', keywords: ['soul'] },

  // Uncommon
  { id: 'nb_death_knell', name: "Death's Door", character: 'necrobinder', cost: 2, type: 'Attack', rarity: 'Uncommon', description: 'Deal 14 damage. If the enemy dies, apply their remaining Doom to the next enemy.', keywords: ['doom'] },
  { id: 'nb_end_of_days', name: 'End of Days', character: 'necrobinder', cost: 2, type: 'Skill', rarity: 'Uncommon', description: 'Apply 8 Doom to ALL enemies.', keywords: ['doom'] },
  { id: 'nb_flatten', name: 'Flatten', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Uncommon', description: 'Summon 10. Osty attacks the enemy twice.', keywords: ['summon', 'osty'] },
  { id: 'nb_grave_form', name: 'Grave Form', character: 'necrobinder', cost: 1, type: 'Power', rarity: 'Uncommon', description: 'At the start of your turn, add 1 Soul to your Hand.', keywords: ['soul'] },
  { id: 'nb_reaper', name: 'Reaper', character: 'necrobinder', cost: 2, type: 'Attack', rarity: 'Uncommon', description: 'Deal 4 damage to ALL enemies. Heal HP equal to unblocked damage.' },
  { id: 'nb_sic_em', name: "Sic 'Em", character: 'necrobinder', cost: 0, type: 'Skill', rarity: 'Uncommon', description: 'Osty attacks for 8 damage 3 times.', keywords: ['osty'] },
  { id: 'nb_shroud', name: 'Shroud', character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Uncommon', description: 'Gain Block equal to current Doom on all enemies.', keywords: ['doom'] },
  { id: 'nb_soul_burn', name: 'Soul Burn', character: 'necrobinder', cost: 0, type: 'Attack', rarity: 'Uncommon', description: 'Exhaust 1 Soul. Deal 12 damage.', keywords: ['soul'] },
  { id: 'nb_times_up', name: "Time's Up", character: 'necrobinder', cost: 1, type: 'Skill', rarity: 'Uncommon', description: 'Instantly kills an enemy at or below their Doom threshold.', keywords: ['doom'] },
  { id: 'nb_undead_fortitude', name: 'Undead Fortitude', character: 'necrobinder', cost: 1, type: 'Power', rarity: 'Uncommon', description: 'Whenever Osty would die, instead keep 1 HP.', keywords: ['osty'] },

  // Rare
  { id: 'nb_apotheosis_nb', name: 'Apotheosis', character: 'necrobinder', cost: 2, type: 'Skill', rarity: 'Rare', description: 'Summon 20. Exhaust.' , keywords: ['summon'] },
  { id: 'nb_doom_tide', name: 'Doom Tide', character: 'necrobinder', cost: 2, type: 'Power', rarity: 'Rare', description: 'At the start of your turn, apply 1 Doom to ALL enemies.', keywords: ['doom'] },
  { id: 'nb_osty_unleashed', name: 'Osty Unleashed', character: 'necrobinder', cost: 1, type: 'Power', rarity: 'Rare', description: 'Osty attacks for 5 damage at the start of each turn.', keywords: ['osty'] },
  { id: 'nb_soul_link', name: 'Soul Link', character: 'necrobinder', cost: 3, type: 'Power', rarity: 'Rare', description: 'Exhaust 1 Soul at the start of your turn. Gain 1 Energy and draw 2 cards.', keywords: ['soul'] },
  { id: 'nb_ultimate_doom', name: 'Ultimate Doom', character: 'necrobinder', cost: 3, type: 'Skill', rarity: 'Rare', description: 'Apply 20 Doom to ALL enemies. Exhaust.', keywords: ['doom'] },
]

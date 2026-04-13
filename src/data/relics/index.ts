import type { Relic } from '../../types'

export const relics: Relic[] = [
  // Starter relics
  { id: 'burning_blood', name: 'Burning Blood', character: 'ironclad', rarity: 'Starter', description: 'At the end of combat, heal 6 HP.' },
  { id: 'ring_of_snake', name: 'Ring of the Snake', character: 'silent', rarity: 'Starter', description: 'At the start of each combat, draw 2 additional cards.' },
  { id: 'divine_right', name: 'Divine Right', character: 'regent', rarity: 'Starter', description: 'At the start of each combat, gain 3 Star.' },
  { id: 'bound_phylactery', name: 'Bound Phylactery', character: 'necrobinder', rarity: 'Starter', description: 'At the start of your turn, Summon 1.' },
  { id: 'cracked_core', name: 'Cracked Core', character: 'defect', rarity: 'Starter', description: 'At the start of each combat, Channel 1 Lightning Orb.' },

  // Shared - Common
  { id: 'anchor', name: 'Anchor', character: 'shared', rarity: 'Common', description: 'Start each combat with 10 Block.' },
  { id: 'bag_of_preparation', name: 'Bag of Preparation', character: 'shared', rarity: 'Common', description: 'At the start of each combat, draw 2 additional cards.' },
  { id: 'blood_vial', name: 'Blood Vial', character: 'shared', rarity: 'Common', description: 'At the start of each combat, heal 2 HP.' },
  { id: 'book_of_five_rings', name: 'Book of Five Rings', character: 'shared', rarity: 'Common', description: 'Every 5 cards you add to your Deck, heal 15 HP.' },
  { id: 'bronze_scales', name: 'Bronze Scales', character: 'shared', rarity: 'Common', description: 'Start each combat with 3 Thorns.' },
  { id: 'centennial_puzzle', name: 'Centennial Puzzle', character: 'shared', rarity: 'Common', description: 'The first time you lose HP each combat, draw 3 cards.' },
  { id: 'festive_popper', name: 'Festive Popper', character: 'shared', rarity: 'Common', description: 'At the start of each combat, deal 9 damage to ALL enemies.' },
  { id: 'gorget', name: 'Gorget', character: 'shared', rarity: 'Common', description: 'At the start of each combat, gain 4 Plating.' },
  { id: 'happy_flower', name: 'Happy Flower', character: 'shared', rarity: 'Common', description: 'Every 3 turns, gain 1 Energy.' },
  { id: 'lantern', name: 'Lantern', character: 'shared', rarity: 'Common', description: 'Start each combat with an additional Energy.' },
  { id: 'meal_ticket', name: 'Meal Ticket', character: 'shared', rarity: 'Common', description: 'Whenever you enter a shop room, heal 15 HP.' },
  { id: 'oddly_smooth_stone', name: 'Oddly Smooth Stone', character: 'shared', rarity: 'Common', description: 'Start each combat with 1 Dexterity.' },
  { id: 'pendulum', name: 'Pendulum', character: 'shared', rarity: 'Common', description: 'Whenever you shuffle your Draw Pile, draw a card.' },
  { id: 'permafrost', name: 'Permafrost', character: 'shared', rarity: 'Common', description: 'The first time you play a Power each combat, gain 6 Block.' },
  { id: 'regal_pillow', name: 'Regal Pillow', character: 'shared', rarity: 'Common', description: 'Whenever you Rest, heal an additional 15 HP.' },
  { id: 'strawberry', name: 'Strawberry', character: 'shared', rarity: 'Common', description: 'Upon pickup, raise your Max HP by 7.' },
  { id: 'strike_dummy', name: 'Strike Dummy', character: 'shared', rarity: 'Common', description: 'Cards containing "Strike" deal 3 additional damage.' },
  { id: 'vajra', name: 'Vajra', character: 'shared', rarity: 'Common', description: 'Start each combat with 1 Strength.' },
  { id: 'whetstone', name: 'Whetstone', character: 'shared', rarity: 'Common', description: 'Upon pickup, Upgrade 2 random Attacks.' },
  { id: 'war_paint', name: 'War Paint', character: 'shared', rarity: 'Common', description: 'Upon pickup, Upgrade 2 random Skills.' },

  // Character-specific - Common
  { id: 'red_skull', name: 'Red Skull', character: 'ironclad', rarity: 'Common', description: 'While your HP is at or below 50%, you have 3 additional Strength.' },
  { id: 'snecko_skull', name: 'Snecko Skull', character: 'silent', rarity: 'Common', description: 'Whenever you apply Poison, apply an additional 1 Poison.' },
  { id: 'fencing_manual', name: 'Fencing Manual', character: 'regent', rarity: 'Common', description: 'At the start of each combat, Forge 10.' },
  { id: 'bone_flute', name: 'Bone Flute', character: 'necrobinder', rarity: 'Common', description: 'Whenever Osty attacks, gain 2 Block.' },
  { id: 'data_disk', name: 'Data Disk', character: 'defect', rarity: 'Common', description: 'Start each combat with 1 Focus.' },

  // Shared - Uncommon
  { id: 'akabeko', name: 'Akabeko', character: 'shared', rarity: 'Uncommon', description: 'At the start of each combat, gain 8 Vigor.' },
  { id: 'bag_of_marbles', name: 'Bag of Marbles', character: 'shared', rarity: 'Uncommon', description: 'At the start of each combat, apply 1 Vulnerable to ALL enemies.' },
  { id: 'bellows', name: 'Bellows', character: 'shared', rarity: 'Uncommon', description: 'The first Hand you draw each combat is Upgraded.' },
  { id: 'candelabra', name: 'Candelabra', character: 'shared', rarity: 'Uncommon', description: 'At the start of your 2nd turn, gain 2 Energy.' },
  { id: 'gremlin_horn', name: 'Gremlin Horn', character: 'shared', rarity: 'Uncommon', description: 'Whenever an enemy dies, gain Energy and draw 1 card.' },
  { id: 'horn_cleat', name: 'Horn Cleat', character: 'shared', rarity: 'Uncommon', description: 'At the start of your 2nd turn, gain 14 Block.' },
  { id: 'joss_paper', name: 'Joss Paper', character: 'shared', rarity: 'Uncommon', description: 'Every 5 times you Exhaust a card, draw 1 card.' },
  { id: 'kusarigama', name: 'Kusarigama', character: 'shared', rarity: 'Uncommon', description: 'Every time you play 3 Attacks in a single turn, deal 6 damage to a random enemy.' },
  { id: 'letter_opener', name: 'Letter Opener', character: 'shared', rarity: 'Uncommon', description: 'Every time you play 3 Skills in a single turn, deal 5 damage to ALL enemies.' },
  { id: 'mercury_hourglass', name: 'Mercury Hourglass', character: 'shared', rarity: 'Uncommon', description: 'At the start of your turn, deal 3 damage to ALL enemies.' },
  { id: 'miniature_cannon', name: 'Miniature Cannon', character: 'shared', rarity: 'Uncommon', description: 'Upgraded Attacks deal 3 additional damage.' },
  { id: 'nunchaku', name: 'Nunchaku', character: 'shared', rarity: 'Uncommon', description: 'Every time you play 10 Attacks, gain Energy.' },
  { id: 'orichalcum', name: 'Orichalcum', character: 'shared', rarity: 'Uncommon', description: 'If you end your turn without Block, gain 6 Block.' },
  { id: 'ornamental_fan', name: 'Ornamental Fan', character: 'shared', rarity: 'Uncommon', description: 'Every time you play 3 Attacks in a single turn, gain 4 Block.' },
  { id: 'pantograph', name: 'Pantograph', character: 'shared', rarity: 'Uncommon', description: 'At the start of each Boss combat, heal 25 HP.' },
  { id: 'pen_nib', name: 'Pen Nib', character: 'shared', rarity: 'Uncommon', description: 'Every 10th Attack you play deals double damage.' },
  { id: 'red_mask', name: 'Red Mask', character: 'shared', rarity: 'Uncommon', description: 'At the start of each combat, apply 1 Weak to ALL enemies.' },
  { id: 'sparkling_rouge', name: 'Sparkling Rouge', character: 'shared', rarity: 'Uncommon', description: 'At the start of your 3rd turn, gain 1 Strength and 1 Dexterity.' },
  { id: 'vambrace', name: 'Vambrace', character: 'shared', rarity: 'Uncommon', description: 'The first time you gain Block from a card each combat, double the amount gained.' },

  // Character-specific - Uncommon
  { id: 'paper_phrog', name: 'Paper Phrog', character: 'ironclad', rarity: 'Uncommon', description: 'Enemies with Vulnerable take 75% more damage rather than 50%.' },
  { id: 'self_forming_clay', name: 'Self-Forming Clay', character: 'ironclad', rarity: 'Uncommon', description: 'Whenever you lose HP in combat, gain 3 Block next turn.' },
  { id: 'tingsha', name: 'Tingsha', character: 'silent', rarity: 'Uncommon', description: 'Whenever you discard a card during your turn, deal 3 damage per card discarded.' },
  { id: 'twisted_funnel', name: 'Twisted Funnel', character: 'silent', rarity: 'Uncommon', description: 'At the start of each combat, apply 4 Poison to ALL enemies.' },
  { id: 'galactic_dust', name: 'Galactic Dust', character: 'regent', rarity: 'Uncommon', description: 'For every 10 Star spent, gain 10 Block.' },
  { id: 'regalite', name: 'Regalite', character: 'regent', rarity: 'Uncommon', description: 'Whenever you create a Colorless card, gain 2 Block.' },
  { id: 'book_repair_knife', name: 'Book Repair Knife', character: 'necrobinder', rarity: 'Uncommon', description: 'Whenever a non-Minion enemy dies to Doom, heal 3 HP.' },
  { id: 'funerary_mask', name: 'Funerary Mask', character: 'necrobinder', rarity: 'Uncommon', description: 'At the start of each combat, add 3 Souls into your Draw Pile.' },
  { id: 'gold_plated_cables', name: 'Gold-Plated Cables', character: 'defect', rarity: 'Uncommon', description: 'Your rightmost Orb triggers its passive an additional time.' },
  { id: 'symbiotic_virus', name: 'Symbiotic Virus', character: 'defect', rarity: 'Uncommon', description: 'At the start of each combat, Channel 1 Dark Orb.' },

  // Shared - Rare
  { id: 'art_of_war', name: 'Art of War', character: 'shared', rarity: 'Rare', description: 'If you do not play any Attacks during your turn, gain an additional Energy next turn.' },
  { id: 'barricade_relic', name: 'Barricade', character: 'shared', rarity: 'Rare', description: 'Prevent the next time you would receive damage.' },
  { id: 'captain_wheel', name: "Captain's Wheel", character: 'shared', rarity: 'Rare', description: 'At the start of your 3rd turn, gain 18 Block.' },
  { id: 'frozen_egg', name: 'Frozen Egg', character: 'shared', rarity: 'Rare', description: 'Whenever you add a Power into your Deck, Upgrade it.' },
  { id: 'gambling_chip', name: 'Gambling Chip', character: 'shared', rarity: 'Rare', description: 'At the start of each combat, discard any number of cards then draw that many.' },
  { id: 'game_piece', name: 'Game Piece', character: 'shared', rarity: 'Rare', description: 'Whenever you play a Power, draw 1 card.' },
  { id: 'ice_cream', name: 'Ice Cream', character: 'shared', rarity: 'Rare', description: 'Energy is now conserved between turns.' },
  { id: 'kunai', name: 'Kunai', character: 'shared', rarity: 'Rare', description: 'Every time you play 3 Attacks in a single turn, gain 1 Dexterity.' },
  { id: 'lizard_tail', name: 'Lizard Tail', character: 'shared', rarity: 'Rare', description: 'When you would die, heal to 50% of your Max HP instead (works once).' },
  { id: 'mango', name: 'Mango', character: 'shared', rarity: 'Rare', description: 'Upon pickup, raise your Max HP by 14.' },
  { id: 'meat_on_the_bone', name: 'Meat on the Bone', character: 'shared', rarity: 'Rare', description: 'If your HP is at or below 50% at end of combat, heal 12 HP.' },
  { id: 'molten_egg', name: 'Molten Egg', character: 'shared', rarity: 'Rare', description: 'Whenever you add an Attack card to your Deck, Upgrade it.' },
  { id: 'mummified_hand', name: 'Mummified Hand', character: 'shared', rarity: 'Rare', description: 'Whenever you play a Power, a random card in your Hand is free to play that turn.' },
  { id: 'pocketwatch', name: 'Pocketwatch', character: 'shared', rarity: 'Rare', description: 'Whenever you play 3 or fewer cards during your turn, draw 3 additional cards next turn.' },
  { id: 'prayer_wheel', name: 'Prayer Wheel', character: 'shared', rarity: 'Rare', description: 'Normal enemies drop an additional card reward.' },
  { id: 'razor_tooth', name: 'Razor Tooth', character: 'shared', rarity: 'Rare', description: 'Every time you play an Attack or Skill, Upgrade it for the remainder of combat.' },
  { id: 'shuriken', name: 'Shuriken', character: 'shared', rarity: 'Rare', description: 'Every time you play 3 Attacks in a single turn, gain 1 Strength.' },
  { id: 'stone_calendar', name: 'Stone Calendar', character: 'shared', rarity: 'Rare', description: 'At the end of turn 7, deal 52 damage to ALL enemies.' },
  { id: 'sturdy_clamp', name: 'Sturdy Clamp', character: 'shared', rarity: 'Rare', description: 'Up to 10 Block persists across turns.' },
  { id: 'the_courier', name: 'The Courier', character: 'shared', rarity: 'Rare', description: 'The merchant no longer runs out of cards, relics, or potions and prices reduced by 20%.' },
  { id: 'toxic_egg', name: 'Toxic Egg', character: 'shared', rarity: 'Rare', description: 'Whenever you add a Skill into your Deck, Upgrade it.' },
  { id: 'tungsten_rod', name: 'Tungsten Rod', character: 'shared', rarity: 'Rare', description: 'Whenever you would lose HP, lose 1 less.' },
  { id: 'unceasing_top', name: 'Unceasing Top', character: 'shared', rarity: 'Rare', description: 'Whenever you have no cards in Hand during your turn, draw a card.' },
  { id: 'white_beast_statue', name: 'White Beast Statue', character: 'shared', rarity: 'Rare', description: 'Potions always appear in combat rewards.' },

  // Character-specific - Rare
  { id: 'charons_ashes', name: "Charon's Ashes", character: 'ironclad', rarity: 'Rare', description: 'Whenever you Exhaust a card, deal 3 damage to ALL enemies.' },
  { id: 'demon_tongue', name: 'Demon Tongue', character: 'ironclad', rarity: 'Rare', description: 'The first time you lose HP on your turn, heal HP equal to the amount lost.' },
  { id: 'ruined_helmet', name: 'Ruined Helmet', character: 'ironclad', rarity: 'Rare', description: 'The first time you gain Strength each combat, double the amount gained.' },
  { id: 'helical_dart', name: 'Helical Dart', character: 'silent', rarity: 'Rare', description: 'Whenever you play a Shiv, gain 1 Dexterity this turn.' },
  { id: 'paper_krane', name: 'Paper Krane', character: 'silent', rarity: 'Rare', description: 'Enemies with Weak deal 40% less damage to you rather than 25%.' },
  { id: 'tough_bandages', name: 'Tough Bandages', character: 'silent', rarity: 'Rare', description: 'Whenever you discard a card during your turn, gain 3 Block.' },
  { id: 'lunar_pastry', name: 'Lunar Pastry', character: 'regent', rarity: 'Rare', description: 'At the end of your turn, gain 1 Star.' },
  { id: 'mini_regent', name: 'Mini Regent', character: 'regent', rarity: 'Rare', description: 'The first time you spend Star each turn, gain 1 Strength.' },
  { id: 'orange_dough', name: 'Orange Dough', character: 'regent', rarity: 'Rare', description: 'At the start of each combat, add 2 random Colorless cards into your Hand.' },
  { id: 'big_hat', name: 'Big Hat', character: 'necrobinder', rarity: 'Rare', description: 'At the start of each combat, add 2 random Ethereal cards into your Hand.' },
  { id: 'bookmark', name: 'Bookmark', character: 'necrobinder', rarity: 'Rare', description: 'At the end of each turn, lower the cost of a random Retained card by 1 until played.' },
  { id: 'ivory_tile', name: 'Ivory Tile', character: 'necrobinder', rarity: 'Rare', description: 'Whenever you play a card costing 3+ Energy, gain 1 Energy.' },
  { id: 'emotion_chip', name: 'Emotion Chip', character: 'defect', rarity: 'Rare', description: 'If you lost HP during the previous turn, trigger the passive ability of all Orbs at the start of your turn.' },
  { id: 'metronome', name: 'Metronome', character: 'defect', rarity: 'Rare', description: 'The first time you Channel 7 Orbs each combat, deal 30 damage to ALL enemies.' },
  { id: 'power_cell', name: 'Power Cell', character: 'defect', rarity: 'Rare', description: 'At the start of each combat, add 2 zero-cost cards from your Draw Pile into your Hand.' },
]

export function getRelicsForCharacter(character: string): Relic[] {
  return relics.filter(
    (r) => r.character === 'shared' || r.character === character
  )
}

export function searchRelics(query: string, character: string | null): Relic[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  const pool = character ? getRelicsForCharacter(character) : relics
  return pool.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q)
  )
}

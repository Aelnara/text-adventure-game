export const defaultPlayer = {
   name: '',
   classType: 'warrior',
   currentHealth: 300,
   maxHealth: 300,
   currentXP: 0,
   maxXP: 500,
   attack: 50,
   attackHitChance: 9,
   specialAttackHitChance: 6,
   level: 1,
   potion: 0,
   leveledUp: false,
   dead: false,
   scene2ambush: false,
   haveSilverKey: false,
   scene7fight: false
}

export const classTypes = {
   warrior: {
      health: 300,
      attack: 50,
      attackHitChance: 9,
      specialAttackHitChance: 6,
   },
   mage: {
      health: 200,
      attack: 70,
      attackHitChance: 7,
      specialAttackHitChance: 4,
   },
   rogue: {
      health: 250,
      attack: 60,
      attackHitChance: 8,
      specialAttackHitChance: 5,
   }
}
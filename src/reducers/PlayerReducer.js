import { defaultPlayer, classTypes } from 'components/CharacterCreation/defaultPlayer';

const reducer = (state, action) => {
   let player;
   switch (action.type) {
      case "SET_NAME":
         return {...state, name: action.value}
      case "SET_CLASS_TYPE":
         const { health, attack, attackHitChance, specialAttackHitChance } = classTypes[action.value]
         return {
            ...state, 
            classType: action.value, 
            currentHealth: health,
            maxHealth: health,
            attack,
            attackHitChance,
            specialAttackHitChance
         }
      case "HEAL_TO_FULL":
         return {...state, currentHealth: state.maxHealth}
      case "CHANGE_CURRENT_HP":
         player = {...state};
         player.currentHealth += action.value;
         if(player.currentHealth < 1){
            player.currentHealth = 0
            player.dead = true
         }
         return player
      case "CHANGE_MAX_HP":
         return {...state, maxHealth: state.maxHealth += action.value}
      case "CHANGE_POTION":
         return {...state, potion: state.potion += action.value}
      case "CHANGE_XP":
         player = {...state};
         player.currentXP += action.value;
         if(player.currentXP >= player.maxXP){
            player.currentXP -= player.maxXP
            player.maxXP = Math.floor(player.maxXP * 1.2)
            player.level++
            player.attack += 20
            player.maxHealth += 50
            player.currentHealth = player.maxHealth
            player.leveledUp = !player.leveledUp
         }
         return player
      case "CHANGE_LEVELUP_DISPLAY":
         return {...state, leveledUp: !state.leveledUp}
      case "DIED":
         return {...state, dead: true}
      case "SCENE_2_CONSEQENCE":
         return {...state, scene2ambush: true}
      case "SCENE_3_CONSEQENCE":
         return {...state, haveSilverKey: true}
      case "SCENE_7_CONSEQENCE":
         return {...state, scene7fight: true}
      case "RESET_PLAYER":
         return defaultPlayer
      default:
         return state
   }
};
export default reducer;
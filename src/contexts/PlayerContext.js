import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export function PlayerProvider(props) {
   const [player, setPlayer] = useState({
      name: 'Fuckface',
      classType: 'rogue',
      currentHealth: 200,
      maxHealth: 300,
      currentXP: 0,
      maxXP: 500,
      attack: 50,
      level: 1,
      potion: 3,
      leveledUp: false,
      dead: false,
      choices: {
         scene2ambush: false,
         haveSilverKey: false,
         scene7fight: false
      }
   });
   
   const classTypes = {
      warrior: {
         health: 300,
         attack: 50
      },
      mage: {
         health: 200,
         attack: 70
      },
      rogue: {
         health: 250,
         attack: 60
      }
   }

   const changeLevelUpDisplay = () => setPlayer(oldState => {
      const player = {...oldState};
      player.leveledUp = !player.leveledUp
      return player
   });
   
   const died = () => setPlayer(player.dead = true);
   
   const setScene2Consequence = () => setPlayer(oldState => {
      const player = {...oldState};
      player.choices.scene2ambush = true
      return player
   });
   
   const setScene3Consequence = () => setPlayer(oldState => {
      const player = {...oldState};
      player.choices.haveSilverKey = true
      return player
   });
   
   const setScene7Consequence = () => setPlayer(oldState => {
      const player = {...oldState};
      player.choices.scene7fight = true
      return player
   });
   
   const changeCurrentHP = value => setPlayer(oldState => {
      const player = {...oldState};
      player.currentHealth += value;
      if(player.currentHealth < 1){
         player.dead = true
      }
      return player
   });
   
   const potionHealToFull = () => setPlayer(oldState => {
      const player = {...oldState};
      if(player.potion > 0) {
         player.potion--
         player.currentHealth = player.maxHealth;
      }
      return player
   });
   
   const healToFull = () => setPlayer(oldState => {
      const player = {...oldState};
      player.currentHealth = player.maxHealth
      return player
   });
   
   const changeMaxHP = value => setPlayer(oldState => {
      const player = {...oldState};
      player.maxHealth += value;
      return player
   });
   
   const changePotion = value => setPlayer(oldState => {
      const player = {...oldState};
      player.potion += value;
      return player
   });
   
   const changeXP = value => setPlayer(oldState => {
      const player = {...oldState};
      player.currentXP += value;
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
   });
   
   const setName = value => setPlayer(oldState => {
      const updatedPlayer = {...oldState, name: value};
      return updatedPlayer
   });
   
   const setClassType = value => setPlayer(oldState => {
      const { health, attack } = classTypes[value]
      const updatedPlayer = {
         ...oldState, 
         classType: value, 
         currentHealth: health,
         maxHealth: health,
         attack
      };
      return updatedPlayer
   });
   
   return (
      <PlayerContext.Provider value={{ player, died, changeCurrentHP, healToFull, potionHealToFull, changeMaxHP, setName, setClassType, changeXP, changePotion, changeLevelUpDisplay, setScene2Consequence, setScene3Consequence, setScene7Consequence }}>
         {props.children}
      </PlayerContext.Provider>
   );
}
import React, { createContext, useState } from 'react';

export const EnemyContext = createContext();

export function EnemyProvider(props) {
   const [enemy, setEnemy] = useState({
      health: 0,
      attack: 0,
      XPgain: 0
   });
   
   const initializeEnemy = (health, attack, XPgain) => setEnemy(oldState => {
      const enemy = {...oldState};
      enemy.health = health
      enemy.attack = attack
      enemy.XPgain = XPgain
      return enemy
   });
   
   const changeEnemyHealth = value => setEnemy(oldState => {
      const enemy = {...oldState};
      enemy.health += value;
      if(enemy.health < 1){
         enemy.health = 0
      }
      return enemy
   });
   
   return (
      <EnemyContext.Provider value={{ enemy, initializeEnemy, changeEnemyHealth }}>
         {props.children}
      </EnemyContext.Provider>
   );
}
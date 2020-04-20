import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   CombatIntroduction: {
      width: '40%',
      fontFamily: 'Marck Script',
      fontSize: '1.5rem',
      '& span': {
         fontWeight: '700'
      }
   }
}));

export default function CombatIntroduction() {
   const classes = useStyles();
   
   return (
      <div className={classes.CombatIntroduction}>
         <h2>Combat Introduction:</h2>
         <p>The game has a turn-based combat system based around Health and Damage values.</p>
         <p>Every class has 2 abilities: a <span>Basic Attack</span> with higher hit chance and a <span>Special Attack</span> with lower hit chance but double damage.</p>
         <p>They also have a 30% crit chance on Basic Attacks to deal +20% damage. Special Attacks CAN'T crit but they always deal double damage.</p>
         <p>Every class has a <span>Dodge</span> chance of 80%.</p>
         <p>All classes are able to perform a <span>Counter Attack</span> with a 30% success chance. These attacks CAN'T crit, they do damage of your Basic Attack. If the Counter Attack is unsuccessful, you take the full damage from the enemy's attack.</p>
         <p>Every <span>Enemy Attack</span> has a 20% chance to deal +20% critical damage to the player.</p>
      </div>
   );
}
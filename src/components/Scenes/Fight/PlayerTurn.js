import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

const useStyles = makeStyles(theme => ({
   PlayerTurn: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: 'light-blue'
   },
   statDisplay: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      '& span': {
         color: '#d13030'
      }
   },
   what: {
      textAlign: 'center'
   },
   thin: {
      color: 'black !important',
      fontWeight: '400'
   }
}));

export default function PlayerTurn(props) {
   const classes = useStyles();
   const { player, dispatch } = useContext(PlayerContext);
   const { enemy, changeEnemyHealth } = useContext(EnemyContext);
   const [turnStage, setTurnStage] = useState('initial')
   
   const critDamage = player.attack + ((player.attack / 10) * 2)
   const specialDamage = player.attack * 2
   
   const attack = () => {
      const chance = Math.floor(Math.random() * 10)
      if(chance < player.attackHitChance){
         const critChance = Math.floor(Math.random() * 10)
         if(critChance < 3){
            changeEnemyHealth(-critDamage)
            setTurnStage('successfulCritHit')
         } else {
            changeEnemyHealth(-player.attack)
            setTurnStage('successfulHit')
         }
      } else {
         setTurnStage('unsuccessfulHit')
      }
   }
   
   const special = () => {
      const chance = Math.floor(Math.random() * 10)
      if(chance < player.specialAttackHitChance){
         changeEnemyHealth(-specialDamage)
         setTurnStage('successfulSpecialHit')
      } else {
         setTurnStage('unsuccessfulHit')
      }
   }
   
   const potion = () => {
      if(player.potion > 0){
         dispatch({ type: "CHANGE_POTION", value: -1 })
         dispatch({ type: "HEAL_TO_FULL" })
         setTurnStage('successfulDrink')
      } else {
         setTurnStage('unsuccessfulDrink')
      }
   }
   
   const flee = () => {
      dispatch({ type: "CHANGE_CURRENT_HP", value: -20 })
      setTurnStage('flee')
   }
   
   const abilityText = {
      warrior: {
         attack: 'Mortal Strike',
         attackChance: '(90% Hit Chance)',
         special: 'Raging Blow',
         specialChance: '(60% Hit Chance)'
      },
      mage: {
         attack: 'Fireball',
         attackChance: '(70%)',
         special: 'Meteor',
         specialChance: '(40%)'
      },
      rogue: {
         attack: 'Dagger stab',
         attackChance: '(80%)',
         special: 'Kidney stab',
         specialChance: '(50%)'
      }
   }
   
   const statDisplay = 
      <>
         <div className={classes.statDisplay}>
            <div>
               <p>Your Health: <span>{player.currentHealth}</span></p>
               <p>{abilityText[player.classType].attack} damage: {player.attack} <span className={classes.thin}>{abilityText[player.classType].attackChance}</span></p>
               <p>{abilityText[player.classType].special} damage: {player.attack * 2} <span className={classes.thin}>{abilityText[player.classType].specialChance}</span></p>
            </div>
            <div>
               <p>Enemy Health: <span>{enemy.health}</span></p>
               <p>Enemy Attack damage: {enemy.attack}</p>
            </div>
         </div>
      </>
   
   const turnStages = {
      initial: 
         <>
            <p>Now its your turn to move!!!</p>
            {statDisplay}
            <p className={classes.what}>What do you do?</p>
            <ButtonContainer>
               <Button onClick={attack} variant="contained">{abilityText[player.classType].attack}</Button>
               <Button onClick={special} variant="contained">{abilityText[player.classType].special}</Button>
               <Button onClick={potion} variant="contained">Drink</Button>
               <Button onClick={flee} variant="contained">Flee</Button>
            </ButtonContainer>
         </>,
      successfulHit: 
         <>
            <p>Your attack was successful and you dealt {player.attack} damage to your enemy!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      successfulCritHit: 
         <>
            <p>Your attack was successful and you dealt {critDamage} damage to your enemy! Critical Hit!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      successfulSpecialHit: 
         <>
            <p>Your attack was successful and you dealt {specialDamage} damage to your enemy!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      unsuccessfulHit:
         <>
            <p>The enemy avoided your attack!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      successfulDrink: 
         <>
            <p>You managed to drink a Health Potion from your inventory, your HP is restored!!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      unsuccessfulDrink:
         <>
            <p>You searched your bag for a health potion but you dont have any, dumbass!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      flee:
         <>
            <p>You tried to turn back and run but the enemy hit you.</p>
            <p>[You lost 20 Health]</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
   }
   
   const turnStageDisplay = turnStages[turnStage]
   

   return (
      <>
         {turnStageDisplay}
      </>
   );
}
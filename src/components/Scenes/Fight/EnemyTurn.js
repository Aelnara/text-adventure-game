import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

const useStyles = makeStyles(theme => ({
   EnemyTurn: {
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

export default function EnemyTurn(props) {
   const classes = useStyles();
   const { player, dispatch } = useContext(PlayerContext);
   const { enemy, changeEnemyHealth } = useContext(EnemyContext);
   const [turnStage, setTurnStage] = useState('initial')
   
   const critDamage = enemy.attack + ((enemy.attack / 10) * 2)
   
   const counter = () => {
      const chance = Math.floor(Math.random() * 10)
      if(chance < 3){
         changeEnemyHealth(-player.attack)
         setTurnStage('successfulCounter')
      } else {
         const critChance = Math.floor(Math.random() * 10)
         if(critChance < 5){
            dispatch({ type: "CHANGE_CURRENT_HP", value: -critDamage })
            setTurnStage('unsuccessfulCounterCrit')
         } else {
            dispatch({ type: "CHANGE_CURRENT_HP", value: -enemy.attack })
            setTurnStage('unsuccessfulCounter')
         }
      }
   }
   
   const dodge = () => {
      const chance = Math.floor(Math.random() * 10)
      if(chance < 8){
         setTurnStage('successfulDodge')
      } else {
         const critChance = Math.floor(Math.random() * 10)
         if(critChance < 2){
            dispatch({ type: "CHANGE_CURRENT_HP", value: -critDamage })
            setTurnStage('unsuccessfulDodgeCrit')
         } else {
            dispatch({ type: "CHANGE_CURRENT_HP", value: -enemy.attack })
            setTurnStage('unsuccessfulDodge')
         }
      }
   }
   
   const flee = () => {
      dispatch({ type: "CHANGE_CURRENT_HP", value: -enemy.attack })
      setTurnStage('flee')
   }
   
   const statDisplay = 
      <>
         <div className={classes.statDisplay}>
            <div>
               <p>Your Health: <span>{player.currentHealth}</span></p>
               <p>Counter Attack damage: {player.attack} <span className={classes.thin}>(30% Hit Chance)</span></p>
               <p>Dodge <span className={classes.thin}>(80% Chance)</span></p>
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
            <p>The enemy tries to attack you!</p>
            {statDisplay}
            <p className={classes.what}>What do you do?</p>
            <ButtonContainer>
               <Button onClick={counter} variant="contained">Counter</Button>
               <Button onClick={dodge} variant="contained">Dodge</Button>
               <Button onClick={flee} variant="contained">Flee</Button>
            </ButtonContainer>
         </>,
      successfulCounter: 
         <>
            <p>You successfully countered the attack, and you dealt {player.attack} damage to your enemy!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      unsuccessfulCounter:
         <>
            <p>Your attempt to counter failed, and you suffer {enemy.attack} damage!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      unsuccessfulCounterCrit:
         <>
            <p>Your attempt to counter failed, and you suffer {critDamage} damage! Critical Hit!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      successfulDodge: 
         <>
            <p>You successfully dodged the attack!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      unsuccessfulDodge:
         <>
            <p>Your attempt to dodge failed, and you suffer {enemy.attack} damage!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      unsuccessfulDodgeCrit:
         <>
            <p>Your attempt to dodge failed, and you suffer {critDamage} damage! Critical Hit!</p>
            {statDisplay}
            <ButtonContainer>
               <Button onClick={props.passTurn} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      flee:
         <>
            <p>Turning your back against an attacking enemy turned out to be not a very effective strategy.</p>
            <p>The enemy hit you!</p>
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
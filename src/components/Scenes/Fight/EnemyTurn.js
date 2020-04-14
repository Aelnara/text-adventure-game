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
      alignItems: 'center'
   },
   what: {
      textAlign: 'center'
   }
}));

export default function EnemyTurn(props) {
   const classes = useStyles();
   const { player, dispatch } = useContext(PlayerContext);
   const { enemy, changeEnemyHealth } = useContext(EnemyContext);
   const [turnStage, setTurnStage] = useState('initial')
   
   const counter = () => {
      const chance = Math.floor(Math.random() * 10)
      if(chance < 3){
         changeEnemyHealth(-player.attack)
         setTurnStage('successfulCounter')
      } else {
         dispatch({ type: "CHANGE_CURRENT_HP", value: -enemy.attack })
         setTurnStage('unsuccessfulCounter')
      }
   }
   
   const dodge = () => {
      const chance = Math.floor(Math.random() * 10)
      if(chance < 8){
         setTurnStage('successfulDodge')
      } else {
         dispatch({ type: "CHANGE_CURRENT_HP", value: -enemy.attack })
         setTurnStage('unsuccessfulDodge')
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
               <p>Your Health: {player.currentHealth}</p>
               <p>Your Attack damage: {player.attack}</p>
            </div>
            <div>
               <p>Enemy Health: {enemy.health}</p>
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
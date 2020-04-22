import React, { useContext, useState } from 'react';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import EnemyTurn from 'components/Scenes/Fight/EnemyTurn';
import PlayerTurn from 'components/Scenes/Fight/PlayerTurn';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';


export default function FightWolf(props) {
   const { player, dispatch } = useContext(PlayerContext);
   const { enemy, changeEnemyHealth } = useContext(EnemyContext);
   const [playerTurn, setTurn] = useState(false)
   const [wolfHowl, setWolfHowl] = useState(false)
   
   const passTurn = () => {
      setTurn(!playerTurn)
   }
   
   const howlPassTurn = () => {
      props.displayWolfPackToggle()
      changeEnemyHealth(400)
      setWolfHowl(true)
      setTurn(!playerTurn)
   }
   
   const gainXP = () => {
      dispatch({ type: "CHANGE_XP", value: enemy.XPgain })
      props.fightWon()
   }
   
   if(playerTurn) {
      if(player.currentHealth > 0) {
         return <PlayerTurn passTurn={passTurn} />
      } else {
         return <p>You died...</p>
      }
   } else {
      if(enemy.health > 0) {
         if(enemy.health < 150 & !wolfHowl){
            return (
               <>
                  <p>The wolf howled at the moon and a pack of wolves appeared around you!</p>
                  <p>This is not looking good...</p>
                  <ButtonContainer>
                     <Button onClick={howlPassTurn} variant="contained">Continue</Button>
                  </ButtonContainer>
               </>
            )
         } else {
            return <EnemyTurn passTurn={passTurn} />
         }
      } else {
         return (
            <>
               <p>You defeated your enemy!</p>
               <p>[You gained +{enemy.XPgain} XP]</p>
               <ButtonContainer>
                  <Button onClick={gainXP} variant="contained">Continue</Button>
               </ButtonContainer>
            </>
         )
      }
   }
}
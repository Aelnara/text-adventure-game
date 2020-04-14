import React, { useContext, useState } from 'react';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import EnemyTurn from 'components/Scenes/Fight/EnemyTurn';
import PlayerTurn from 'components/Scenes/Fight/PlayerTurn';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';


export default function Fight(props) {
   const { player, dispatch } = useContext(PlayerContext);
   const { enemy } = useContext(EnemyContext);
   const [playerTurn, setTurn] = useState(false)
   
   const passTurn = () => {
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
         return <EnemyTurn passTurn={passTurn} />
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
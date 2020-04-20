import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

const useStyles = makeStyles(theme => ({
   Outro: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5rem',
      fontFamily: 'Marck Script',
      fontSize: '1.5rem',
      fontWeight: '700',
      '& p': {
         textAlign: 'center'
      }
   },
}));

export default function Outro() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { dispatch } = useContext(PlayerContext);
   
   const restart = () => {
      dispatch({ type: "RESET_PLAYER" })
      changeGameStage('characterCreation')
   }
   
   return (
      <div className={classes.Outro}>
         <h1>You finished the game!</h1>
         <p>Thank you for playing this Text-based Adventure Game!</p>
         <p>I hope you enjoyed it as much as i enjoyed making it. =)</p>
         <p>If you are unhappy with your ending, give the game another try!</p>
         <p>There are plenty of choices you could have made differently.</p>
         <ButtonContainer>
            <Button onClick={restart} variant="contained" color="primary">Restart Game</Button>
         </ButtonContainer>
      </div>
   );
}
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';
import papyrus from 'assets/images/papyrus-2.png';

const useStyles = makeStyles(theme => ({
   Dead: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '50',
      backgroundColor: 'rgba(0,0,0,0.70)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   },
   container: {
      width: '60%',
      height: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '15px',
      background: `no-repeat url(${papyrus})`,
      backgroundSize: 'contain',
      fontFamily: 'Marck Script',
      '& h1': {
         fontSize: '4rem'
      }
   }
}));

export default function Dead() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { resetPlayer } = useContext(PlayerContext);
   
   const restart = () => {
      resetPlayer()
      changeGameStage('characterCreation')
   }
   
   return (
      <div className={classes.Dead}>
         <div className={classes.container}>
            <h1>You Died</h1>
            <h2>What a loser...</h2>
            <ButtonContainer>
               <Button onClick={restart} variant="contained" color="primary">Restart Game</Button>
            </ButtonContainer>
         </div>
      </div>
   );
}
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PlayerContext } from 'contexts/PlayerContext';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';
import papyrus from 'assets/images/papyrus-2.png';

const useStyles = makeStyles(theme => ({
   LevelUp: {
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
         fontSize: '3rem'
      },
      '& h3': {
         margin: '0.5rem'
      }
   }
}));

export default function LevelUp() {
   const classes = useStyles();
   const { dispatch } = useContext(PlayerContext);
   
   const handleContinue = () => {
      dispatch({ type: "CHANGE_LEVELUP_DISPLAY" })
   }
   
   return (
      <div className={classes.LevelUp}>
         <div className={classes.container}>
            <h1>Congratulations! You leveled up!</h1>
            <h3>[Attack Power increased by +20]</h3>
            <h3>[Max health increased by +50]</h3>
            <h3>[Health restored to maximum]</h3>
            <ButtonContainer>
               <Button onClick={handleContinue} variant="contained" color="primary">Continue</Button>
            </ButtonContainer>
         </div>
      </div>
   );
}
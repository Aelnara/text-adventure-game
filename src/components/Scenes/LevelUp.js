import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PlayerContext } from 'contexts/PlayerContext';
import Button from '@material-ui/core/Button';

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
      backgroundColor: '#7b9683',
      '& h3': {
         margin: '0.5rem'
      }
   }
}));

export default function LevelUp() {
   const classes = useStyles();
   const { changeLevelUpDisplay } = useContext(PlayerContext);
   
   const handleContinue = () => {
      changeLevelUpDisplay()
   }
   
   return (
      <div className={classes.LevelUp}>
         <div className={classes.container}>
            <h1>Congratulations! You leveled up!</h1>
            <h3>[Attack Power increased by +20]</h3>
            <h3>[Max health increased by +50]</h3>
            <h3>[Health restored to maximum]</h3>
            <Button onClick={handleContinue} variant="contained" color="primary">Continue</Button>
         </div>
      </div>
   );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
   
   const restart = () => {
      
   }
   
   return (
      <div className={classes.LevelUp}>
         <div className={classes.container}>
            <h1>YOU DIED!</h1>
            <p>What a fucking loser...</p>
            <Button onClick={restart} variant="contained" color="primary">Restart Game</Button>
         </div>
      </div>
   );
}
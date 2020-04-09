import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   Outro: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5rem',
      '& p': {
         textAlign: 'center',
         fontSize: '1.5rem',
         fontWeight: '500'
      },
      '& button': {
         padding: '0.5rem 2rem',
         margin: '3rem'
      }
   },
}));

export default function Outro() {
   const classes = useStyles();
   
   return (
      <div className={classes.Outro}>
         <h1>You finished the game!</h1>
         <p>Thank you for playing this Text-based Adventure Game!</p>
         <p>I hope you enjoyed it as much as i enjoyed making it. =)</p>
         <p>If you are unhappy with your ending, give the game another try!</p>
         <p>There are plenty of choices you could have made differently.</p>
      </div>
   );
}
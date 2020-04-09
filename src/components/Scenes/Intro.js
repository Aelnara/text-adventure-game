import React, { useContext } from 'react';
import { GameStageContext } from 'contexts/GameStageContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
   Intro: {
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

export default function Intro() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   
   const handleChange = () => {
      changeGameStage('characterCreation')
   }
   
   return (
      <div className={classes.Intro}>
         <h1>Welcome to my text-based Adventure Game!</h1>
         <p>Most of the time the game will provide you the key words of the available choices but there will be situations when you have to figure out the answeres on your own so be careful when you type!</p>
         <p>Keep in mind that your chosen answeres may have further impact on the story!</p>
         <p>If you die, your game is over and you have to start everything over!</p>
         <Button onClick={handleChange} variant="contained" color="primary">Start</Button>
      </div>
   );
}
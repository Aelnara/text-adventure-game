import React, { useContext } from 'react';
import { PlayerContext } from 'contexts/PlayerContext';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
   healthContainer: {
      width: '300px',
      height: '30px',
      border: '4px solid #6b280c',
      borderRadius: '5px',
      position: 'relative',
      // boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dedbd5',
      overflow: 'hidden',
      '& h4': {
         margin: 'auto',
         position: 'absolute',
      }
   },
   healthBar: {
      height: '100%',
      backgroundColor: '#d13030',
      // padding: '0 !important',
      position: 'absolute',
      left: '0'
   }
}));

export default function HealthBar() {
   const { player } = useContext(PlayerContext);
   const classes = useStyles();
   
   const playerHP = `Health: ${player.currentHealth} / ${player.maxHealth}`
   const playerHPwidth = `${player.currentHealth / player.maxHealth * 100}%`
   
   return (
      <div className={classes.healthContainer}>
         <div className={classes.healthBar} style={{width: playerHPwidth}}/>
         <h4>{playerHP}</h4>
      </div>
   );
}
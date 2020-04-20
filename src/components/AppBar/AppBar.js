import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PlayerContext } from 'contexts/PlayerContext';
import HealthBar from 'components/HealthBar/HealthBar';
import potion from 'assets/images/health-potion.png';
import warrior from 'assets/images/classes/warrior.png';
import mage from 'assets/images/classes/mage.png';
import rogue from 'assets/images/classes/rogue.png';

const useStyles = makeStyles(theme => ({
   AppBar: {
      width: '100%',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem',
      borderBottom: '4px solid black',
      boxSizing: 'border-box',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '100',
      background: 'linear-gradient(180deg, rgba(131,125,125,1) 0%, rgba(86,86,91,1) 45%, rgba(86,86,91,1) 55%, rgba(131,125,125,1) 100%)',
      '& h1': {
         fontSize: '1.5rem',
         padding: '0 2rem'
      }
   },
   classIcon: {
      height: '30px'
   },
   potion: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem',
      '& img': {
         height: '30px'
      },
      '& h1': {
         padding: '0'
      }
   }
}));

export default function Game() {
   const classes = useStyles();
   const { player } = useContext(PlayerContext);
   
   const playerNameDisplay = `${player.name} (${player.classType})`
   const playerLevelDisplay = `Level: ${player.level}`
   const playerXPDisplay = `Experience: ${player.currentXP} / ${player.maxXP}`
   
   const classIcon = {
      warrior: warrior,
      mage: mage,
      rogue: rogue
   }
   
   const classIconSrc = classIcon[player.classType]
   
   return (
      <div className={classes.AppBar}>
         <img className={classes.classIcon} src={classIconSrc} alt="classIcon"/>
         <h1>{playerNameDisplay}</h1>
         <HealthBar />
         <h1>{playerLevelDisplay}</h1>
         <h1>{playerXPDisplay}</h1>
         <div className={classes.potion}>
            <img src={potion} alt="potion"/>
            <h1>×{player.potion}</h1>
         </div>
      </div>
   );
}
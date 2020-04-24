import React, { useContext } from 'react';
import { PlayerContext } from 'contexts/PlayerContext';
import { GameStageContext } from 'contexts/GameStageContext';
import Button from '@material-ui/core/Button';
import HealthBar from 'components/HealthBar/HealthBar';
import AppBarStyles from './AppBarStyles';
import potion from 'assets/images/health-potion.png';
import warrior from 'assets/images/classes/warrior.png';
import mage from 'assets/images/classes/mage.png';
import rogue from 'assets/images/classes/rogue.png';

export default function AppBar(props) {
   const classes = AppBarStyles();
   const { player, dispatch } = useContext(PlayerContext);
   const { gameStage, changeGameStage } = useContext(GameStageContext);
   
   const playerNameDisplay = `${player.name} (${player.classType})`
   const playerLevelDisplay = `Level: ${player.level}`
   const playerXPDisplay = `Experience: ${player.currentXP} / ${player.maxXP}`
   
   const classIcon = {
      warrior: warrior,
      mage: mage,
      rogue: rogue
   }
   
   const classIconSrc = classIcon[player.classType]
   
   const save = () => {
      const saveFile = {
         player,
         scene: gameStage
      }
      window.localStorage.setItem('rpg-game-saves', JSON.stringify(saveFile));
   }
   
   const load = () => {
      try {
         const value = JSON.parse(window.localStorage.getItem('rpg-game-saves'))
         changeGameStage(value.scene)
         props.resetScene()
         dispatch({ type: "LOAD_PLAYER", loadedPlayer: value.player })
      } catch (e) {
         
      }
   }
   
   const disabled = props.sceneStage === 'initial' ? false : true
   
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
         <div className={classes.buttonContainer}>
            <Button onClick={save} disabled={disabled}>Save</Button>
            <Button onClick={load}>Load</Button>
         </div>
      </div>
   );
}
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import AppBar from 'components/AppBar/AppBar';
import Fight from 'components/Scenes/Fight/Fight';
import TextContainer from 'components/Layouts/TextContainer';
import Background from 'components/Layouts/Background';
import backgroundImg from 'assets/images/environment/environment-forest-1.png';
import soldiers from 'assets/images/enemies/enemy-soldiers-2.png';
import Enemy from 'components/Layouts/Enemy';
import StageInitial from './StageInitial';
import StageFightWon from './StageFightWon';
import StageComfront from './StageComfront';
import StageHide from './StageHide';
import StageSuccessfulHide from './StageSuccessfulHide';
import StageSuccessfulHideRogue from './StageSuccessfulHideRogue';
import StageUnsuccessfulHide from './StageUnsuccessfulHide';

const useStyles = makeStyles(theme => ({
   Scene9: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(46,46,108,1) 0%, rgba(62,62,135,1) 30%, rgba(162,162,228,1) 100%)'
   }
}));

export default function Scene9() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, changeXP, changePotion } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displayEnemy, setDisplayEnemy] = useState(true)
   
   const goToScene10 = () => {
      changeGameStage('scene10')
   }
   
   const soldiersFight = () => {
      initializeEnemy(600, 150, 600)
      setSceneStage('soldiersFight')
   }
   
   const fightWon = () => {
      setDisplayEnemy(false)
      setSceneStage('fightWon')
   }
   
   const choiceComfront = () => {
      if(!player.choices.scene7fight){
         changePotion(1)
      }
      setSceneStage('comfront')
   }
   
   const choiceHide = () => {
      setSceneStage('hide')
   }
   
   const hideProceed = () => {
      if(player.classType === 'rogue'){
         if(player.choices.scene7fight){
            const chance = Math.floor(Math.random() * 2)
            if(chance > 0){
               setSceneStage('unsuccessfulHide')
            } else {
               changeXP(400)
               setSceneStage('successfulHideRogue')
            }
         } else {
            setSceneStage('successfulHide')
         }
      } else {
         if(player.choices.scene7fight){
            setSceneStage('unsuccessfulHide')
         } else {
            setSceneStage('successfulHide')
         }
      }
   }
   
   const sceneStages = {
      initial: <StageInitial choiceComfront={choiceComfront} choiceHide={choiceHide} />,
      comfront: <StageComfront soldiersDied={player.choices.scene7fight} soldiersFight={soldiersFight} goToScene10={goToScene10} />,
      soldiersFight: <Fight fightWon={fightWon} />,
      fightWon: <StageFightWon goToScene10={goToScene10} />,
      hide: <StageHide hideProceed={hideProceed} />,
      successfulHide: <StageSuccessfulHide goToScene10={goToScene10} />,
      successfulHideRogue: <StageSuccessfulHideRogue goToScene10={goToScene10} />,
      unsuccessfulHide: <StageUnsuccessfulHide soldiersFight={soldiersFight} />
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene9}>
         <AppBar />
         <Background img={backgroundImg} />
         {displayEnemy && <Enemy enemyImage={soldiers} />}
         <TextContainer>
            <h2>Scene 9:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
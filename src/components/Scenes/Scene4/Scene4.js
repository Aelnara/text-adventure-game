import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import AppBar from 'components/AppBar/AppBar';
import Fight from 'components/Scenes/Fight/Fight';
import TextContainer from 'components/Layouts/TextContainer';
import Background from 'components/Layouts/Background';
import Enemy from 'components/Layouts/Enemy';
import backgroundImg from 'assets/images/environment/environment-forest-3.png';
import stranger from 'assets/images/enemies/enemy-stranger-1.png';
import StageInitial from './StageInitial';
import StageFightWon from './StageFightWon';
import StageMoveOn from './StageMoveOn';
import StageRest from './StageRest';

const useStyles = makeStyles(theme => ({
   Scene4: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(80,80,195,1) 0%, rgba(115,115,219,1) 25%, rgba(162,162,228,1) 100%)'
   }
}));

export default function Scene4() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, dispatch } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displayEnemy, setDisplayEnemy] = useState(false)
   
   const goToHint1 = () => {
      changeGameStage('hint1')
   }
   
   const resetScene = () => {
      setSceneStage('initial')
      setDisplayEnemy(false)
   }
   
   const fight = () => {
      initializeEnemy(350, 60, 300)
      setDisplayEnemy(true)
      setSceneStage('fight')
   }
   
   const fightWon = () => {
      dispatch({ type: "CHANGE_POTION", value: 1 })
      setDisplayEnemy(false)
      setSceneStage('fightWon')
   }
   
   const choiceRest = () => {
      if(!player.scene2ambush) {
         dispatch({ type: "HEAL_TO_FULL" })
      }
      setSceneStage('rest')
   }
   
   const choiceMoveOn = () => {
      setSceneStage('moveOn')
   }
   
   const sceneStages = {
      initial: <StageInitial choiceRest={choiceRest} choiceMoveOn={choiceMoveOn} />,
      rest: <StageRest disturbed={player.scene2ambush} goToHint1={goToHint1} fight={fight} />,
      fight: <Fight fightWon={fightWon} />,
      fightWon: <StageFightWon goToHint1={goToHint1} />,
      moveOn: <StageMoveOn goToHint1={goToHint1} />
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene4}>
         <AppBar sceneStage={sceneStage} resetScene={resetScene} />
         <Background img={backgroundImg} />
         <CSSTransition in={displayEnemy} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={stranger} />
         </CSSTransition>
         <TextContainer>
            <h2>Scene 4:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
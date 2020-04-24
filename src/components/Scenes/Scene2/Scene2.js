import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import AppBar from 'components/AppBar/AppBar';
import TextContainer from 'components/Layouts/TextContainer';
import Background from 'components/Layouts/Background';
import Enemy from 'components/Layouts/Enemy';
import backgroundImg from 'assets/images/environment/environment-forest-3.png';
import stranger from 'assets/images/enemies/enemy-stranger-1.png';
import StageInitial from './StageInitial';
import StageAmbush from './StageAmbush';
import StageHelp from './StageHelp';

const useStyles = makeStyles(theme => ({
   Scene2: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(80,80,195,1) 0%, rgba(115,115,219,1) 25%, rgba(162,162,228,1) 100%)'
   }
}));

export default function Scene2() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, dispatch } = useContext(PlayerContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displayEnemy, setDisplayEnemy] = useState(true)
   
   const goToScene3 = () => {
      changeGameStage('scene3')
   }
   
   const resetScene = () => {
      setSceneStage('initial')
      setDisplayEnemy(true)
   }
   
   const choiceHelp = () => {
      setSceneStage('help')
      dispatch({ type: "CHANGE_POTION", value: 1 })
      dispatch({ type: "CHANGE_XP", value: 200 })
   }
   
   const choiceAmbush = () => {
      setDisplayEnemy(false)
      setSceneStage('ambush')
      if(player.classType === 'rogue') {
         dispatch({ type: "CHANGE_XP", value: 400 })
      } else {
         dispatch({ type: "SCENE_2_CONSEQENCE" })
         dispatch({ type: "CHANGE_CURRENT_HP", value: -20 })
      }
   }
   
   const sceneStages = {
      initial: <StageInitial choiceAmbush={choiceAmbush} choiceHelp={choiceHelp} />,
      help: <StageHelp goToScene3={goToScene3} />,
      ambush: <StageAmbush classType={player.classType} goToScene3={goToScene3} />
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene2}>
         <AppBar sceneStage={sceneStage} resetScene={resetScene} />
         <Background img={backgroundImg} />
         <CSSTransition in={displayEnemy} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={stranger} />
         </CSSTransition>
         <TextContainer>
            <h2>Scene 2:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
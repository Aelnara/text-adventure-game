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
import backgroundImg from 'assets/images/environment/environment-forest-1.png';
import bandit1 from 'assets/images/enemies/enemy-bandit-1.png';
import bandit4 from 'assets/images/enemies/enemy-bandit-4.png';
import StageInitial from './StageInitial';
import StageFightWon from './StageFightWon';
import StageMoveOn from './StageMoveOn';
import StageSearchCamp from './StageSearchCamp';
import StageSearchCampAmbush from './StageSearchCampAmbush';
import StageSearchCampFightWon from './StageSearchCampFightWon';

const useStyles = makeStyles(theme => ({
   Scene3: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(80,80,195,1) 0%, rgba(115,115,219,1) 25%, rgba(162,162,228,1) 100%)'
   }
}));

export default function Scene3() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { dispatch } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displayFirstBandit, setDisplayFirstBandit] = useState(false)
   const [displaySecondBandit, setDisplaySecondBandit] = useState(false)
   
   const goToScene4 = () => {
      changeGameStage('scene4')
   }
   
   const resetScene = () => {
      setSceneStage('initial')
      setDisplayFirstBandit(false)
      setDisplaySecondBandit(false)
   }

   const fight = () => {
      initializeEnemy(300, 60, 300)
      setDisplayFirstBandit(true)
      setSceneStage('fight')
   }
   
   const fightWon = () => {
      setDisplayFirstBandit(false)
      setSceneStage('fightWon')
   }
   
   const searchCampFight = () => {
      initializeEnemy(250, 50, 200)
      setSceneStage('searchCampFight')
   }
   
   const searchCampFightWon = () => {
      setDisplaySecondBandit(false)
      setSceneStage('searchCampFightWon')
   }
   
   const moveOn = () => {
      setSceneStage('moveOn')
   }
   
   const searchCamp = () => {
      dispatch({ type: "SCENE_3_CONSEQENCE" })
      setSceneStage('searchCamp')
   }
   
   const searchCampAmbush = () => {
      setDisplaySecondBandit(true)
      setSceneStage('searchCampAmbush')
   }
   
   const sceneStages = {
      initial: <StageInitial fight={fight} />,
      fight: <Fight fightWon={fightWon} />,
      fightWon: <StageFightWon searchCamp={searchCamp} moveOn={moveOn} />,
      moveOn: <StageMoveOn goToScene4={goToScene4} />,
      searchCamp: <StageSearchCamp searchCampAmbush={searchCampAmbush}/>,
      searchCampAmbush: <StageSearchCampAmbush searchCampFight={searchCampFight} />,
      searchCampFight: <Fight fightWon={searchCampFightWon} />,
      searchCampFightWon: <StageSearchCampFightWon goToScene4={goToScene4} />,
   }
   
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene3}>
         <AppBar sceneStage={sceneStage} resetScene={resetScene} />
         <Background img={backgroundImg} />
         <CSSTransition in={displayFirstBandit} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={bandit1} />
         </CSSTransition>
         <CSSTransition in={displaySecondBandit} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={bandit4} />
         </CSSTransition>
         <TextContainer>
            <h2>Scene 3:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
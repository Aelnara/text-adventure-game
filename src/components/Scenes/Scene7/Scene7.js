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
import soldiers from 'assets/images/enemies/enemy-soldiers-1.png';
import hunter from 'assets/images/enemies/enemy-hunter-1.png';
import StageInitial from './StageInitial';
import StageChoiceLeftPath from './StageChoiceLeftPath';
import StageLeftIntervene from './StageLeftIntervene';
import StageInterveneFightWon from './StageInterveneFightWon';
import StageLeftMoveOn from './StageLeftMoveOn';
import StageChoiceRightPath from './StageChoiceRightPath';
import StageRightSearch from './StageRightSearch';
import StageRightSearchProceed from './StageRightSearchProceed';
import StageSearchFightWon from './StageSearchFightWon';
import StageRightMoveOn from './StageRightMoveOn';

const useStyles = makeStyles(theme => ({
   Scene7: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(46,46,108,1) 0%, rgba(62,62,135,1) 30%, rgba(162,162,228,1) 100%)'
   }
}));

export default function Scene7() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { dispatch } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displaySoldiers, setDisplaySoldiers] = useState(false)
   const [displayHunter, setDisplayHunter] = useState(false)
   
   const goToScene8 = () => {
      changeGameStage('scene8')
   }
   
   const leftInterveneFight = () => {
      initializeEnemy(450, 90, 400)
      setSceneStage('leftInterveneFight')
   }
   
   const interveneFightWon = () => {
      dispatch({ type: "SCENE_7_CONSEQENCE" })
      dispatch({ type: "CHANGE_POTION", value: 1 })
      setDisplaySoldiers(false)
      setSceneStage('interveneFightWon')
   }
   
   const rightSearchFight = () => {
      initializeEnemy(400, 80, 300)
      setSceneStage('rightSearchFight')
   }
   
   const searchFightWon = () => {
      setDisplayHunter(false)
      setSceneStage('searchFightWon')
   }
   
   const choiceLeftPath = () => {
      setDisplaySoldiers(true)
      setSceneStage('choiceLeftPath')
   }
   
   const leftIntervene = () => {
      setSceneStage('leftIntervene')
   }
   
   const leftMoveOn = () => {
      setDisplaySoldiers(false)
      setSceneStage('leftMoveOn')
   }
   
   const choiceRightPath = () => {
      setSceneStage('choiceRightPath')
   }
   
   const rightSearch = () => {
      dispatch({ type: "CHANGE_POTION", value: 2 })
      setSceneStage('rightSearch')
   }
   
   const rightSearchProceed = () => {
      setDisplayHunter(true)
      setSceneStage('rightSearchProceed')
   }
   
   const rightMoveOn = () => {
      setSceneStage('rightMoveOn')
   }
   
   
   const sceneStages = {
      initial: <StageInitial choiceLeftPath={choiceLeftPath} choiceRightPath={choiceRightPath} />,
      choiceLeftPath: <StageChoiceLeftPath leftIntervene={leftIntervene} leftMoveOn={leftMoveOn} />,
      leftIntervene: <StageLeftIntervene leftInterveneFight={leftInterveneFight} leftMoveOn={leftMoveOn} />,
      leftInterveneFight: <Fight fightWon={interveneFightWon} />,
      interveneFightWon: <StageInterveneFightWon goToScene8={goToScene8} />,
      leftMoveOn: <StageLeftMoveOn goToScene8={goToScene8} />,
      choiceRightPath: <StageChoiceRightPath rightSearch={rightSearch} rightMoveOn={rightMoveOn} />,
      rightSearch: <StageRightSearch rightSearchProceed={rightSearchProceed} />,
      rightSearchProceed: <StageRightSearchProceed rightSearchFight={rightSearchFight} />,
      rightSearchFight: <Fight fightWon={searchFightWon} />,
      searchFightWon: <StageSearchFightWon goToScene8={goToScene8} />,
      rightMoveOn: <StageRightMoveOn goToScene8={goToScene8} />
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene7}>
         <AppBar />
         <Background img={backgroundImg} />
         <CSSTransition in={displaySoldiers} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={soldiers} />
         </CSSTransition>
         <CSSTransition in={displayHunter} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={hunter} />
         </CSSTransition>
         <TextContainer>
            <h2>Scene 7:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
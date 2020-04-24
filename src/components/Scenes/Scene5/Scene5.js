import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import AppBar from 'components/AppBar/AppBar';
import Fight from 'components/Scenes/Fight/Fight';
import FightWolf from 'components/Scenes/FightWolf/FightWolf';
import TextContainer from 'components/Layouts/TextContainer';
import Background from 'components/Layouts/Background';
import Enemy from 'components/Layouts/Enemy';
import backgroundImg from 'assets/images/environment/environment-forest-1.png';
import wolf from 'assets/images/enemies/enemy-wolf-1.png';
import wolfpack from 'assets/images/enemies/enemy-wolf-pack-1.png';
import boar from 'assets/images/enemies/enemy-boar-1.png';
import StageInitial from './StageInitial';
import StageMagePlayer from './StageMagePlayer';
import StageFightWon from './StageFightWon';
import StageMoveOn from './StageMoveOn';
import StageRest from './StageRest';
import StageBoarFightWon from './StageBoarFightWon';
import StageSuccessfulCalm from './StageSuccessfulCalm';
import StageUnsuccessfulCalm from './StageUnsuccessfulCalm';

const useStyles = makeStyles(theme => ({
   Scene5: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(46,46,108,1) 0%, rgba(62,62,135,1) 30%, rgba(162,162,228,1) 100%)'
   },
   pack: {
      background: `right / contain no-repeat url(${wolfpack})`,
      width: '80%',
      height: '400px',
      position: 'absolute',
      zIndex: '10',
      bottom: '40%',
      left: '10px'
   }
}));

export default function Scene5() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, dispatch } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [isDisturbed, setIsDisturbed] = useState(false)
   const [displayWolf, setDisplayWolf] = useState(false)
   const [displayWolfPack, setDisplayWolfPack] = useState(false)
   const [displayBoar, setDisplayBoar] = useState(false)
   
   const goToScene6 = () => {
      changeGameStage('scene6')
   }
   
   const resetScene = () => {
      setSceneStage('initial')
      setDisplayWolf(false)
      setDisplayWolfPack(false)
      setDisplayBoar(false)
   }
   
   const proceed = () => {
      if(player.classType === 'mage'){
         setSceneStage('magePlayer')
      } else {
         fight()
      }
   }
   
   const fight = () => {
      initializeEnemy(300, 70, 400)
      setDisplayWolf(true)
      setSceneStage('fight')
   }
   
   const displayWolfPackToggle = () => {
      setDisplayWolfPack(true)
   }
   
   const fightWon = () => {
      setDisplayWolf(false)
      setDisplayWolfPack(false)
      setSceneStage('fightWon')
   }
   
   const boarFight = () => {
      initializeEnemy(300, 60, 200)
      setDisplayBoar(true)
      setSceneStage('boarFight')
   }
   
   const boarFightWon = () => {
      setDisplayBoar(false)
      setSceneStage('boarFightWon')
   }
   
   const choiceCalm = () => {
      const chance = Math.floor(Math.random() * 2)
      if(chance > 0){
         dispatch({ type: "CHANGE_XP", value: 300 })
         setSceneStage('successfulCalm')
      } else {
         dispatch({ type: "CHANGE_CURRENT_HP", value: -30 })
         setSceneStage('unsuccessfulCalm')
      }
   }
   
   const choiceRest = () => {
      const chance = Math.floor(Math.random() * 3)
      if(chance > 0){
         dispatch({ type: "HEAL_TO_FULL" })
      } else {
         setIsDisturbed(true)
      }
      setSceneStage('rest')
   }
   
   const choiceMoveOn = () => {
      setSceneStage('moveOn')
   }
   
   const sceneStages = {
      initial: <StageInitial proceed={proceed} />,
      magePlayer: <StageMagePlayer choiceCalm={choiceCalm} fight={fight} />,
      successfulCalm: <StageSuccessfulCalm fightWon={fightWon} />,
      unsuccessfulCalm: <StageUnsuccessfulCalm fight={fight} />,
      fight: <FightWolf fightWon={fightWon} displayWolfPackToggle={displayWolfPackToggle} />,
      fightWon: <StageFightWon choiceRest={choiceRest} choiceMoveOn={choiceMoveOn} />,
      rest: <StageRest disturbed={isDisturbed} goToScene6={goToScene6} boarFight={boarFight} />,
      moveOn: <StageMoveOn goToScene6={goToScene6} />,
      boarFight: <Fight fightWon={boarFightWon} />,
      boarFightWon: <StageBoarFightWon goToScene6={goToScene6} />,
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene5}>
         <AppBar sceneStage={sceneStage} resetScene={resetScene} />
         <Background img={backgroundImg} />
         <CSSTransition in={displayWolf} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={wolf} />
         </CSSTransition>
         <CSSTransition in={displayWolfPack} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <div className={classes.pack} />
         </CSSTransition>
         <CSSTransition in={displayBoar} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={boar} />
         </CSSTransition>
         <TextContainer>
            <h2>Scene 5:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
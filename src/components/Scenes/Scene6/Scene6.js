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
import giant from 'assets/images/enemies/enemy-giant-1.png';
import StageInitial from './StageInitial';
import StageInvestigate from './StageInvestigate';
import StageRuinsAttack from './StageRuinsAttack';
import StageRuinsMoveOn from './StageRuinsMoveOn';
import StageFightWon from './StageFightWon';
import StageMoveOn from './StageMoveOn';
import StageSpringRest from './StageSpringRest';
import StageSpringMoveOn from './StageSpringMoveOn';

const useStyles = makeStyles(theme => ({
   Scene6: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(46,46,108,1) 0%, rgba(62,62,135,1) 30%, rgba(162,162,228,1) 100%)'
   }
}));

export default function Scene6() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, dispatch } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displayEnemy, setDisplayEnemy] = useState(false)
   
   const goToScene7 = () => {
      changeGameStage('scene7')
   }
   
   const resetScene = () => {
      setSceneStage('initial')
      setDisplayEnemy(false)
   }
   
   const ruinsFight = () => {
      initializeEnemy(400, 110, 400)
      setSceneStage('fight')
   }
   
   const fightWon = () => {
      if(player.haveSilverKey){
         dispatch({ type: "CHANGE_POTION", value: 1 })
         dispatch({ type: "CHANGE_XP", value: 200 })
      }
      setDisplayEnemy(false)
      setSceneStage('fightWon')
   }
   
   const choiceInvestigate = () => {
      setDisplayEnemy(true)
      setSceneStage('investigate')
   }
   
   const choiceMoveOn = () => {
      setSceneStage('moveOn')
   }
   
   const ruinsAttack = () => {
      setSceneStage('ruinsAttack')
   }
   
   const ruinsMoveOn = () => {
      setDisplayEnemy(false)
      setSceneStage('ruinsMoveOn')
   }
   
   const springRest = () => {
      dispatch({ type: "HEAL_TO_FULL" })
      setSceneStage('springRest')
   }
   
   const springMoveOn = () => {
      setSceneStage('springMoveOn')
   }
   
   const sceneStages = {
      initial: <StageInitial choiceInvestigate={choiceInvestigate} choiceMoveOn={choiceMoveOn} />,
      investigate: <StageInvestigate ruinsAttack={ruinsAttack} ruinsMoveOn={ruinsMoveOn} />,
      ruinsAttack: <StageRuinsAttack ruinsFight={ruinsFight} />,
      ruinsMoveOn: <StageRuinsMoveOn goToScene7={goToScene7} />,
      fight: <Fight fightWon={fightWon} />,
      fightWon: <StageFightWon haveKey={player.haveSilverKey} goToScene7={goToScene7} />,
      moveOn: <StageMoveOn springRest={springRest} springMoveOn={springMoveOn} />,
      springRest: <StageSpringRest goToScene7={goToScene7} />,
      springMoveOn: <StageSpringMoveOn goToScene7={goToScene7} />
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene6}>
         <AppBar sceneStage={sceneStage} resetScene={resetScene} />
         <Background img={backgroundImg} />
         <CSSTransition in={displayEnemy} timeout={600} mountOnEnter unmountOnExit classNames="enemy">
            <Enemy enemyImage={giant} />
         </CSSTransition>
         <TextContainer>
            <h2>Scene 6:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
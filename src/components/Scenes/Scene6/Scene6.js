import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import AppBar from 'components/AppBar/AppBar';
import Fight from 'components/Scenes/Fight/Fight';
import TextContainer from 'components/Layouts/TextContainer';
import Background from 'components/Layouts/Background';
import backgroundImg from 'assets/images/environment/environment-forest-3.png';
import giant from 'assets/images/enemies/enemy-giant-1.png';
import Enemy from 'components/Layouts/Enemy';
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
   const { player, healToFull, changePotion, changeXP } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displayEnemy, setDisplayEnemy] = useState(false)
   
   const goToScene7 = () => {
      changeGameStage('scene7')
   }
   
   const ruinsFight = () => {
      initializeEnemy(300, 100, 400)
      setSceneStage('fight')
   }
   
   const fightWon = () => {
      if(player.choices.haveSilverKey){
         changePotion(1)
         changeXP(200)
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
      healToFull()
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
      fightWon: <StageFightWon haveKey={player.choices.haveSilverKey} goToScene7={goToScene7} />,
      moveOn: <StageMoveOn springRest={springRest} springMoveOn={springMoveOn} />,
      springRest: <StageSpringRest goToScene7={goToScene7} />,
      springMoveOn: <StageSpringMoveOn goToScene7={goToScene7} />
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene6}>
         <AppBar />
         <Background img={backgroundImg} />
         {displayEnemy && <Enemy enemyImage={giant} />}
         <TextContainer>
            <h2>Scene 6:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
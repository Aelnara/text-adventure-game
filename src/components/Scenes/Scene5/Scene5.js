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
import wolf from 'assets/images/enemies/enemy-wolf-1.png';
import boar from 'assets/images/enemies/enemy-boar-1.png';
import Enemy from 'components/Layouts/Enemy';
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
   }
}));

export default function Scene5() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, healToFull, changeCurrentHP, changeXP } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [isDisturbed, setIsDisturbed] = useState(false)
   const [displayWolf, setDisplayWolf] = useState(false)
   const [displayBoar, setDisplayBoar] = useState(false)
   
   const goToScene6 = () => {
      changeGameStage('scene6')
   }
   
   const proceed = () => {
      if(player.classType === 'mage'){
         setSceneStage('magePlayer')
      } else {
         fight()
      }
   }
   
   const fight = () => {
      initializeEnemy(400, 70, 500)
      setDisplayWolf(true)
      setSceneStage('fight')
   }
   
   const fightWon = () => {
      setDisplayWolf(false)
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
         changeXP(300)
         setSceneStage('successfulCalm')
      } else {
         changeCurrentHP(-30)
         setSceneStage('unsuccessfulCalm')
      }
   }
   
   const choiceRest = () => {
      const chance = Math.floor(Math.random() * 3)
      if(chance > 0){
         healToFull()
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
      fight: <Fight fightWon={fightWon} />,
      fightWon: <StageFightWon choiceRest={choiceRest} choiceMoveOn={choiceMoveOn} />,
      rest: <StageRest disturbed={isDisturbed} goToScene6={goToScene6} boarFight={boarFight} />,
      moveOn: <StageMoveOn goToScene6={goToScene6} />,
      boarFight: <Fight fightWon={boarFightWon} />,
      boarFightWon: <StageBoarFightWon goToScene6={goToScene6} />,
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene5}>
         <AppBar />
         <Background img={backgroundImg} />
         {displayWolf && <Enemy enemyImage={wolf} />}
         {displayBoar && <Enemy enemyImage={boar} />}
         <TextContainer>
            <h2>Scene 5:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
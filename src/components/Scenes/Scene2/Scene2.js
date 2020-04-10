import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import AppBar from 'components/AppBar/AppBar';
import TextContainer from 'components/Layouts/TextContainer';
import Background from 'components/Layouts/Background';
import backgroundImg from 'assets/images/environment/environment-forest-3.png';
import stranger from 'assets/images/enemies/enemy-stranger-1.png';
import Enemy from 'components/Layouts/Enemy';
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
   const { player, changeCurrentHP, changePotion, changeXP, setScene2Consequence } = useContext(PlayerContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displayEnemy, setDisplayEnemy] = useState(true)
   
   const goToScene3 = () => {
      changeGameStage('scene3')
   }
   
   const choiceHelp = () => {
      setSceneStage('help')
      changePotion(1)
      changeXP(200)
   }
   
   const choiceAmbush = () => {
      setDisplayEnemy(false)
      setSceneStage('ambush')
      if(player.classType === 'rogue') {
         changeXP(400)
      } else {
         setScene2Consequence()
         changeCurrentHP(-20)
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
         <AppBar />
         <Background img={backgroundImg} />
         {displayEnemy && <Enemy enemyImage={stranger} />}
         <TextContainer>
            <h2>Scene 2:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
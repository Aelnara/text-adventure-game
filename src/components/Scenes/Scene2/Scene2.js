import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import Button from '@material-ui/core/Button';
import AppBar from 'components/AppBar/AppBar';
import Scene2Ambush from './Scene2Ambush';
import TextContainer from 'components/Layouts/TextContainer';
import ButtonContainer from 'components/Layouts/ButtonContainer';
import Background from 'components/Layouts/Background';
import backgroundImg from 'assets/images/environment/environment-forest-3.png';
import stranger from 'assets/images/enemies/enemy-stranger-1.png';
import Enemy from 'components/Layouts/Enemy';

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
      initial: 
         <>
            <p>As you travel the roads, you see a strange person near the road and he seems to have trouble with something.</p>
            <p>He didnt notice you. This could be a perfect opportunity to ambush him and test your skills and also get some loot. You have the element of surprise.</p>
            <p>...or you could try to help him, but he does not look friendly at all.</p>
            <ButtonContainer>
               <Button onClick={choiceAmbush} variant="contained">Ambush</Button>
               <Button onClick={choiceHelp} variant="contained">Help</Button>
            </ButtonContainer>
         </>,
      help:
         <>
            <p>You decided to approach the strange person and it turned out he is not as strange as he looks.</p>
            <p>After you helped him out, he rewarded you with a Health Potion.</p>
            <p>[You gained +1 Health Potion]</p>
            <p>[You gained +200 XP]</p>
            <ButtonContainer>
               <Button onClick={goToScene3} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      ambush:
         <>
            <Scene2Ambush classType={player.classType} />
            <ButtonContainer>
               <Button onClick={goToScene3} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
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
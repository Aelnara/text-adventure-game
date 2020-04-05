import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import { EnemyContext } from 'contexts/EnemyContext';
import Button from '@material-ui/core/Button';
import AppBar from 'components/AppBar/AppBar';
import Fight from 'components/Scenes/Fight/Fight';
import TextContainer from 'components/Layouts/TextContainer';
import ButtonContainer from 'components/Layouts/ButtonContainer';
import Background from 'components/Layouts/Background';
import backgroundImg from 'assets/images/environment/environment-forest-3.png';

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
   const { setScene3Consequence } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   
   const goToScene4 = () => {
      changeGameStage('scene4')
   }

   const fight = () => {
      initializeEnemy(50, 50, 300)
      setSceneStage('fight')
   }
   
   const fightWon = () => {
      setSceneStage('fightWon')
   }
   
   const searchCampFight = () => {
      initializeEnemy(150, 40, 200)
      setSceneStage('searchCampFight')
   }
   
   const searchCampFightWon = () => {
      setSceneStage('searchCampFightWon')
   }
   
   const moveOn = () => {
      setSceneStage('moveOn')
   }
   
   const searchCamp = () => {
      setScene3Consequence()
      setSceneStage('searchCamp')
   }
   
   const searchCampAmbush = () => {
      setSceneStage('searchCampAmbush')
   }
   
   const sceneStages = {
      initial: 
         <>
            <p>As you were wandering the roads, you ran into a thug...</p>
            <p>He didn't ask anything... just ran at you. He wants to kill and rob you. OH NO!</p>
            <p>You have to do something before he kills you...</p>
            <ButtonContainer>
               <Button onClick={fight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      fight: <Fight fightWon={fightWon} />,
      fightWon: 
         <>
            <p>After you managed to defeat your attacker, you noticed that his camp is on the other side of the road not far from you.</p>
            <p>It might be worth checking out... but it would also be wise to get off these dangerous roads as soon as possible...</p>
            <ButtonContainer>
               <Button onClick={moveOn} variant="contained">Move on</Button>
               <Button onClick={searchCamp} variant="contained">Search camp</Button>
            </ButtonContainer>
         </>,
      moveOn: 
         <>
            <p>You decided to not take too much time on these roads. This thug wasn't the first and probably not the last one either.</p>
            <p>They usually have nothing valuable on them anyway, thats why they attack travelers on sight on these roads.</p>
            <ButtonContainer>
               <Button onClick={goToScene4} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      searchCamp:
         <>
            <p>You decided to search his camp and you found a silver key. But what is it for??</p>
            <p>You found no clue about that but you still took the key, maybe you will find out what it opens.</p>
            <p>[You got a Silver Key]</p>
            <ButtonContainer>
               <Button onClick={searchCampAmbush} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      searchCampAmbush:
         <>
            <p>You took too long and another thug showed up... He looks infuriated.</p>
            <p>He probably knew the one you killed before.</p>
            <ButtonContainer>
               <Button onClick={searchCampFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      searchCampFight: <Fight fightWon={searchCampFightWon} />,
      searchCampFightWon: 
         <>
            <p>You managed to take him down as well!</p>
            <p>Hopefully he was the last thug in the area... but you should leave these roads NOW!</p>
            <p>Hope the key was worth the trouble at least...</p>
            <ButtonContainer>
               <Button onClick={goToScene4} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
   }
   
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene3}>
         <AppBar />
         <Background img={backgroundImg} />
         <TextContainer>
            <h2>Scene 3:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
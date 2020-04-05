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
import backgroundImg from 'assets/images/environment/environment-forest-4.png';

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
   const { changePotion, setScene7Consequence } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   
   const goToScene8 = () => {
      changeGameStage('scene8')
   }
   
   const leftInterveneFight = () => {
      initializeEnemy(50, 90, 400)
      setSceneStage('leftInterveneFight')
   }
   
   const interveneFightWon = () => {
      setScene7Consequence()
      changePotion(1)
      setSceneStage('interveneFightWon')
   }
   
   const rightSearchFight = () => {
      initializeEnemy(50, 70, 300)
      setSceneStage('rightSearchFight')
   }
   
   const searchFightWon = () => {
      setSceneStage('searchFightWon')
   }
   
   const choiceLeftPath = () => {
      setSceneStage('choiceLeftPath')
   }
   
   const leftIntervene = () => {
      setSceneStage('leftIntervene')
   }
   
   const leftMoveOn = () => {
      setSceneStage('leftMoveOn')
   }
   
   const choiceRightPath = () => {
      setSceneStage('choiceRightPath')
   }
   
   const rightSearch = () => {
      changePotion(2)
      setSceneStage('rightSearch')
   }
   
   const rightSearchProceed = () => {
      setSceneStage('rightSearchProceed')
   }
   
   const rightMoveOn = () => {
      setSceneStage('rightMoveOn')
   }
   
   
   const sceneStages = {
      initial: 
         <>
            <p>You got out of the forest, and there was a crossroads.</p>
            <p>You could either take the Left or the Right path. The Left path looks promising, it leads to a village. The Right path seems to lead to the wilderness.</p>
            <ButtonContainer>
               <Button onClick={choiceLeftPath} variant="contained">Left</Button>
               <Button onClick={choiceRightPath} variant="contained">Right</Button>
            </ButtonContainer>
         </>,
      choiceLeftPath:
         <>
            <p>You took the Left path.</p>
            <p>After about an hour of wandering the road, you heard yelling.</p>
            <p>You decided to check it out and you found out that a group of red cloaked soldiers are harassing a men.</p>
            <ButtonContainer>
               <Button onClick={leftIntervene} variant="contained">Intervene</Button>
               <Button onClick={leftMoveOn} variant="contained">Move on</Button>
            </ButtonContainer>
         </>,
      leftIntervene:
         <>
            <p>You decided to invervene and try to save the men from the soldiers.</p>
            <p>The soldiers warned you to stay out of it.</p>
            <ButtonContainer>
               <Button onClick={leftInterveneFight} variant="contained">Fight</Button>
               <Button onClick={leftMoveOn} variant="contained">Move on</Button>
            </ButtonContainer>
         </>,
      leftInterveneFight: <Fight fightWon={interveneFightWon} />,
      interveneFightWon: 
         <>
            <p>You killed every soldier there and saved the men.</p>
            <p>He thanked you and gave you a Health Potion.</p>
            <p>[You gained +1 Health Potion]</p>
            <ButtonContainer>
               <Button onClick={goToScene8} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      leftMoveOn:
         <>
            <p>You decided to leave them alone. It was not your concern.</p>
            <ButtonContainer>
               <Button onClick={goToScene8} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      choiceRightPath:
         <>
            <p>You decided to take Right path to the wilderness.</p>
            <p>After traveling for a while, you came across a small hunting house.</p>
            <p>It probably has some useful equipment that you could use on your journey.</p>
            <ButtonContainer>
               <Button onClick={rightSearch} variant="contained">Search</Button>
               <Button onClick={rightMoveOn} variant="contained">Move on</Button>
            </ButtonContainer>
         </>,
      rightSearch:
         <>
            <p>You searched the house and you found some useful equipment.</p>
            <p>[You gained +2 Health Potion]</p>
            <ButtonContainer>
               <Button onClick={rightSearchProceed} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      rightSearchProceed: 
         <>
            <p>As you came out of the house with your new equipment, you noticed that the owner just arrived.</p>
            <p>You could tell he wasnt happy because the fact that he pulled out his weapon and charged at you.</p>
            <ButtonContainer>
               <Button onClick={rightSearchFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      rightSearchFight: <Fight fightWon={searchFightWon} />,
      searchFightWon: 
         <>
            <p>You killed the hunter and moved on...</p>
            <p>He certainly wont need this equipment anymore.</p>
            <ButtonContainer>
               <Button onClick={goToScene8} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      rightMoveOn:
         <>
            <p>You decided to move on and not take anything from the hunting house.</p>
            <p>It was probably better this way because the owner just arrived as you walked passed the house.</p>
            <ButtonContainer>
               <Button onClick={goToScene8} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene7}>
         <AppBar />
         <Background img={backgroundImg} />
         <TextContainer>
            <h2>Scene 7:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
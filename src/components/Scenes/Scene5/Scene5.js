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
import backgroundImg from 'assets/images/environment/environment-forest-1.png';
import wolf from 'assets/images/enemies/enemy-wolf-1.png';
import boar from 'assets/images/enemies/enemy-boar-1.png';
import Enemy from 'components/Layouts/Enemy';

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
   const [isDisturbed, setIsDisturbed] = useState('undisturbed')
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
      initializeEnemy(200, 50, 500)
      setDisplayWolf(true)
      setSceneStage('fight')
   }
   
   const fightWon = () => {
      setDisplayWolf(false)
      setSceneStage('fightWon')
   }
   
   const boarFight = () => {
      initializeEnemy(150, 40, 200)
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
         setIsDisturbed('disturbed')
      }
      setSceneStage('rest')
   }
   
   const choiceMoveOn = () => {
      setSceneStage('moveOn')
   }
   
   const resting = {
      undisturbed: 
         <>
            <p>You decided to stay here for the night. Whats the chance of being attacked twice, huh??</p>
            <p>You slept undisturbed, and in the first sunlight you left this place.</p>
            <p>[Health Restored]</p>
            <ButtonContainer>
               <Button onClick={goToScene6} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      disturbed:
         <>
            <p>You decided to stay here for the night. Whats the chance of being attacked twice, huh??</p>
            <p>Well, that was not your lucky night because a wild boar showed up and attacked you!</p>
            <ButtonContainer>
               <Button onClick={boarFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
   }
   
   const sceneStages = {
      initial: 
         <>
            <p>You ventured deep into the forest, but the sun was about to set down.</p>
            <p>You found a place to settle down for the night. It was about midnight when you spotted a very hungry looking wolf.</p>
            <p>You reached to your weapon as the wolf charged at you.</p>
            <ButtonContainer>
               <Button onClick={proceed} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      magePlayer: 
         <>
            <p>You could fight the wolf but as a Mage you could also try to calm the wolf with a spell.</p>
            <ButtonContainer>
               <Button onClick={choiceCalm} variant="contained">Calm</Button>
               <Button onClick={fight} variant="contained">Fight</Button>
            </ButtonContainer>
         </>,
      successfulCalm: 
         <>
            <p>You successfully casted a calming spell and the wolf slowly walked away.</p>
            <p>[You gained +300 XP]</p>
            <ButtonContainer>
               <Button onClick={fightWon} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      unsuccessfulCalm: 
         <>
            <p>Your failed to cast the spell in time and the wolf damaged you.</p>
            <p>[You lost 30 Health]</p>
            <ButtonContainer>
               <Button onClick={fight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      fight: <Fight fightWon={fightWon} />,
      fightWon: 
         <>
            <p>After dealing with the wolf, you debate whether you should leave or stay and rest for the rest of the night.</p>
            <p>Unlikely, but there could be more wolves around here.</p>
            <ButtonContainer>
               <Button onClick={choiceRest} variant="contained">Rest</Button>
               <Button onClick={choiceMoveOn} variant="contained">Move on</Button>
            </ButtonContainer>
         </>,
      rest: resting[isDisturbed],
      moveOn:
         <>
            <p>You decided to move on from this place.</p>
            <p>Even if it was unlikely, you didnt want to take the risk of being attacked again.</p>
            <ButtonContainer>
               <Button onClick={goToScene6} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      boarFight: <Fight fightWon={boarFightWon} />,
      boarFightWon: 
         <>
            <p>Okay, its time to finally move on from this place...</p>
            <ButtonContainer>
               <Button onClick={goToScene6} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
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
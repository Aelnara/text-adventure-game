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
   Scene4: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(80,80,195,1) 0%, rgba(115,115,219,1) 25%, rgba(162,162,228,1) 100%)'
   }
}));

export default function Scene4() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, healToFull, changePotion } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   
   const goToHint1 = () => {
      changeGameStage('hint1')
   }
   
   const fight = () => {
      initializeEnemy(50, 60, 300)
      setSceneStage('fight')
   }
   
   const fightWon = () => {
      changePotion(1)
      setSceneStage('fightWon')
   }
   
   const choiceRest = () => {
      if(!player.choices.scene2ambush) {
         healToFull()
      }
      setSceneStage('rest')
   }
   
   const choiceMoveOn = () => {
      setSceneStage('moveOn')
   }
   
   const resting = {
      undisturbed: 
         <>
            <p>You rested peacefully. Noone disturbed you in your sleep.</p>
            <p>You regained your strenght and you are ready to leave this place and continue your journey.</p>
            <p>[Health Restored]</p>
            <ButtonContainer>
               <Button onClick={goToHint1} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      disturbed:
         <>
            <p>You decided to rest here for a while. It was nice to finally sleep under a roof.</p>
            <p>You heard something and you woke up. As you opened your eyes, you saw a guy trying to stab you.</p>
            <p>In the last second, you rolled off the bed and he missed the lethal strike.</p>
            <p>As you reached your weapon you noticed that the guy is the same you tried to sneak up on previously but got away.</p>
            <ButtonContainer>
               <Button onClick={fight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
   }
   
   const consequence = player.choices.scene2ambush ? 'disturbed' : 'undisturbed'
   
   const sceneStages = {
      initial: 
         <>
            <p>You arrived to a small town. There is a nice tavern there where you could rest a bit and regain your strenght.</p>
            <p>What do you do?</p>
            <ButtonContainer>
               <Button onClick={choiceRest} variant="contained">Rest</Button>
               <Button onClick={choiceMoveOn} variant="contained">Move on</Button>
            </ButtonContainer>
         </>,
      rest: resting[consequence],
      fight: <Fight fightWon={fightWon} />,
      fightWon: 
         <>
            <p>You killed the ambusher. Finally... its over.</p>
            <p>You wonder if it was the right thing to do back then when you tried to kill him for no reason... hmm...</p>
            <p>Anyway, you probably should be careful who do you attack in the future if you dont want to make enemies.</p>
            <p>You searched his body and you found a Health Potion.</p>
            <p>[You gained +1 Health Potion]</p>
            <ButtonContainer>
               <Button onClick={goToHint1} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      moveOn:
         <>
            <p>Its always nice to sleep under a roof, but it doesnt really matter to you.</p>
            <p>You decided to move on and leave this town.</p>
            <ButtonContainer>
               <Button onClick={goToHint1} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene4}>
         <AppBar />
         <Background img={backgroundImg} />
         <TextContainer>
            <h2>Scene 4:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
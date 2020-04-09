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
import soldiers from 'assets/images/enemies/enemy-soldiers-2.png';
import Enemy from 'components/Layouts/Enemy';

const useStyles = makeStyles(theme => ({
   Scene9: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(46,46,108,1) 0%, rgba(62,62,135,1) 30%, rgba(162,162,228,1) 100%)'
   }
}));

export default function Scene9() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, changeXP, changePotion } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [displayEnemy, setDisplayEnemy] = useState(true)
   
   const goToScene10 = () => {
      changeGameStage('scene10')
   }
   
   const soldiersFight = () => {
      initializeEnemy(500, 130, 600)
      setSceneStage('soldiersFight')
   }
   
   const fightWon = () => {
      setDisplayEnemy(false)
      setSceneStage('fightWon')
   }
   
   const choiceComfront = () => {
      if(!player.choices.scene7fight){
         changePotion(1)
      }
      setSceneStage('comfront')
   }
   
   const choiceHide = () => {
      setSceneStage('hide')
   }
   
   const hideProceed = () => {
      if(player.classType === 'rogue'){
         if(player.choices.scene7fight){
            const chance = Math.floor(Math.random() * 2)
            if(chance > 0){
               setSceneStage('unsuccessfulHide')
            } else {
               changeXP(400)
               setSceneStage('successfulHideRogue')
            }
         } else {
            setSceneStage('successfulHide')
         }
      } else {
         if(player.choices.scene7fight){
            setSceneStage('unsuccessfulHide')
         } else {
            setSceneStage('successfulHide')
         }
      }
   }
   
   const soldiersApproach = {
      fight: 
         <>
            <p>The red cloaked soldiers didnt ask anything. The captain looked into your eyes and said:</p>
            <p>This is for our brothers at the crossroads. You should have stayed out of it.</p>
            <p>Then all the soldiers drew their weapon and charged at you with all their fury.</p>
            <ButtonContainer>
               <Button onClick={soldiersFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      peaceful:
         <>
            <p>They were on a routine patrol in the area. You talked to the red cloaked captain.</p>
            <p>He gave you a Health Potion, and the soldiers wished you good fortune as they moved on.</p>
            <p>[You gained +1 Health Potion]</p>
            <ButtonContainer>
               <Button onClick={goToScene10} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
   }
   
   const consequence = player.choices.scene7fight ? 'fight' : 'peaceful'
   
   const sceneStages = {
      initial: 
         <>
            <p>A group of red cloaked soldiers are coming at your way.</p>
            <p>They are probably on a patrol.</p>
            <ButtonContainer>
               <Button onClick={choiceComfront} variant="contained">Comfront</Button>
               <Button onClick={choiceHide} variant="contained">Hide</Button>
            </ButtonContainer>
         </>,
      comfront: soldiersApproach[consequence],
      soldiersFight: <Fight fightWon={fightWon} />,
      fightWon: 
         <>
            <p>You managed to take down every soldier one after another. It was a tough and bloody fight.</p>
            <p>You should leave the area before any more red cloaked soldiers show up.</p>
            <ButtonContainer>
               <Button onClick={goToScene10} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      hide: 
         <>
            <p>You decided you try to hide from the approaching soldiers.</p>
            <p>Who knows if they are friendly or not...</p>
            <ButtonContainer>
               <Button onClick={hideProceed} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      successfulHide: 
         <>
            <p>They were on a routine patrol in the area. They were not looking for you.</p>
            <p>You didnt get caught.</p>
            <ButtonContainer>
               <Button onClick={goToScene10} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      successfulHideRogue: 
         <>
            <p>As a Rouge, you are a master of stealth and you managed to hide from the soldiers.</p>
            <p>The red cloaked soldiers moved on.</p>
            <p>[You gained +400 XP]</p>
            <ButtonContainer>
               <Button onClick={goToScene10} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      unsuccessfulHide: 
         <>
            <p>The soldiers caught you hiding.</p>
            <p>They didnt ask anything. The captain looked into your eyes and said:</p>
            <p>This is for our brothers at the crossroads. You should have stayed out of it.</p>
            <p>Then all the soldiers drew their weapon and charged at you with all their fury.</p>
            <ButtonContainer>
               <Button onClick={soldiersFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene9}>
         <AppBar />
         <Background img={backgroundImg} />
         {displayEnemy && <Enemy enemyImage={soldiers} />}
         <TextContainer>
            <h2>Scene 9:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
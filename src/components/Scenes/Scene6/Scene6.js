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
import giant from 'assets/images/enemies/enemy-giant-1.png';
import Enemy from 'components/Layouts/Enemy';

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
   
   const ruinsChest = {
      haveKey: 
         <>
            <p>After defeating the giant you searched the ruins and you found a locked chest.</p>
            <p>You tried the silver key you took from the roadside thugs, and you successfully unlocked the chest.</p>
            <p>You found some equipment and a Health Potion.</p>
            <p>[You gained +1 Health Potion]</p>
            <p>[You gained +200 XP]</p>
            <ButtonContainer>
               <Button onClick={goToScene7} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      noKey:
         <>
            <p>After defeating the giant you searched the ruins and you found a locked chess.</p>
            <p>Unfortunately, you dont have any keys so you couldnt open the chest.</p>
            <ButtonContainer>
               <Button onClick={goToScene7} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
   }
   
   const consequence = player.choices.haveSilverKey ? 'haveKey' : 'noKey'
   
   const sceneStages = {
      initial: 
         <>
            <p>You climbed up a tall tree to take a better look of the forest.</p>
            <p>You noticed an old, ruined fortress in the distance.</p>
            <ButtonContainer>
               <Button onClick={choiceInvestigate} variant="contained">Investigate</Button>
               <Button onClick={choiceMoveOn} variant="contained">Move on</Button>
            </ButtonContainer>
         </>,
      investigate:
         <>
            <p>You decided to investigate the ruins for some equipment.</p>
            <p>As you arrived, you noticed that a giant guards the ruins.</p>
            <ButtonContainer>
               <Button onClick={ruinsAttack} variant="contained">Attack</Button>
               <Button onClick={ruinsMoveOn} variant="contained">Move</Button>
            </ButtonContainer>
         </>,
      ruinsAttack: 
         <>
            <p>You decided to kill the giant. The ruins could be full of treasure. A giant cant stop you from taking it.</p>
            <ButtonContainer>
               <Button onClick={ruinsFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      ruinsMoveOn: 
         <>
            <p>You decided not to comfront the giant and you left the ruins before he could see you.</p>
            <ButtonContainer>
               <Button onClick={goToScene7} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      fight: <Fight fightWon={fightWon} />,
      fightWon: ruinsChest[consequence],
      moveOn:
         <>
            <p>You didnt care about the ruins and you moved on.</p>
            <p>After a couple hours of walking in the forest, you came across a spring.</p>
            <ButtonContainer>
               <Button onClick={springRest} variant="contained">Rest</Button>
               <Button onClick={springMoveOn} variant="contained">Move on</Button>
            </ButtonContainer>
         </>,
      springRest:
         <>
            <p>You rested peacefully. Noone disturbed you.</p>
            <p>You regained your strenght and you are ready to leave this place and continue your journey.</p>
            <p>[Health Restored]</p>
            <ButtonContainer>
               <Button onClick={goToScene7} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      springMoveOn:
         <>
            <p>You decided to move on. No need to rest, you are always ready for battle.</p>
            <ButtonContainer>
               <Button onClick={goToScene7} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
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
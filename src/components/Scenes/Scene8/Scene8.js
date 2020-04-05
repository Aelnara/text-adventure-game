import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import Button from '@material-ui/core/Button';
import AppBar from 'components/AppBar/AppBar';
import TextContainer from 'components/Layouts/TextContainer';
import ButtonContainer from 'components/Layouts/ButtonContainer';
import Background from 'components/Layouts/Background';
import backgroundImg from 'assets/images/environment/environment-forest-4.png';

const useStyles = makeStyles(theme => ({
   Scene8: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(46,46,108,1) 0%, rgba(62,62,135,1) 30%, rgba(162,162,228,1) 100%)'
   },
   guessInput: {
      backgroundColor: '#968968',
      width: '100px',
      outline: 'none',
      fontSize: '1.2rem',
      padding: '8px 12px',
      borderRadius: '5px 0 0 5px',
      border: '2px solid #543628',
      boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2)'
   },
   guessButton: {
      marginLeft: '0 !important',
      borderRadius: '0 5px 5px 0 !important'
   }
}));

export default function Scene8() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { changeXP, changePotion } = useContext(PlayerContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [guess, setGuess] = useState('')
   
   const goToScene9 = () => {
      changeGameStage('scene9')
   }
   
   const choiceRiddle = () => {
      setSceneStage('riddle')
   }
   
   const riddleGuess = (evt) => {
      setGuess(evt.target.value)
   }
   
   const makeGuess = () => {
      if(guess.toLowerCase() === 'e'){
         changeXP(300)
         changePotion(1)
         setSceneStage('correctGuess')
      } else {
         setGuess('')
      }
   }
   
   const riddlePass = () => {
      setSceneStage('riddlePass')
   }
   
   const choiceMoveOn = () => {
      setSceneStage('moveOn')
   }
   
   const sceneStages = {
      initial: 
         <>
            <p>As you were wandering, you met an old monk.</p>
            <p>You had an interesting conversation with the monk but before you could leave he asked you if you are interested in a riddle.</p>
            <ButtonContainer>
               <Button onClick={choiceRiddle} variant="contained">Sure</Button>
               <Button onClick={choiceMoveOn} variant="contained">No</Button>
            </ButtonContainer>
         </>,
      riddle: 
         <>
            <p>The old monk seemed happy about your answer, and he asked you immediately:</p>
            <p>I am everywhere and a part of everyone. I am at the end of space and time and existence itself. What am I?</p>
            <ButtonContainer>
               <input className={classes.guessInput} onChange={riddleGuess} autoComplete="off" maxlength="15" value={guess} type="text" name="name"/>
               <Button className={classes.guessButton} onClick={makeGuess} variant="contained">Guess</Button>
               <Button onClick={riddlePass} variant="contained">Pass</Button>
            </ButtonContainer>
         </>,
      correctGuess: 
         <>
            <p>Thats right!!! The old monk cheered up like a child as you guessed it right!</p>
            <p>He even gave you a Health Potion in his happiness before he walked away.</p>
            <p>[You gained +1 Health Potion]</p>
            <p>[You gained +300 XP]</p>
            <ButtonContainer>
               <Button onClick={goToScene9} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      riddlePass: 
         <>
            <p>You had no idea what the answer could be and you gave up.</p>
            <p>The monk was disappointed and his face turned sad as he walked away.</p>
            <ButtonContainer>
               <Button onClick={goToScene9} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      moveOn: 
         <>
            <p>You had an interesting conversation with the monk, but you decided that was enough of him and you moved on.</p>
            <ButtonContainer>
               <Button onClick={goToScene9} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene8}>
         <AppBar />
         <Background img={backgroundImg} />
         <TextContainer>
            <h2>Scene 8:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
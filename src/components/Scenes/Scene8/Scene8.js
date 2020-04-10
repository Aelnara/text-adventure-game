import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import Button from '@material-ui/core/Button';
import AppBar from 'components/AppBar/AppBar';
import TextContainer from 'components/Layouts/TextContainer';
import ButtonContainer from 'components/Layouts/ButtonContainer';
import Background from 'components/Layouts/Background';
import backgroundImg from 'assets/images/environment/environment-forest-3.png';
import monk from 'assets/images/enemies/enemy-monk-1.png';
import Enemy from 'components/Layouts/Enemy';
import StageInitial from './StageInitial';
import StageCorrectGuess from './StageCorrectGuess';
import StageRiddlePass from './StageRiddlePass';
import StageMoveOn from './StageMoveOn';

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
   const [displayEnemy, setDisplayEnemy] = useState(true)
   
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
      setDisplayEnemy(false)
      setSceneStage('riddlePass')
   }
   
   const choiceMoveOn = () => {
      setDisplayEnemy(false)
      setSceneStage('moveOn')
   }
   
   const sceneStages = {
      initial: <StageInitial choiceRiddle={choiceRiddle} choiceMoveOn={choiceMoveOn} />,
      riddle: 
         <>
            <p>The old monk seemed happy about your answer, and he asked you immediately:</p>
            <p>I am everywhere and a part of everyone. I am at the end of space and time and existence itself. What am I?</p>
            <ButtonContainer>
               <input className={classes.guessInput} onChange={riddleGuess} autoComplete="off" maxLength="15" value={guess} type="text" name="name"/>
               <Button className={classes.guessButton} onClick={makeGuess} variant="contained">Guess</Button>
               <Button onClick={riddlePass} variant="contained">Pass</Button>
            </ButtonContainer>
         </>,
      correctGuess: <StageCorrectGuess goToScene9={goToScene9} />,
      riddlePass: <StageRiddlePass goToScene9={goToScene9} />,
      moveOn: <StageMoveOn goToScene9={goToScene9} />
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene8}>
         <AppBar />
         <Background img={backgroundImg} />
         {displayEnemy && <Enemy enemyImage={monk} />}
         <TextContainer>
            <h2>Scene 8:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
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
import golem from 'assets/images/enemies/enemy-golem-1.png';
import Enemy from 'components/Layouts/Enemy';

const useStyles = makeStyles(theme => ({
   Scene10: {
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

export default function Scene10() {
   const classes = useStyles();
   const { changeGameStage } = useContext(GameStageContext);
   const { player, changeCurrentHP } = useContext(PlayerContext);
   const { initializeEnemy } = useContext(EnemyContext);
   const [sceneStage, setSceneStage] = useState('initial')
   const [guess, setGuess] = useState('')
   const [guessCount, setGuessCount] = useState(0)
   const [displayEnemy, setDisplayEnemy] = useState(false)
   
   const goToOutro = () => {
      changeGameStage('outro')
   }
   
   const codeGuess = (evt) => {
      setGuess(evt.target.value)
   }
   
   const makeGuess = () => {
      if(guess === '72389'){
         setSceneStage('correctGuess')
      } else {
         setGuess('')
         setGuessCount(guessCount + 1)
         changeCurrentHP(-10)
         setSceneStage('wrongGuess')
      }
   }
   
   React.useEffect(() => {
      if (guessCount > 2) {
         setGuessCount(0)
         setSceneStage('wrongGuessFight')
      }
   }, [guessCount]);
   
   const golemFight = () => {
      initializeEnemy(300, 100, 600)
      setDisplayEnemy(true)
      setSceneStage('golemFight')
   }
   
   const fightWon = () => {
      setDisplayEnemy(false)
      setSceneStage('fightWon')
   }
   
   const vault = () => {
      setSceneStage('vault')
   }
   
   const choiceLeave = () => {
      setSceneStage('choiceLeave')
   }
   
   const endingBad = () => {
      setSceneStage('endingBad')
   }
   
   const endingGood = () => {
      setSceneStage('endingGood')
   }
   
   const sceneStages = {
      initial: 
         <>
            <p>You found a very wierd place... there was a door in the middle and 3 strange stones around it.</p>
            <p>There were also countless lifeless stone golem figures everywhere around the door.</p>
            <p>Is this some kind of vault?? The door is locked and it seems to require a code to open.</p>
            <ButtonContainer>
               <Button onClick={vault} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      vault: 
         <>
            <p>The door needs a code to open.</p>
            <p>What could it be...?</p>
            <ButtonContainer>
               <input className={classes.guessInput} onChange={codeGuess} autoComplete="off" maxLength="15" value={guess} type="text" name="name"/>
               <Button className={classes.guessButton} onClick={makeGuess} variant="contained">Guess</Button>
               <Button onClick={choiceLeave} variant="contained">Leave</Button>
            </ButtonContainer>
         </>,
      wrongGuess: 
         <>
            <p>That was not the right code. {guessCount}/3 of the stones started to glow.</p>
            <p>You activated some kind of defense mechanism that shocked the whole place.</p>
            <p>[You lost 10 Health]</p>
            <ButtonContainer>
               <Button onClick={vault} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      wrongGuessFight: 
         <>
            <p>All 3 stones started to glow around the door...</p>
            <p>You activated the next level defense security and a Stone Golem came to life.</p>
            <p>The Golem attacked you.</p>
            <ButtonContainer>
               <Button onClick={golemFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      correctGuess: 
         <>
            <p>You remembered the code you found in the forest on the trees and you managed to open the secret door.</p>
            <p>There were tons of gold in the vault. It could last for more than a lifetime.</p>
            <p>You took the gold and left the place.</p>
            <ButtonContainer>
               <Button onClick={endingGood} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      endingGood: 
         <>
            <p>You decided you already had enough adventures, and with all the gold you can go home and live peacefully in great wealth.</p>
            <p>The story of your Hero ends here, {player.name}...</p>
            <ButtonContainer>
               <Button onClick={goToOutro} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      golemFight: <Fight fightWon={fightWon} />,
      fightWon: 
         <>
            <p>You managed to take down the golem.</p>
            <p>You should probably be more careful with your guesses if you dont want to wake up another one...</p>
            <ButtonContainer>
               <Button onClick={vault} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      choiceLeave: 
         <>
            <p>You didnt know the code, so you decided to leave the place. Too bad...</p>
            <p>Maybe it was the one you found in the forest on the trees??</p>
            <p>You should have memorized the code or at least took a note of it...</p>
            <p>Well, it doesnt matter now...</p>
            <ButtonContainer>
               <Button onClick={endingBad} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
      endingBad: 
         <>
            <p>After you moved on from the vault, the sun was already going down.</p>
            <p>You decided to make a camp for the night and you would continue your journey in the first daylight.</p>
            <p>That was not a good place to settle down for the night. A werwolf tore you apart in your dreams...</p>
            <p>The story of your Hero ends here, {player.name}...</p>
            <ButtonContainer>
               <Button onClick={goToOutro} variant="contained">Continue</Button>
            </ButtonContainer>
         </>,
   }
   
   const sceneStageDisplay = sceneStages[sceneStage]
   
   return (
      <div className={classes.Scene10}>
         <AppBar />
         <Background img={backgroundImg} />
         {displayEnemy && <Enemy enemyImage={golem} />}
         <TextContainer>
            <h2>Scene 10:</h2>
            {sceneStageDisplay}
         </TextContainer>
      </div>
   );
}
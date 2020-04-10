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
import StageInitial from './StageInitial';
import StageWrongGuess from './StageWrongGuess';
import StageWrongGuessFight from './StageWrongGuessFight';
import StageCorrectGuess from './StageCorrectGuess';
import StageEndingGood from './StageEndingGood';
import StageFightWon from './StageFightWon';
import StageChoiceLeave from './StageChoiceLeave';
import StageEndingBad from './StageEndingBad';

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
      initial: <StageInitial vault={vault} />,
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
      wrongGuess: <StageWrongGuess guessCount={guessCount} vault={vault} />,
      wrongGuessFight: <StageWrongGuessFight golemFight={golemFight} />,
      correctGuess: <StageCorrectGuess endingGood={endingGood} />,
      endingGood: <StageEndingGood name={player.name} goToOutro={goToOutro} />,
      golemFight: <Fight fightWon={fightWon} />,
      fightWon: <StageFightWon vault={vault} />,
      choiceLeave: <StageChoiceLeave endingBad={endingBad} />,
      endingBad: <StageEndingBad name={player.name} goToOutro={goToOutro} />,
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
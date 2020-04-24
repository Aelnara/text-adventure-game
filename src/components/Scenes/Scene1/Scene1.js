import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PlayerContext } from 'contexts/PlayerContext';
import { GameStageContext } from 'contexts/GameStageContext';
import Button from '@material-ui/core/Button';
import AppBar from 'components/AppBar/AppBar';
import TextContainer from 'components/Layouts/TextContainer';
import ButtonContainer from 'components/Layouts/ButtonContainer';
import Background from 'components/Layouts/Background';
import backgroundImg from 'assets/images/environment/environment-forest-3.png';

const useStyles = makeStyles(theme => ({
   Scene1: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(80,80,195,1) 0%, rgba(115,115,219,1) 25%, rgba(162,162,228,1) 100%)'
   },
}));

export default function Scene1() {
   const classes = useStyles();
   const { player } = useContext(PlayerContext);
   const { changeGameStage } = useContext(GameStageContext);
      
   const goToScene2 = () => {
      changeGameStage('scene2')
   }
   
   const playerClassText = {
      warrior: "As a warrior, you can take more damage in combat and your attacks has a higher chance to hit!",
      mage: "As a mage, you wield the power of magic, you have less Health but you deal more damage with your spells!",
      rogue: "As a rogue, you use daggers to attack your enemies and you are a master of stealth."
   }
   
   const playerClassTextDisplay = playerClassText[player.classType]
   
   return (
      <div className={classes.Scene1}>
         <AppBar />
         <Background img={backgroundImg} />
         <TextContainer>
            <h2>Scene 1:</h2>
            <p>You started your journey as a {player.classType}!</p>
            <p>{playerClassTextDisplay}</p>
            <p>You are wandering the world seeking your destiny...</p>
            <ButtonContainer>
               <Button onClick={goToScene2} variant="contained">Continue</Button>
            </ButtonContainer>
         </TextContainer>
      </div>
   );
}
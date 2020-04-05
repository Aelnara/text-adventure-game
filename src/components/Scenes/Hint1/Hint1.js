import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GameStageContext } from 'contexts/GameStageContext';
import Button from '@material-ui/core/Button';
import AppBar from 'components/AppBar/AppBar';
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
   
   const goToScene5 = () => {
      changeGameStage('scene5')
   }
   
   return (
      <div className={classes.Hint1}>
         <AppBar />
         <Background img={backgroundImg} />
         <TextContainer>
            <h2>Afterwards:</h2>
            <p>You are in the forest and you noticed numbers carved in some of the trees.</p>
            <p>After some searching and hours of inspecting the numbers, you finally found the pattern and managed to put the numbers together: 72389</p>
            <p>Is this a code of some sort? And for what?</p>
            <p>Either way, YOU should probably take a note of this code.</p>
            <ButtonContainer>
               <Button onClick={goToScene5} variant="contained">Continue</Button>
            </ButtonContainer>
         </TextContainer>
      </div>
   );
}
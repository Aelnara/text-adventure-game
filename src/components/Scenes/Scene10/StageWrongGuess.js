import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageWrongGuess(props) {
   return (
      <>
         <p>That was not the right code. {props.guessCount}/3 of the stones started to glow.</p>
         <p>You activated some kind of defense mechanism that shocked the whole place.</p>
         <p>[You lost 10 Health]</p>
         <ButtonContainer>
            <Button onClick={props.vault} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
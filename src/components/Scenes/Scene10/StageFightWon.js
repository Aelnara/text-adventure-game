import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageFightWon(props) {
   return (
      <>
         <p>You managed to take down the golem.</p>
         <p>You should probably be more careful with your guesses if you dont want to wake up another one...</p>
         <ButtonContainer>
            <Button onClick={props.vault} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
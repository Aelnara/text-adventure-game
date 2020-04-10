import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageFightWon(props) {
   return (
      <>
         <p>After dealing with the wolf, you debate whether you should leave or stay and rest for the rest of the night.</p>
         <p>Unlikely, but there could be more wolves around here.</p>
         <ButtonContainer>
            <Button onClick={props.choiceRest} variant="contained">Rest</Button>
            <Button onClick={props.choiceMoveOn} variant="contained">Move on</Button>
         </ButtonContainer>
      </>
   );
}
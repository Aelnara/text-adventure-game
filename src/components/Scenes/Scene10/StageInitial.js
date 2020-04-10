import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>You found a very wierd place... there was a door in the middle and 3 strange stones around it.</p>
         <p>There were also countless lifeless stone golem figures everywhere around the door.</p>
         <p>Is this some kind of vault?? The door is locked and it seems to require a code to open.</p>
         <ButtonContainer>
            <Button onClick={props.vault} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
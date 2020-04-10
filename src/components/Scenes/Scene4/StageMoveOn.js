import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageMoveOn(props) {
   return (
      <>
         <p>Its always nice to sleep under a roof, but it doesnt really matter to you.</p>
         <p>You decided to move on and leave this town.</p>
         <ButtonContainer>
            <Button onClick={props.goToHint1} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageHide(props) {
   return (
      <>
         <p>You decided you try to hide from the approaching soldiers.</p>
         <p>Who knows if they are friendly or not...</p>
         <ButtonContainer>
            <Button onClick={props.hideProceed} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
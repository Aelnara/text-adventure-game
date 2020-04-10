import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageLeftMoveOn(props) {
   return (
      <>
         <p>You decided to leave them alone. It was not your concern.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene8} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
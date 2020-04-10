import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageRightMoveOn(props) {
   return (
      <>
         <p>You decided to move on and not take anything from the hunting house.</p>
         <p>It was probably better this way because the owner just arrived as you walked passed the house.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene8} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
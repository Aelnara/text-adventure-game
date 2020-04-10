import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSpringMoveOn(props) {
   return (
      <>
         <p>You decided to move on. No need to rest, you are always ready for battle.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene7} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
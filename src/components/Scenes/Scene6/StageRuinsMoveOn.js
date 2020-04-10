import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageRuinsMoveOn(props) {
   return (
      <>
         <p>You decided not to comfront the giant and you left the ruins before he could see you.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene7} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
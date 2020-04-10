import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageUnsuccessfulCalm(props) {
   return (
      <>
         <p>Your failed to cast the spell in time and the wolf damaged you.</p>
         <p>[You lost 30 Health]</p>
         <ButtonContainer>
            <Button onClick={props.fight} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
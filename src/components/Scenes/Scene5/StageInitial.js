import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>You ventured deep into the forest, but the sun was about to set down.</p>
         <p>You found a place to settle down for the night. It was about midnight when you spotted a very hungry looking wolf.</p>
         <p>You reached to your weapon as the wolf charged at you.</p>
         <ButtonContainer>
            <Button onClick={props.proceed} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
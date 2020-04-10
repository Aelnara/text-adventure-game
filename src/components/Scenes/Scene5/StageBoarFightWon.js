import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageBoarFightWon(props) {
   return (
      <>
         <p>Okay, its time to finally move on from this place...</p>
         <ButtonContainer>
            <Button onClick={props.goToScene6} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
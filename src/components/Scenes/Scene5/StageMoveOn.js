import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageMoveOn(props) {
   return (
      <>
         <p>You decided to move on from this place.</p>
         <p>Even if it was unlikely, you didnt want to take the risk of being attacked again.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene6} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
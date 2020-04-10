import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageLeftIntervene(props) {
   return (
      <>
         <p>You decided to invervene and try to save the men from the soldiers.</p>
         <p>The soldiers warned you to stay out of it.</p>
         <ButtonContainer>
            <Button onClick={props.leftInterveneFight} variant="contained">Fight</Button>
            <Button onClick={props.leftMoveOn} variant="contained">Move on</Button>
         </ButtonContainer>
      </>
   );
}
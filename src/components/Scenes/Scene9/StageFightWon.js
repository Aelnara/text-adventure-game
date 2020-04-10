import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageFightWon(props) {
   return (
      <>
         <p>You managed to take down every soldier one after another. It was a tough and bloody fight.</p>
         <p>You should leave the area before any more red cloaked soldiers show up.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene10} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
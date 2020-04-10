import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSuccessfulCalm(props) {
   return (
      <>
         <p>You successfully casted a calming spell and the wolf slowly walked away.</p>
         <p>[You gained +300 XP]</p>
         <ButtonContainer>
            <Button onClick={props.fightWon} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
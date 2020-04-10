import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageRuinsAttack(props) {
   return (
      <>
         <p>You decided to kill the giant. The ruins could be full of treasure. A giant cant stop you from taking it.</p>
         <ButtonContainer>
            <Button onClick={props.ruinsFight} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
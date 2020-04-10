import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageRightSearch(props) {
   return (
      <>
         <p>You searched the house and you found some useful equipment.</p>
         <p>[You gained +2 Health Potion]</p>
         <ButtonContainer>
            <Button onClick={props.rightSearchProceed} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
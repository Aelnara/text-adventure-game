import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSuccessfulHide(props) {
   return (
      <>
         <p>They were on a routine patrol in the area. They were not looking for you.</p>
         <p>You didnt get caught.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene10} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSpringRest(props) {
   return (
      <>
         <p>You rested peacefully. Noone disturbed you.</p>
         <p>You regained your strenght and you are ready to leave this place and continue your journey.</p>
         <p>[Health Restored]</p>
         <ButtonContainer>
            <Button onClick={props.goToScene7} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
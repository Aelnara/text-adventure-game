import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageRiddlePass(props) {
   return (
      <>
         <p>You had no idea what the answer could be and you gave up.</p>
         <p>The monk was disappointed and his face turned sad as he walked away.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene9} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
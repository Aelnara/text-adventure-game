import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageMoveOn(props) {
   return (
      <>
         <p>You had an interesting conversation with the monk, but you decided that was enough of him and you moved on.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene9} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
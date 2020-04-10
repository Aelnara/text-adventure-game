import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageEndingGood(props) {
   return (
      <>
         <p>You decided you already had enough adventures, and with all the gold you can go home and live peacefully in great wealth.</p>
         <p>The story of your Hero ends here, {props.name}...</p>
         <ButtonContainer>
            <Button onClick={props.goToOutro} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
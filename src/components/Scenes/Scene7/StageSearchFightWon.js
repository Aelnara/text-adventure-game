import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSearchFightWon(props) {
   return (
      <>
         <p>You killed the hunter and moved on...</p>
         <p>He certainly wont need this equipment anymore.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene8} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
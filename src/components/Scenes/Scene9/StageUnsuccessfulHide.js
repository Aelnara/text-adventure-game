import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageUnsuccessfulHide(props) {
   return (
      <>
         <p>The soldiers caught you hiding.</p>
         <p>They didnt ask anything. The captain looked into your eyes and said:</p>
         <p>This is for our brothers at the crossroads. You should have stayed out of it.</p>
         <p>Then all the soldiers drew their weapon and charged at you with all their fury.</p>
         <ButtonContainer>
            <Button onClick={props.soldiersFight} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
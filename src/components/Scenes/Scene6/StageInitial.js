import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>You climbed up a tall tree to take a better look of the forest.</p>
         <p>You noticed an old, ruined fortress in the distance.</p>
         <ButtonContainer>
            <Button onClick={props.choiceInvestigate} variant="contained">Investigate</Button>
            <Button onClick={props.choiceMoveOn} variant="contained">Move on</Button>
         </ButtonContainer>
      </>
   );
}
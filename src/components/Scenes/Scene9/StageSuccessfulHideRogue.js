import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSuccessfulHideRogue(props) {
   return (
      <>
         <p>As a Rouge, you are a master of stealth and you managed to hide from the soldiers.</p>
         <p>The red cloaked soldiers moved on.</p>
         <p>[You gained +400 XP]</p>
         <ButtonContainer>
            <Button onClick={props.goToScene10} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
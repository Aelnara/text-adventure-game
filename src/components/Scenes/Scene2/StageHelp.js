import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageHelp(props) {
   return (
      <>
         <p>You decided to approach the strange person and it turned out he is not as strange as he looks.</p>
         <p>After you helped him out, he rewarded you with a Health Potion.</p>
         <p>[You gained +1 Health Potion]</p>
         <p>[You gained +200 XP]</p>
         <ButtonContainer>
            <Button onClick={props.goToScene3} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
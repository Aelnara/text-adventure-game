import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInterveneFightWon(props) {
   return (
      <>
         <p>You killed every soldier there and saved the men.</p>
         <p>He thanked you and gave you a Health Potion.</p>
         <p>[You gained +1 Health Potion]</p>
         <ButtonContainer>
            <Button onClick={props.goToScene8} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageCorrectGuess(props) {
   return (
      <>
         <p>Thats right!!! The monk cheered up like a child as you guessed it right!</p>
         <p>He even gave you a Health Potion in his happiness before he walked away.</p>
         <p>[You gained +1 Health Potion]</p>
         <p>[You gained +300 XP]</p>
         <ButtonContainer>
            <Button onClick={props.goToScene9} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
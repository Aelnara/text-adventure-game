import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageCorrectGuess(props) {
   return (
      <>
         <p>You remembered the code you found in the forest on the trees and you managed to open the secret door.</p>
         <p>There were tons of gold in the vault. It could last for more than a lifetime.</p>
         <p>You took the gold and left the place.</p>
         <ButtonContainer>
            <Button onClick={props.endingGood} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
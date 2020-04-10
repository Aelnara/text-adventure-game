import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSearchCampFightWon(props) {
   return (
      <>
         <p>You managed to take her down as well!</p>
         <p>Hopefully she was the last thug in the area... but you should leave these roads NOW!</p>
         <p>Hope the key was worth the trouble at least...</p>
         <ButtonContainer>
            <Button onClick={props.goToScene4} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
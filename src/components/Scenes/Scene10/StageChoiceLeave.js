import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageChoiceLeave(props) {
   return (
      <>
         <p>You didnt know the code, so you decided to leave the place. Too bad...</p>
         <p>Maybe it was the one you found in the forest on the trees??</p>
         <p>You should have memorized the code or at least took a note of it...</p>
         <p>Well, it doesnt matter now...</p>
         <ButtonContainer>
            <Button onClick={props.endingBad} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
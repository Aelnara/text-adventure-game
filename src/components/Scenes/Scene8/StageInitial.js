import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>As you were wandering, you met a monk.</p>
         <p>You had an interesting conversation with the monk but before you could leave he asked you if you are interested in a riddle.</p>
         <ButtonContainer>
            <Button onClick={props.choiceRiddle} variant="contained">Sure</Button>
            <Button onClick={props.choiceMoveOn} variant="contained">No</Button>
         </ButtonContainer>
      </>
   );
}
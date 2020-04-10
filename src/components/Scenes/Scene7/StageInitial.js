import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>You got out of the forest, and there was a crossroads.</p>
         <p>You could either take the Left or the Right path. The Left path looks promising, it leads to a village. The Right path seems to lead to the wilderness.</p>
         <ButtonContainer>
            <Button onClick={props.choiceLeftPath} variant="contained">Left</Button>
            <Button onClick={props.choiceRightPath} variant="contained">Right</Button>
         </ButtonContainer>
      </>
   );
}
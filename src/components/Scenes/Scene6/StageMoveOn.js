import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function MoveOn(props) {
   return (
      <>
         <p>You didnt care about the ruins and you moved on.</p>
         <p>After a couple hours of walking in the forest, you came across a spring.</p>
         <ButtonContainer>
            <Button onClick={props.springRest} variant="contained">Rest</Button>
            <Button onClick={props.springMoveOn} variant="contained">Move on</Button>
         </ButtonContainer>
      </>
   );
}
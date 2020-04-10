import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageChoiceRightPath(props) {
   return (
      <>
         <p>You decided to take Right path to the wilderness.</p>
         <p>After traveling for a while, you came across a small hunting house.</p>
         <p>It probably has some useful equipment that you could use on your journey.</p>
         <ButtonContainer>
            <Button onClick={props.rightSearch} variant="contained">Search</Button>
            <Button onClick={props.rightMoveOn} variant="contained">Move on</Button>
         </ButtonContainer>
      </>
   );
}
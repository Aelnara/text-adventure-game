import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>As you were wandering the roads, you ran into a thug...</p>
         <p>He didn't ask anything... just ran at you. He wants to kill and rob you. OH NO!</p>
         <p>You have to do something before he kills you...</p>
         <ButtonContainer>
            <Button onClick={props.fight} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
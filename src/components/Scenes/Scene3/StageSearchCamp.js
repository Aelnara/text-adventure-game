import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSearchCamp(props) {
   return (
      <>
         <p>You decided to search his camp and you found a silver key. But what is it for??</p>
         <p>You found no clue about that but you still took the key, maybe you will find out what it opens.</p>
         <p>[You got a Silver Key]</p>
         <ButtonContainer>
            <Button onClick={props.searchCampAmbush} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
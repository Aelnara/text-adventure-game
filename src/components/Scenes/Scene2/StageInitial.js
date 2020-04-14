import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>As you travel the roads, you see a strange person near the road and he seems to have trouble with something.</p>
         <p>He didnt notice you. This could be a perfect opportunity to ambush him and test your skills and also take some loot. You have the element of surprise.</p>
         <p>Or you could try to help him, but he does not look friendly at all.</p>
         <ButtonContainer>
            <Button onClick={props.choiceAmbush} variant="contained">Ambush</Button>
            <Button onClick={props.choiceHelp} variant="contained">Help</Button>
         </ButtonContainer>
      </>
   );
}
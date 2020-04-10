import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageRightSearchProceed(props) {
   return (
      <>
         <p>As you came out of the house with your new equipment, you noticed that the owner just arrived.</p>
         <p>You could tell he wasnt happy about it because he just pulled out his weapon and attacked you...</p>
         <ButtonContainer>
            <Button onClick={props.rightSearchFight} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}
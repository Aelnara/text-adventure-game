import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageRest(props) {
   if(!props.disturbed) {
      return (
         <>
            <p>You rested peacefully. Noone disturbed you in your sleep.</p>
            <p>You regained your strenght and you are ready to leave this place and continue your journey.</p>
            <p>[Health Restored]</p>
            <ButtonContainer>
               <Button onClick={props.goToHint1} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
      );
   } else {
      return (
         <>
            <p>You decided to rest here for a while. It was nice to finally sleep under a roof.</p>
            <p>You heard something and you woke up. As you opened your eyes, you saw a guy trying to stab you.</p>
            <p>In the last second, you rolled off the bed and he missed the lethal strike.</p>
            <p>As you reached your weapon you noticed that the guy is the same you tried to sneak up on previously but got away.</p>
            <ButtonContainer>
               <Button onClick={props.fight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
      );
   }
}
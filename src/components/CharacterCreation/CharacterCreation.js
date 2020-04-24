import React, { useContext } from 'react';
import { PlayerContext } from 'contexts/PlayerContext';
import { GameStageContext } from 'contexts/GameStageContext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';
import CharacterCreationStyles from './CharacterCreationStyles';
import ClassTypeDisplay from './ClassTypeDisplay';
import CombatIntroduction from './CombatIntroduction';

export default function CharacterCreation() {
   const classes = CharacterCreationStyles();
   const { player, dispatch } = useContext(PlayerContext);
   const { changeGameStage } = useContext(GameStageContext);
   
   const handleNameChange = evt => {
      dispatch({ type: "SET_NAME", value: evt.target.value })
   }
   
   const handleSelect = evt => {
      dispatch({ type: "SET_CLASS_TYPE", value: evt.target.value })
   }
   
   const goToScene1 = () => {
      changeGameStage('scene1')
   }
   
   return (
      <div className={classes.CharacterCreation}>
         <div className={classes.container}>
            <CombatIntroduction />
            <div className={classes.CreationForm}>
               <label htmlFor="name">Character name:</label>
               <input id="name" type="text" autoComplete="off" value={player.name} maxLength="12" onChange={handleNameChange}/>
               
               <label htmlFor="showType">Class:</label>
               <Select 
                  labelId="showType"
                  disableUnderline
                  value={player.classType}
                  onChange={handleSelect}
                  className={classes.selectComponent}
                  MenuProps={{ disableScrollLock: true }}
                  classes={{
                     root: classes.selectRoot
                  }} 
               >
                  <MenuItem value='warrior' classes={{gutters: classes.menuItemGutters}}>Warrior</MenuItem>
                  <MenuItem value='mage' classes={{gutters: classes.menuItemGutters}}>Mage</MenuItem>
                  <MenuItem value='rogue' classes={{gutters: classes.menuItemGutters}}>Rogue</MenuItem>
               </Select>
               <ClassTypeDisplay playerClass={player.classType}/>
            </div>
         </div>
         <ButtonContainer>
            <Button onClick={goToScene1} variant="contained" color="primary">Start Game</Button>
         </ButtonContainer>
      </div>
   );
}
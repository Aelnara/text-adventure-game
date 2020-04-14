import React, { createContext, useReducer } from 'react';
import playerReducer from 'reducers/PlayerReducer';
import { defaultPlayer } from 'components/CharacterCreation/defaultPlayer';

export const PlayerContext = createContext();

export function PlayerProvider(props) {
   const [player, dispatch] = useReducer(playerReducer, defaultPlayer)
   
   return (
      <PlayerContext.Provider value={{ player, dispatch }}>
         {props.children}
      </PlayerContext.Provider>
   );
}
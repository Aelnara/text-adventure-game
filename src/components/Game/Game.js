import React, { useContext } from 'react';
import { GameStageContext } from 'contexts/GameStageContext';
import { PlayerContext } from 'contexts/PlayerContext';
import Paper from '@material-ui/core/Paper';
import GameStyles from './GameStyles';
import Intro from 'components/Scenes/Intro';
import CharacterCreation from 'components/CharacterCreation/CharacterCreation';
import Scene1 from 'components/Scenes/Scene1/Scene1';
import Scene2 from 'components/Scenes/Scene2/Scene2';
import Scene3 from 'components/Scenes/Scene3/Scene3';
import Scene4 from 'components/Scenes/Scene4/Scene4';
import Hint1 from 'components/Scenes/Hint1/Hint1';
import Scene5 from 'components/Scenes/Scene5/Scene5';
import Scene6 from 'components/Scenes/Scene6/Scene6';
import Scene7 from 'components/Scenes/Scene7/Scene7';
import Scene8 from 'components/Scenes/Scene8/Scene8';
import LevelUp from 'components/Scenes/LevelUp';
import Dead from 'components/Scenes/Dead';

const stage = {
  intro: <Intro />,
  characterCreation: <CharacterCreation />,
  scene1: <Scene1 />,
  scene2: <Scene2 />,
  scene3: <Scene3 />,
  scene4: <Scene4 />,
  hint1: <Hint1 />,
  scene5: <Scene5 />,
  scene6: <Scene6 />,
  scene7: <Scene7 />,
  scene8: <Scene8 />,
};

export default function Game() {
   const { gameStage } = useContext(GameStageContext);
   const { player } = useContext(PlayerContext);
   const classes = GameStyles();
   const stageDisplay = stage[gameStage];
   return (
      <div className={classes.Game}>
         <Paper className={classes.Paper} elevation={3} style={{width: '1400px', height: '900px'}}>
            {stageDisplay}
            {player.leveledUp && <LevelUp />}
            {player.dead && <Dead />}
         </Paper>
      </div>
   );
}
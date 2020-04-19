import React from 'react';
import Hero from '../Hero';
import { GAME_SIZE } from '../../settings/constants';
import Demon from '../Demon';
import MiniDemon from '../MiniDemon';
import Trap from '../Trap';
import Chest from '../Chest';

const Board = () => {
   return (
      <div>
         <MiniDemon />
         <Hero />
         <Demon />
         <Trap />
         <Chest />
         <img src="./assets/tileset.gif" width={GAME_SIZE} height={GAME_SIZE} alt="" />
      </div>
   );
}

// crtl + . sobre o GAME_SIZE faz o import da constante.

export default Board;
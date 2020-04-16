import React from 'react';
import Hero from '../Hero';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
   return (
      <div>
         <Hero />
         <img src="./assets/tileset.gif" width={GAME_SIZE} height={GAME_SIZE} alt="" />
      </div>
   );
}

// crtl + . sobre o GAME_SIZE faz o import da constante.

export default Board;
import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants'

const Trap = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 12,
        left: TILE_SIZE * 6,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: 'url(./assets/TRAP.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation 0.5s infinite steps(8)',
      }}>

    </div>
  );
}

export default Trap;
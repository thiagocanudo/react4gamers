import React from 'react';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants'

const MiniDemon = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 6,
        left: TILE_SIZE * 1,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: 'url(./assets/MINI-DEMON.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'mini-demon-animation 0.5s infinite steps(4)',
      }}>

    </div>
  );
}

export default MiniDemon;
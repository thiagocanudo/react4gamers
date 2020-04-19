import React from 'react';
import './index.css';
import { TILE_SIZE, DEMON_TILE } from '../../settings/constants'

const Demon = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 2,
        left: TILE_SIZE * 5,
        width: DEMON_TILE,
        height: DEMON_TILE,
        backgroundImage: 'url(./assets/Demon.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation 0.5s infinite steps(4)',
      }}>

    </div>
  );
}

export default Demon;
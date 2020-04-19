import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants'

const Chest = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 14,
        left: TILE_SIZE * 7,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: 'url(./assets/CHEST.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'chest-animation 0.5s infinite steps(3)',
      }}>

    </div>
  );
}

export default Chest;
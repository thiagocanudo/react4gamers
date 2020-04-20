import React from 'react';
import { TILE_SIZE, DEMON_TILE, EDirection, HEAD_OFFSET } from '../../settings/constants';

import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

const Demon = () => {

  const moviment = useEnemyMoviment({ x: 5, y: 6 });

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * moviment.position.y - HEAD_OFFSET,
        left: TILE_SIZE * moviment.position.x,
        width: DEMON_TILE,
        height: DEMON_TILE,
        backgroundImage: 'url(./assets/Demon.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation 0.5s infinite steps(4)',
        transform: `rotateY(${moviment.direction === EDirection.RIGHT ? '10deg' : '180deg'})`,
      }}>

    </div>
  );
}

export default Demon;
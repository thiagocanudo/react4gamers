import React from 'react';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants'
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

const MiniDemon = () => {

  const moviment = useEnemyMoviment({ x: 10, y: 6 });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * moviment.position.y,
        left: TILE_SIZE * moviment.position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: 'url(./assets/MINI-DEMON.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'mini-demon-animation 0.5s infinite steps(4)',
        transform: `rotateY(${moviment.direction === EDirection.RIGHT ? '10deg' : '180deg'})`,
      }}>

    </div>
  );
}

export default MiniDemon;
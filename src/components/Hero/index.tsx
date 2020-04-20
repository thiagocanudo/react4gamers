import React from 'react';

import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';

import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';


const initialPosition = {
  x: 15,
  y: 18
}

const Hero = () => {

  /* const { position, direction } = useHeroMoviment(initialPosition);*/
  /* CHAMA O  só position ou direction */

  const moviment = useHeroMoviment(initialPosition);
  /* CHAMA O  moviment.position ou moviment.direction */

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * moviment.position.y - HEAD_OFFSET,
        left: TILE_SIZE * moviment.position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: 'url(./assets/HERO.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
        /* transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`, */
        animation: 'hero-animation 0.5s infinite steps(4)',
        transform: `rotateY(${moviment.direction === EDirection.RIGHT ? '10deg' : '180deg'})`,
        zIndex: 1
      }}>

    </div >
  );
}

export default Hero;
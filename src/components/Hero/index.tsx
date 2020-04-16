import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants'

const Hero = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 48 * 2,
        left: 48 * 1,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: 'url(./assets/HERO.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 0.5s infinite steps(4)',
      }}>

    </div>
  );
}

export default Hero;
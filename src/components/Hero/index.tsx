import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

const initialPosition = {
  x: 15,
  y: 18
}

const Hero = () => {

  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState('RIGHT');

  useEventListener('keydown', (event: React.keyboadEvent<HTMLDivElement>) => {
    console.log('tecla ativada', event.key);
    /* debugger; */
    if ((event.key === 'ArrowLeft') && (positionState.x > 0)) {
      setPositionState({ x: positionState.x - 1, y: positionState.y, });
      setDirection('LEFT');
    } else if ((event.key === 'ArrowRight') && (positionState.x <= 18)) {
      setPositionState({ x: positionState.x + 1, y: positionState.y, });
      setDirection('RIGHT');
    } else if ((event.key === 'ArrowUp') && (positionState.y <= 17)) {
      setPositionState({ x: positionState.x, y: positionState.y + 1 });
    } else if ((event.key === 'ArrowDown') && (positionState.y > 1)) {
      setPositionState({ x: positionState.x, y: positionState.y - 1, });
      /* const newPosition = {
        x: positionState.x,
        y: positionState.y - 1,
      }; */
    };
  })

  /*   useEventListener('mouseup', function (e) {
      console.log('Mouse mouseup');
    }); */

  /*   setTimeout(() => {
      const newPosition = { x: 16, y: 15 };
      setPositionState(newPosition)
    }, 2000); */

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * positionState.y,
        left: TILE_SIZE * positionState.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: 'url(./assets/HERO.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
        /* transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`, */
        transform: `rotateY(${direction === 'RIGHT' ? '10deg' : '180deg'})`,
        animation: 'hero-animation 0.5s infinite steps(4)',
      }}>

    </div>
  );
}

export default Hero;
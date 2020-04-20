import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition) {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.keyboadEvent<HTMLDivElement>) => {
    console.log('tecla ativada', event.key);
    /* debugger; */

    const direction = event.key as any;
    const nextPosition = handleNextPosition(direction, positionState);
    setPositionState(nextPosition);
    setDirection(direction);
  })

  /*   useEventListener('mouseup', function (e) {
      console.log('Mouse mouseup');
    }); */

  /*   setTimeout(() => {
      const newPosition = { x: 16, y: 15 };
      setPositionState(newPosition)
    }, 2000); */

  const returnValue = {
    position: positionState,
    direction: direction
  }

  return returnValue;

  // return {
  //   position: positionState,
  //   direction: direction
  // }

}


export default useHeroMoviment;
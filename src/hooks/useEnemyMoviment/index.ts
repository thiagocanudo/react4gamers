import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useEnemyMoviment(initialPosition) {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  // useEventListener('keydown', (event: React.keyboadEvent<HTMLDivElement>) => {

  useInterval(function move() {

    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(EDirection);
    const randonDirection = directionArray[random];

    const nextMoviment = handleNextPosition(randonDirection, positionState);

    setDirection(randonDirection);
    setPositionState(nextMoviment);
    console.log('EXECUTOU');
  }, 2000);


  return {
    position: positionState,
    direction: direction
  }

}

export default useEnemyMoviment;
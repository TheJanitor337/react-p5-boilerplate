import { FC, useRef } from 'react';

import Sketch from 'react-p5';
import P5Type from '@types/p5';

import { init, onCanvasResize, processKeys, renderAll } from '../P5/utils';

export const P5: FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>();

  const setup = (p5: P5Type, canvasParentEl: HTMLDivElement) => {
    if (!canvasContainerRef.current) {
      return;
    }

    init(p5, canvasContainerRef.current, canvasParentEl);
  };

  const draw = (p5: P5Type) => {
    processKeys();
    renderAll(p5);
  };

  return (
    <>
      <div
        id="canvasContainer"
        ref={canvasContainerRef}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Sketch
          setup={setup}
          draw={draw}
          windowResized={(p5: P5Type) =>
            onCanvasResize(p5, canvasContainerRef.current)
          }
        />
      </div>
    </>
  );
};

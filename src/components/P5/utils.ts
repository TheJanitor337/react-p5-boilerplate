import P5Type from '@types/p5';

import { Size } from '../../types/Size';

const sceneScale: Size = {
  width: 1,
  height: 1,
};
let p5: P5Type;
let canvas: P5Type.Element;
let sceneSize: Size;
let canvasContainer: HTMLDivElement;
let canvasParentEl: HTMLDivElement;

export const init = (
  p5Instance: P5Type,
  canvasContainerInstance: HTMLDivElement,
  canvasParentElInstance?: HTMLDivElement
) => {
  p5 = p5Instance;
  canvasContainer = canvasContainerInstance;
  canvasParentEl = canvasParentElInstance;

  const { sceneW, sceneH } = initCanvas(true);

  initScene(sceneW, sceneH);
};

export const processKeys = () => {
  // const keysPressed = [];
  // if (p5.keyIsDown(p5.LEFT_ARROW)) keysPressed.push(Direction.Left);
  // if (p5.keyIsDown(p5.RIGHT_ARROW)) keysPressed.push(Direction.Right);
  // if (p5.keyIsDown(p5.UP_ARROW)) keysPressed.push(Direction.Up);
  // if (p5.keyIsDown(p5.DOWN_ARROW)) keysPressed.push(Direction.Down);
  // processArrowKeyDown(keysPressed, (direction: Direction) => {
  // });
};

export const renderAll = (p5Instance: P5Type) => {
  p5 = p5Instance;
  render2dScene();
};

const initCanvas = (isNew = false) => {
  const containerWidth = canvasContainer.offsetWidth;
  const containerHeight = canvasContainer.offsetHeight;

  const sceneW = containerWidth * sceneScale.width;
  const sceneH = containerHeight * sceneScale.height;

  const canvasWidth = sceneW * 2;
  const canvasHeight = sceneH;

  if (isNew) {
    canvas = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentEl);
  }

  return {
    canvas,
    canvasWidth,
    canvasHeight,
    containerWidth,
    containerHeight,
    sceneW,
    sceneH,
  };
};

export const onCanvasResize = (
  p5Instance: P5Type,
  canvasContainerInstance: HTMLDivElement
) => {
  p5 = p5Instance;
  canvasContainer = canvasContainerInstance;

  const { canvasWidth, canvasHeight, sceneW, sceneH } = initCanvas(false);

  initScene(sceneW, sceneH);

  p5.resizeCanvas(canvasWidth, canvasHeight);
};

const initScene = (sceneW: number, sceneH: number) => {
  sceneSize = {
    width: sceneW,
    height: sceneH,
  };
};

const render2dScene = () => {
  p5.background(0);

  // 2d stuff
};

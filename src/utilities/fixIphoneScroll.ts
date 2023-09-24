import P5Type from '@types/p5';

export const fixIphoneScroll = (canvas: P5Type.Element) => {
  canvas.elt.addEventListener('touchstart', (event) => {
    event.preventDefault();
  });
  canvas.elt.addEventListener('touchmove', (event) => {
    event.preventDefault();
  });
  canvas.elt.addEventListener('touchend', (event) => {
    event.preventDefault();
  });
  canvas.elt.addEventListener('touchcancel', (event) => {
    event.preventDefault();
  });
};

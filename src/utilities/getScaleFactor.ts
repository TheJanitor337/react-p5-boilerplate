type AspectMode = 'fit' | 'fill';

type Size = { width: number; height: number };

export const getScaleFactor = (
  originalSize: Size,
  nextSize: Size,
  type: AspectMode = 'fit'
) => {
  const { width: originalWidth, height: originalHeight } = originalSize;
  const { width: nextWidth, height: nextHeight } = nextSize;
  const widthScale = nextWidth / originalWidth;
  const heightScale = nextHeight / originalHeight;

  let scaleFactor;
  if (type === 'fit') {
    scaleFactor = Math.min(widthScale, heightScale);
  } else if (type === 'fill') {
    scaleFactor = Math.max(widthScale, heightScale);
  }

  return scaleFactor;
};

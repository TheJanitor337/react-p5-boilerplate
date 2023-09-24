export enum Direction {
  None,
  Up,
  Down,
  Left,
  Right,
  LeftUp,
  LeftDown,
  RightUp,
  RightDown,
}

type DirectionCallback = (direction: Direction) => void;

export const processArrowKeyDown = (
  keyPresses: Direction[],
  callback: DirectionCallback
): void => {
  if (keyPresses.length > 2) {
    return; // Exit early for combinations with more than two key presses
  }

  let currentDirection = Direction.None;

  for (const keyPress of keyPresses) {
    let newDirection = Direction.None;

    if (keyPress === Direction.Up) {
      newDirection = Direction.Up;
    } else if (keyPress === Direction.Down) {
      newDirection = Direction.Down;
    } else if (keyPress === Direction.Left) {
      newDirection = Direction.Left;
    } else if (keyPress === Direction.Right) {
      newDirection = Direction.Right;
    }

    if (newDirection !== Direction.None) {
      if (currentDirection === Direction.None) {
        // First valid arrow key press
        currentDirection = newDirection;
      } else {
        // Combine directions for diagonal arrow key combinations
        currentDirection = combineDirections(currentDirection, newDirection);
      }
    }
  }

  if (currentDirection !== Direction.None) {
    callback(currentDirection);
  }
};

/**
 * Combines two Direction enums into one for diagonal arrow key combinations.
 */
const combineDirections = (dir1: Direction, dir2: Direction): Direction => {
  if (dir1 === Direction.Left && dir2 === Direction.Up) {
    return Direction.LeftUp;
  } else if (dir1 === Direction.Left && dir2 === Direction.Down) {
    return Direction.LeftDown;
  } else if (dir1 === Direction.Right && dir2 === Direction.Up) {
    return Direction.RightUp;
  } else if (dir1 === Direction.Right && dir2 === Direction.Down) {
    return Direction.RightDown;
  } else {
    return Direction.None;
  }
};

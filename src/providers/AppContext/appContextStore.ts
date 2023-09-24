export type GlobalContext = {
  width: number;
  height: number;
};

type Store = {
  size: GlobalContext;
};

const store: Store = {
  size: {
    height: undefined,
    width: undefined,
  },
};

export function getSnapshot(): GlobalContext {
  if (
    store.size.height !== window.innerHeight ||
    store.size.width !== window.innerWidth
  ) {
    store.size = { height: window.innerHeight, width: window.innerWidth };
  }
  return store.size;
}

export function subscribe(callback: (this: Window, ev: UIEvent) => void) {
  window.addEventListener('resize', callback);
  return () => {
    window.removeEventListener('resize', callback);
  };
}

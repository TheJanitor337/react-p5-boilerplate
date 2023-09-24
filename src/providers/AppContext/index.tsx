import React, { createContext, FC, useSyncExternalStore } from 'react';

import { type GlobalContext, getSnapshot, subscribe } from './appContextStore';

export const globalContext = createContext<GlobalContext>({
  width: undefined,
  height: undefined,
});

export const AppContext: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { height, width } = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <globalContext.Provider value={{ width, height }}>
      {children}
    </globalContext.Provider>
  );
};

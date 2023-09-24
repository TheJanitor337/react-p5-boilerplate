import { FC } from 'react';

import { P5 } from './components/P5';

import { AppContext } from './providers/AppContext';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <AppContext>
      <div>
        <h1>{name}</h1>
      </div>
      <P5 />
    </AppContext>
  );
};

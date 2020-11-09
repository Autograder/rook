import React from 'react';
import Routes from './Routes';
import { Provider } from './context/Context';

export default function App(props) {
    return (
      <Provider>
        <Routes />
      </Provider>
    );
}
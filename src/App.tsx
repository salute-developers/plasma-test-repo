import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

import { BodyXXS  } from '@salutejs/plasma-web';
import { BodyXXS as  BodyXXS2 } from '@salutejs/plasma-typo';

export const Text = styled(BodyXXS)`
  color: #fc0;
`;

export const Text2 = styled(BodyXXS2)`
  color: #fc0;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <Text>Добро пожаловать!</Text>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

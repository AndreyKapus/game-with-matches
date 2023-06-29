import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyles } from './GrobalStyles/GlobalStyles';
import App from './App';
import { Global } from '@emotion/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={GlobalStyles}/>
    <App />
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { StoreModuleProvider } from '../src/store/StoreModule'

ReactDOM.render(
  <StoreModuleProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreModuleProvider>,

  document.getElementById('root')
);


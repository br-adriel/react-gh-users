import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalCss } from './global/GlobalCss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalCss />
    <App />
  </React.StrictMode>
);

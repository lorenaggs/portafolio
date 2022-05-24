import React from 'react';
import {createRoot} from 'react-dom/client';
import "./styles/Index.scss";
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);


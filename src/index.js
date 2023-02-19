import React from 'react';
import ReactDOM from 'react-dom/client';
import './Stylesheets/index.scss';
import './Stylesheets/mediaqueries.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


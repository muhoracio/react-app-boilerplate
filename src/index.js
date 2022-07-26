import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

// Here's React 18 render root
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );

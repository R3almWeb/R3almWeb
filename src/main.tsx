// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Failed to find the root element. Check that <div id="root"></div> exists in index.html'
  );
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
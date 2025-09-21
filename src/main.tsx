import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Import your global CSS file that includes Tailwind and font imports
import '@/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
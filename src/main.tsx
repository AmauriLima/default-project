import ReactDOM from 'react-dom/client';

import '@/ui/styles/index.css';
import React from 'react';
import { App } from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

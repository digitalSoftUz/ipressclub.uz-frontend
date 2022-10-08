import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./utils/i18next";
import FallbackLoading from './FallbackLoading';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={FallbackLoading}>
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

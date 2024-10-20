import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
      <HashRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>
  </AppProvider>
);

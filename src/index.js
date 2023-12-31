import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { FavoritesCarsProvider } from '../src/context/FavoritesCarsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Car-Rent-App">
      <FavoritesCarsProvider >
        <App />
      </FavoritesCarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

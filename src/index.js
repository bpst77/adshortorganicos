import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import AppRoutes from './routes/Routes';
import HeaderNav from './components/header/HeaderNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderNav>
        <AppRoutes/>
      </HeaderNav>
    </BrowserRouter>
  </React.StrictMode>
);
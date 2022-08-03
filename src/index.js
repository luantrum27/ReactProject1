import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <App />
      </StoreProvider>
    </Router>
  </React.StrictMode>
);



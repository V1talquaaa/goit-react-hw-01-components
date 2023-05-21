import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './user.json'
import data from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'
export {data, friends, user, transactions};




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);



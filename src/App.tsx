import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Catalog from './components/Catalog';

import store from './store';

import './assets/styles/global.css';

import logo from './assets/images/redux-logo.png';

function App() {
  return (
    <Provider store={store}>
      <img src={logo} alt="Redux"/>
      
      <Catalog />

      <Cart />
    </Provider>
  );
}

export default App;

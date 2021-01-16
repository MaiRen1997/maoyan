import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/index'
import 'lib-flexible';
//引入字体
import './assets/font/font_82ir9xlce4g/iconfont.css'

import App from './App.jsx';
ReactDom.render(
  <BrowserRouter>
    <Provider store = { store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
)

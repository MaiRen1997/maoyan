import React from 'react';
import ReactDom from 'react-dom';
import 'lib-flexible';
import { BrowserRouter } from 'react-router-dom';
//引入字体
import './assets/font/font_82ir9xlce4g/iconfont.css'

import App from './App.jsx';
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)

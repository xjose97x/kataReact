import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App';
import './styles/layout.less';

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept(); 
}

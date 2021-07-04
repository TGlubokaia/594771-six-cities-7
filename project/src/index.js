import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  APT_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App aptCount={Setting.APT_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'),
);

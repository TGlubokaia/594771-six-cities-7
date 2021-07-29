import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const Setting = {
  APT_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      aptCount={Setting.APT_COUNT}
      offers={offers}
      review={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

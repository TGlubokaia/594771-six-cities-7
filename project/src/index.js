import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createAPI from './services/api';
import App from './components/app/app';
import reviews from './mocks/reviews';
import { reducer } from './store/reducer';
import {ActionCreator} from './store/action';
import {checkAuth, fetchOffers} from './store/api-actions';
import {AuthorizationStatus} from './const';
import { redirect } from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>


  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import user from "./reducers/authorization";
import productsReducer from "./reducers/products";
import productReducer from "./reducers/pruduct";

const rootReducer = combineReducers({
    authorization: user,
    products: productsReducer,
    product: productReducer
});

const saveUserInfo = state => {
    try {
        const save = JSON.stringify(state);
        localStorage.setItem('state', save);
    } catch (e) {
        console.log('Dont save')
    }
};

const loadUserInfo = () => {
  try {
      const load = localStorage.getItem('state');
      if(load === null) return undefined;

      return JSON.parse(load);
  } catch (e) {
      return undefined
  }
};

const store = createStore(rootReducer, loadUserInfo(), applyMiddleware(thunk));

store.subscribe(() => {
    saveUserInfo({
        authorization: {
            user: store.getState().authorization.user
        }
    })
});

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './assets/styles/global.scss';
import { store } from './core/store';
import Root from './core/Root';
import { fetchStockQuotesOnInit } from './components/FavoriteStocks/FavoriteStocksAPI';

store.dispatch(fetchStockQuotesOnInit());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Root />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

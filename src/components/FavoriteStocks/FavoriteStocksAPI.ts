import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IEX_BASE_DOMAIN,
    IEX_TOKEN,
    GET_STOCK_COMPANY_BY_SYMBOL,
    GET_STOCK_QUOTE_BY_SYMBOL,
} from '../../core/constants/apis';
import { getUserStateFromLocalStorage } from '../../core/utils';
import { AppThunk } from '../../core/store';

export const fetchIEX = (API: string) => {
    // return fetch(`${window.location.origin}/dummyData/dummyQuoteData.json?api=${API}`);
    return fetch(`${IEX_BASE_DOMAIN}${API}?token=${IEX_TOKEN}`);
};

// The function below is called a thunk and alloasdws us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const fetchStockQuote = createAsyncThunk('stock/quote', async (symbol: string, { rejectWithValue }) => {
    return fetchIEX(GET_STOCK_QUOTE_BY_SYMBOL.replace('{symbol}', symbol))
        .then(res => {
            if (res.ok) return res.json();
            return res?.text()?.then(text => {
                return rejectWithValue(text);
            });
        })
        .catch(() => {
            return rejectWithValue('Opps there seems to be an error. Please try again.');
        });
});

export const fetchStockQuotesOnInit = (): AppThunk => dispatch => {
    const prevUserState = getUserStateFromLocalStorage();
    const { favStocks } = prevUserState || {};
    if (favStocks && favStocks.length > 0) {
        favStocks.map(symbol => dispatch(fetchStockQuote(symbol)));
    }
};

export const fetchStockCompany = createAsyncThunk('stock/company', async (symbol: string, { rejectWithValue }) => {
    return fetchIEX(GET_STOCK_COMPANY_BY_SYMBOL.replace('{symbol}', symbol))
        .then(res => {
            if (res.ok) return res.json();
            return res?.text()?.then(text => {
                return rejectWithValue(text);
            });
        })
        .catch(() => {
            return rejectWithValue('Opps there seems to be an error. Please try again.');
        });
});

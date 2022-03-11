import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_STOCK_QUOTE_BY_SYMBOL } from '../../core/constants/apis';
import { getUserStateFromLocalStorage } from '../../core/utils';
import { AppThunk } from '../../core/store';
import FetchIEX from '../../core/api';
import { IError, IQuote } from '../../core/types';

// The function below is called a thunk and alloasdws us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const fetchQuote = createAsyncThunk('stock/quote', async (symbol: string, { rejectWithValue }) => {
    return FetchIEX(GET_STOCK_QUOTE_BY_SYMBOL.replace('{symbol}', symbol)).then(
        (result: IQuote) => result,
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error: IError) => rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.'),
    );
});

export const fetchQuotesOnInit = (): AppThunk => dispatch => {
    const prevUserState = getUserStateFromLocalStorage();
    const { favStocks } = prevUserState || {};
    if (favStocks && favStocks.length > 0) {
        favStocks.map(symbol => dispatch(fetchQuote(symbol)));
    }
};

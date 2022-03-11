import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_STOCK_QUOTE_BY_SYMBOL } from '../../../core/constants/apis';
import FetchIEX from '../../../core/api';
import { IError, IQuote } from '../../../core/types';

const fetchSearch = createAsyncThunk('search/quote', async (symbol: string, { rejectWithValue }) => {
    return FetchIEX(GET_STOCK_QUOTE_BY_SYMBOL.replace('{symbol}', symbol)).then(
        (result: IQuote) => result,
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error: IError) => rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.'),
    );
});

export default fetchSearch;
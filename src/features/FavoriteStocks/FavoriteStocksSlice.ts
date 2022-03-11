import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavoriteStocks, IFavStockItem, IQuote } from '../../app/types';
import { fetchQuote } from './FavoriteStocksAPI';

const initialState: IFavoriteStocks = {
    quotes: [],
    isLoading: false,
    error: null,
};

const addItemToQuotesHandler = (quotes: IQuote[], quote: IQuote) => {
    if (quotes.findIndex(x => x.symbol === quote.symbol) > -1) {
        // if Quote is already exist, then do nothing
        return quotes;
    }
    return [...quotes, quote];
};

const removeItemFromQuotesHandler = (quotes: IQuote[], symbol: string) => {
    return quotes.filter(x => x.symbol !== symbol);
};

export const favoriteStocksSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        removeItemFromQuotes: (state, action: PayloadAction<string>) => {
            state.quotes = removeItemFromQuotesHandler(state.quotes, action.payload);
        },
        addItemToQuotes: (state, action: PayloadAction<IQuote>) => {
            state.quotes = addItemToQuotesHandler(state.quotes, action.payload);
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: builder => {
        builder
            .addCase(fetchQuote.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchQuote.fulfilled, (state, action: PayloadAction<IQuote>) => {
                state.quotes.push(action.payload);
                state.isLoading = false;
            })
            .addCase(fetchQuote.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

const { reducer: favoriteStocksReducer, actions } = favoriteStocksSlice;

export const { removeItemFromQuotes, addItemToQuotes } = actions || {};

export default favoriteStocksReducer;

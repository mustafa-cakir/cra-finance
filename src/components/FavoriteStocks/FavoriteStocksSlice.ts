import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICompany, IFavoriteStocks } from '../../core/types';
import { GET_STOCK_COMPANY_BY_SYMBOL } from '../../core/constants/apis';
import fetchIEX from './FavoriteStocksAPI';

// The function below is called a thunk and alloasdws us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getStockCompany = createAsyncThunk('stock/company', async (symbol: string, { rejectWithValue }) => {
    return fetchIEX(GET_STOCK_COMPANY_BY_SYMBOL.replace('{symbol}', symbol))
        .then(res => {
            if (res.ok) return res.json();
            // return rejectWithValue('Opps there seems to be an error. Please try again.');
            return res?.text()?.then(text => {
                return rejectWithValue(text);
            });
        })
        .catch(() => {
            return rejectWithValue('Opps there seems to be an error. Please try again.');
        });
});

const initialState: IFavoriteStocks = {
    search: {
        company: null,
        isLoading: false,
        error: null,
    },
    list: {
        quotes: [],
        isLoading: false,
        error: null,
    },
};

export const favoriteStocksSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        //
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: builder => {
        builder
            .addCase(getStockCompany.pending, state => {
                state.search.company = null;
                state.search.isLoading = true;
                state.search.error = null;
            })
            .addCase(getStockCompany.fulfilled, (state, action: PayloadAction<ICompany>) => {
                state.search.company = action.payload;
                state.search.isLoading = false;
            })
            .addCase(getStockCompany.rejected, (state, action) => {
                state.search.isLoading = false;
                state.search.error = action.payload as string;
            });
    },
});

const { reducer: favoriteStocksReducer } = favoriteStocksSlice;

// export const { appendCompanyToFavoriteCompanies } = actions || {};

export default favoriteStocksReducer;

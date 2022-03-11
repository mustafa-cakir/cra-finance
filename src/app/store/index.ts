import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import favoriteStocksReducer from '../../features/FavoriteStocks/FavoriteStocksSlice';
import searchReducer from '../../features/FavoriteStocks/Search/SearchSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        favoriteStocks: favoriteStocksReducer,
        search: searchReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

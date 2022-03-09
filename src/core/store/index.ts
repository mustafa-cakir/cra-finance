import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import favoriteStocksReducer from '../../components/FavoriteStocks/FavoriteStocksSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        favoriteStocks: favoriteStocksReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavStockItem, IListingType, ITheme, IUser } from '../types';
import { getUserStateFromLocalStorage, setUserStateToLocalStorage } from '../utils';

// Check if user data is stored in the localStorage
const prevUserState = getUserStateFromLocalStorage();

const initialState: IUser = {
    theme: 'light',
    favStocks: [],
    listingType: 'list',
    // if prevUserState existed, merge it with the empty initialState. Merge instead of replace,
    // because some new props might be added to initialState in the future
    ...(prevUserState && prevUserState),
};

const userSlice = createSlice({
    name: 'global',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setListingType: (state, action: PayloadAction<IListingType>) => {
            state.listingType = action.payload;
            // store the user state into localStorage for persistancy
            setUserStateToLocalStorage(state);
        },
        setTheme: (state, action: PayloadAction<ITheme>) => {
            state.theme = action.payload;
            // store the user state into localStorage for persistancy
            setUserStateToLocalStorage(state);
        },
        toggleTheme: state => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            // store the user state into localStorage for persistancy
            setUserStateToLocalStorage(state);
        },
        addItemToFavStocks: (state, action: PayloadAction<IFavStockItem>) => {
            state.favStocks = [...state.favStocks, action.payload];
            // store the user state into localStorage for persistancy
            setUserStateToLocalStorage(state);
        },
        removeItemFromFavStocks: (state, action: PayloadAction<IFavStockItem>) => {
            state.favStocks = state.favStocks.filter(x => x !== action.payload);
            // store the user state into localStorage for persistancy
            setUserStateToLocalStorage(state);
        },
    },
});

const { reducer: userReducer, actions } = userSlice;

export const { setTheme, toggleTheme, addItemToFavStocks, removeItemFromFavStocks, setListingType } = actions;

export default userReducer;

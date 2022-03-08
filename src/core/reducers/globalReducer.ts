import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ITheme = 'light' | 'dark';

type IGlobalState = {
    theme: ITheme;
};

const initialState: IGlobalState = {
    theme: 'light',
};

const globalSlices = createSlice({
    name: 'global',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setTheme: (state, action: PayloadAction<ITheme>) => {
            state.theme = action.payload;
        },
        toggleTheme: state => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

const { reducer: globalReducer, actions } = globalSlices;

export const { setTheme, toggleTheme } = actions;

export default globalReducer;

import React, { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer';

const customRender = (
    ui: ReactElement,
    {
        // @ts-ignore
        preloadedState,
        store = configureStore({
            reducer: rootReducer,
            preloadedState,
        }),
        ...renderOptions
    } = {},
) => {
    const AllTheProviders: FC = ({ children }) => {
        return (
            <Provider store={store}>
                <BrowserRouter>{children}</BrowserRouter>
            </Provider>
        );
    };

    return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

export * from '@testing-library/react';
export { customRender as render };

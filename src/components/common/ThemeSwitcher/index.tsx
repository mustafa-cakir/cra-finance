import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { toggleTheme } from '../../../core/reducers/userReducer';
import './Style.scss';

const ThemeSwitcher = () => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector(redux => redux.user);

    const toggleHandler = () => {
        dispatch(toggleTheme());
    };

    return (
        <label className="theme-switcher">
            <div className="theme-switcher-icon">
                <input type="checkbox" onChange={toggleHandler} id="theme-switcher" checked={theme === 'dark'} />
                <span className="pin" />
            </div>
            <div className="theme-switcher-text">Dark Mode</div>
        </label>
    );
};

export default ThemeSwitcher;

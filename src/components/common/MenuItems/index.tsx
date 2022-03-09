import React from 'react';
import { NavLink } from 'react-router-dom';
import { URL_HOMEPAGE, URL_UIKIT } from '../../../core/constants';

const MenuItems = () => {
    return (
        <ul>
            <li>
                <NavLink to={URL_HOMEPAGE} className="ui-link">
                    Homepage
                </NavLink>
            </li>
            <li>
                <NavLink to={URL_UIKIT} className="ui-link">
                    UI-Kit Page
                </NavLink>
            </li>
            <li>
                <NavLink to="/some-not-exist-link" className="ui-link">
                    404 Page
                </NavLink>
            </li>
        </ul>
    );
};

export default MenuItems;
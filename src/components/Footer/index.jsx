import React from 'react';
import { NavLink } from 'react-router-dom';
import { URL_HOMEPAGE } from '../../core/constants';
import './Style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h3>Footer Links</h3>
                <ul>
                    <li>
                        <NavLink to={URL_HOMEPAGE} className="ui-link">
                            Homepage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/some-not-exist-url" className="ui-link">
                            404 Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/some-link-1" className="ui-link">
                            Some Sample Link #1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/some-link-2" className="ui-link">
                            Some More Link #2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/some-link-3" className="ui-link">
                            Some Even More Link #3
                        </NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

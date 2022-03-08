import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { URL_HOMEPAGE } from '../../core/constants';
import './Style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-inner-left">
                        <Link to={URL_HOMEPAGE}>
                            <img src={logo} className="header-logo" alt="logo" />
                        </Link>
                        <div className="header-separator" />
                        <div className="header-slogan">Favorite Stocks</div>
                    </div>
                    <div className="header-inner-right">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

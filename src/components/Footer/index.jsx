import React from 'react';
import MenuItems from '../common/MenuItems';
import './Style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h3>Footer Links</h3>
                <MenuItems />
            </div>
        </footer>
    );
};

export default Footer;

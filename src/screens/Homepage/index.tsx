import React, { useEffect } from 'react';
import FavoriteStocks from '../../components/FavoriteStocks';

const Homepage = () => {
    useEffect(() => {
        document.title = 'Favorite Stocks';
    }, []);

    return (
        <div className="container ui-min-h-500">
            <FavoriteStocks />
        </div>
    );
};

export default Homepage;

import React, { useEffect } from 'react';

const Homepage = () => {
    useEffect(() => {
        document.title = 'Favorite Stocks';
    }, []);

    return (
        <div className="container ui-min-h-500">
            <div>homepage will</div>
            <div>here</div>
        </div>
    );
};

export default Homepage;

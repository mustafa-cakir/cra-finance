import React, { useEffect } from 'react';
import './Style.scss';

const Page404 = () => {
    useEffect(() => {
        document.title = '404 - Page Not Found';
    }, []);

    return (
        <div className="page-404">
            <div className="container">
                <div className="page-404-inner">
                    <div className="ui-box">
                        <code className="ui-placeholder image">Not Found Image</code>
                        <div>Page not found.</div>
                        <div className="ui-text-muted">That's all we know</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page404;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page404 from '../screens/Page404';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { useAppSelector } from './hooks';

const Root = () => {
    const { theme } = useAppSelector(redux => redux.user);
    return (
        <div className={`app theme-${theme}`}>
            <BrowserRouter>
                <ErrorBoundary>
                    <Header />
                    <div className="app-content">
                        <Routes>
                            {routes.map(({ path, Component }) => {
                                return <Route key={path} path={path} element={<Component />} />;
                            })}
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </div>
                    <hr />
                    <Footer />
                </ErrorBoundary>
            </BrowserRouter>
        </div>
    );
};

export default Root;

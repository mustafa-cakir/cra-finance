import React, { useState } from 'react';
import { IQuote } from '../../../../../core/types';
import { currenyFormatter } from '../../../../../core/utils';
import Percentage from '../../../../common/Percentage';
import Icons from '../../../../common/Icons';
import { useAppDispatch, useAppSelector } from '../../../../../core/hooks';
import { removeItemFromQuotes } from '../../../FavoriteStocksSlice';
import { removeItemFromFavStocks } from '../../../../../core/reducers/userReducer';
import './Style.scss';
import CompanyDetails from '../../../CompanyDetails';
import Modal from '../../../../common/Modal';

const GridLayout = () => {
    const [openCompanyDetailBySymbol, setOpenCompanyDetailBySymbol] = useState('');
    const dispatch = useAppDispatch();
    const { quotes } = useAppSelector(redux => redux.favoriteStocks);

    const removeStockHandler = (favStock: string) => {
        dispatch(removeItemFromQuotes(favStock));
        dispatch(removeItemFromFavStocks(favStock));
    };

    const setOpenDetailBySymbolClickHandler = (symbol: string) => {
        setOpenCompanyDetailBySymbol(openCompanyDetailBySymbol === symbol ? '' : symbol); // toggle or set
    };

    const closeCompanyDetailModalHandler = () => {
        setOpenCompanyDetailBySymbol('');
    };

    return (
        <div className="favorite-stocks-list-grid">
            {openCompanyDetailBySymbol && (
                <Modal closeHandler={closeCompanyDetailModalHandler}>
                    <CompanyDetails symbol={openCompanyDetailBySymbol} />
                </Modal>
            )}
            <div className="grid-row">
                {quotes?.map((quote: IQuote) => {
                    const { symbol, companyName, latestPrice, currency, changePercent } = quote || {};
                    return (
                        <div className="grid-col col-box" key={symbol}>
                            <div className="ui-box">
                                <div className="favorite-stocks-list-grid-inner">
                                    <div className="symbol">{symbol}</div>
                                    <div className="ui-text-muted company">{companyName}</div>
                                    <div>
                                        <button
                                            onClick={() => setOpenDetailBySymbolClickHandler(symbol)}
                                            className="read-more ui-link"
                                            type="button"
                                        >
                                            Details <Icons name="chevron-right" />
                                        </button>
                                    </div>
                                    <hr />
                                    <div className="latest-price">{currenyFormatter(latestPrice, currency)}</div>
                                    <div>
                                        <span className="ui-text-muted">Change:</span>{' '}
                                        <Percentage changePercent={changePercent} />
                                    </div>
                                    <button
                                        type="button"
                                        className="ui-icon-button remove-btn"
                                        onClick={() => removeStockHandler(symbol)}
                                    >
                                        <Icons name="x" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GridLayout;

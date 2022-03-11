import React, { useState } from 'react';
import { IQuote } from '../../../../../app/types';
import { currenyFormatter } from '../../../../../common/utils';
import Percentage from '../../../../../common/components/Percentage';
import Icons from '../../../../../common/components/Icons';
import { useAppDispatch, useAppSelector } from '../../../../../common/hooks';
import { removeItemFromQuotes } from '../../../FavoriteStocksSlice';
import { removeItemFromFavStocks } from '../../../../../app/reducers/userReducer';
import './Style.scss';
import CompanyDetails from '../../../CompanyDetails';
import Modal from '../../../../../common/components/Modal';

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
                                            className="ui-read-more-btn ui-mt-5"
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

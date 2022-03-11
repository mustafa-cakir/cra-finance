import React, { useState } from 'react';
import { IQuote } from '../../../../../app/types';
import { currenyFormatter } from '../../../../../common/utils';
import Percentage from '../../../../../common/components/Percentage';
import Icons from '../../../../../common/components/Icons';
import { useAppDispatch, useAppSelector } from '../../../../../common/hooks';
import { removeItemFromQuotes } from '../../../FavoriteStocksSlice';
import { removeItemFromFavStocks } from '../../../../../app/reducers/userReducer';
import './Style.scss';
import Modal from '../../../../../common/components/Modal';
import CompanyDetails from '../../../CompanyDetails';

const TableLayout = () => {
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
        <div className="favorite-stocks-list-table">
            {openCompanyDetailBySymbol && (
                <Modal closeHandler={closeCompanyDetailModalHandler}>
                    <CompanyDetails symbol={openCompanyDetailBySymbol} />
                </Modal>
            )}
            <div className="favorite-stocks-list-table-inner">
                <table>
                    <thead>
                        <tr>
                            <th className="w-100">Symbol</th>
                            <th className="min-w-175">Company name</th>
                            <th className="w-100" />
                            <th className="ui-text-right w-200">Current stock price</th>
                            <th className="ui-text-right w-200">Today's change</th>
                            <th className="w-75" />
                        </tr>
                    </thead>
                    <tbody>
                        {quotes?.map((quote: IQuote) => {
                            const { symbol, companyName, latestPrice, currency, changePercent } = quote || {};
                            return (
                                <tr key={symbol}>
                                    <td>{symbol}</td>
                                    <td>{companyName}</td>
                                    <td>
                                        <button
                                            onClick={() => setOpenDetailBySymbolClickHandler(symbol)}
                                            className="ui-read-more-btn"
                                            type="button"
                                        >
                                            Details <Icons name="chevron-right" />
                                        </button>
                                    </td>
                                    <td className="ui-text-right">{currenyFormatter(latestPrice, currency)}</td>
                                    <td className="ui-text-right">
                                        <Percentage changePercent={changePercent} />
                                    </td>
                                    <td className="ui-text-right">
                                        <button
                                            type="button"
                                            className="ui-icon-button"
                                            onClick={() => removeStockHandler(symbol)}
                                        >
                                            <Icons name="x" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableLayout;

import React from 'react';
import { IQuote } from '../../../../../core/types';
import { currenyFormatter } from '../../../../../core/utils';
import Percentage from '../../../../common/Percentage';
import Icons from '../../../../common/Icons';
import { useAppDispatch, useAppSelector } from '../../../../../core/hooks';
import { removeItemFromQuotes } from '../../../FavoriteStocksSlice';
import { removeItemFromFavStocks } from '../../../../../core/reducers/userReducer';
import './Style.scss';

const TableLayout = () => {
    const dispatch = useAppDispatch();
    const { quotes } = useAppSelector(redux => redux.favoriteStocks.list);

    const removeStockHandler = (favStock: string) => {
        dispatch(removeItemFromQuotes(favStock));
        dispatch(removeItemFromFavStocks(favStock));
    };

    return (
        <div className="favorite-stocks-list-table">
            <div className="favorite-stocks-list-table-inner">
                <table>
                    <thead>
                        <tr>
                            <th className="w-100">Symbol</th>
                            <th className="min-w-175">Company name</th>
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

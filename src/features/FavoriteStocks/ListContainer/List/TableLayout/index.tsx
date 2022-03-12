import React from 'react';
import { IQuote } from '../../../../../app/types';
import { currenyFormatter } from '../../../../../common/utils';
import Percentage from '../../../../../common/components/Percentage';
import Icons from '../../../../../common/components/Icons';
import { useAppSelector } from '../../../../../common/hooks';
import './Style.scss';

type Prop = {
    removeStockHandler: (favStock: string) => void;
    openCompanyDetailModalHandler: (symbol: string) => void;
};

const TableLayout = ({ removeStockHandler, openCompanyDetailModalHandler }: Prop) => {
    const { quotes } = useAppSelector(redux => redux.favoriteStocks);
    return (
        <div className="favorite-stocks-list-table" data-testid="favorite-stocks-list-table">
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
                                            onClick={() => openCompanyDetailModalHandler(symbol)}
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

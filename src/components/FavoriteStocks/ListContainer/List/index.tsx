import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks';
import Icons from '../../../common/Icons';
import { removeItemFromFavStocks } from '../../../../core/reducers/userReducer';
import { removeItemFromQuotes } from '../../FavoriteStocksSlice';
import './Style.scss';
import { IQuote } from '../../../../core/types';
import { currenyFormatter } from '../../../../core/utils';
import Percentage from '../../../common/Percentage';
import Alert from '../../../common/Alert';
import ShimmerLoading from './ShimmerLoading';

const FavoriteStocksList = () => {
    const { quotes, isLoading, error } = useAppSelector(redux => redux.favoriteStocks.list);
    const dispatch = useAppDispatch();

    const removeStockHandler = (favStock: string) => {
        dispatch(removeItemFromQuotes(favStock));
        dispatch(removeItemFromFavStocks(favStock));
    };

    if (error) return <Alert type="error" message={error} />;

    return (
        <div className="favorite-stocks-list">
            {quotes?.map((quote: IQuote) => {
                const { symbol, companyName, latestPrice, currency, changePercent } = quote || {};
                return (
                    <div className="ui-box ui-mb-15" key={symbol}>
                        <div className="favorite-stocks-list-inner">
                            <div className="symbol">{symbol}</div>
                            {companyName && <div className="separator" />}
                            <div className="ui-text-muted company">{companyName}</div>
                            <div className="latest-price">{currenyFormatter(latestPrice, currency)}</div>
                            <div className="change-percentage">
                                <Percentage changePercent={changePercent} />
                            </div>
                            <button type="button" className="ui-icon-button" onClick={() => removeStockHandler(symbol)}>
                                <Icons name="x" />
                            </button>
                        </div>
                    </div>
                );
            })}
            {isLoading && <ShimmerLoading />}
        </div>
    );
};

export default FavoriteStocksList;

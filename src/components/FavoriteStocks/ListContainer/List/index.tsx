import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks';
import Icons from '../../../common/Icons';
import { removeItemFromFavStocks } from '../../../../core/reducers/userReducer';
import './Style.scss';

const FavoriteStocksList = () => {
    const { favStocks } = useAppSelector(redux => redux.user);
    const dispatch = useAppDispatch();

    const removeStockHandler = (favStock: string) => {
        dispatch(removeItemFromFavStocks(favStock));
    };

    return (
        <div className="favorite-stocks-list">
            {favStocks?.map((symbol: string) => {
                return (
                    <div className="ui-box ui-mb-15" key={symbol}>
                        <div className="symbol">{symbol}</div>
                        <button type="button" onClick={() => removeStockHandler(symbol)}>
                            {symbol} <Icons name="x" />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default FavoriteStocksList;

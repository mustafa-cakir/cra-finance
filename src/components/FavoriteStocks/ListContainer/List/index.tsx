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
                        <div className="favorite-stocks-list-inner">
                            <div className="symbol">{symbol}</div>
                            <button type="button" className="ui-icon-button" onClick={() => removeStockHandler(symbol)}>
                                <Icons name="x" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FavoriteStocksList;

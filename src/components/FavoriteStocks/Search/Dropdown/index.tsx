import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks';
import { getStockCompany } from '../../FavoriteStocksSlice';
import Alert from '../../../common/Alert';
import { addItemToFavStocks } from '../../../../core/reducers/userReducer';
import Icons from '../../../common/Icons';
import ShimmerLoading from './ShimmerLoading';
import './Style.scss';

type Props = {
    keyword: string;
    addStockToFavCallback: () => void;
};

const FavoriteStocksSearchDropdown = ({ keyword, addStockToFavCallback }: Props) => {
    const dispatch = useAppDispatch();
    const { company } = useAppSelector(redux => redux.favoriteStocks);
    const { favStocks } = useAppSelector(redux => redux.user);
    const { data, isLoading, error } = company || {};

    useEffect(() => {
        if (keyword) {
            dispatch(getStockCompany(keyword))
                .then(() => {
                    // do nothing;
                })
                .catch(() => {
                    // do nothing.
                });
        }
    }, [dispatch, keyword]);

    const addStockToFavHandler = (symbol: string) => {
        dispatch(addItemToFavStocks(symbol));
        addStockToFavCallback();
    };

    const { symbol, companyName } = data || {};

    if (error) {
        return (
            <div className="error-contaıner">
                <Alert type="error" message={error} />
            </div>
        );
    }

    if (isLoading) return <ShimmerLoading />;

    if (symbol) {
        return (
            <button type="button" className="company-btn" onClick={() => addStockToFavHandler(symbol)}>
                <div className="symbol">{symbol}</div>
                {companyName && <div className="separator" />}
                <div className="ui-text-muted company">{companyName}</div>
                <div className="fav-icon">
                    <Icons name={favStocks.indexOf(symbol) > -1 ? 'check-circle' : 'plus-circle'} />
                </div>
            </button>
        );
    }

    return <div className="empty-state">No result foundç</div>;
};

export default FavoriteStocksSearchDropdown;

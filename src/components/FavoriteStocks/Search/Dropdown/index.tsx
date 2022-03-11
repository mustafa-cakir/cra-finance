import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks';
import Alert from '../../../common/Alert';
import { addItemToFavStocks } from '../../../../core/reducers/userReducer';
import Icons from '../../../common/Icons';
import ShimmerLoading from './ShimmerLoading';
import { fetchStockCompany, fetchStockQuote } from '../../FavoriteStocksAPI';
import './Style.scss';

type Props = {
    keyword: string;
    addStockToFavCallback: () => void;
};

const FavoriteStocksSearchDropdown = ({ keyword, addStockToFavCallback }: Props) => {
    const dispatch = useAppDispatch();
    const { search } = useAppSelector(redux => redux.favoriteStocks);
    const { favStocks } = useAppSelector(redux => redux.user);
    const { company, isLoading, error } = search || {};

    useEffect(() => {
        if (keyword) {
            void dispatch(fetchStockCompany(keyword));
        }
    }, [dispatch, keyword]);

    const addStockToFavHandler = (symbol: string) => {
        if (favStocks.indexOf(symbol) < 0) {
            // Check if stock is already in the favStocks
            void dispatch(fetchStockQuote(symbol));
            dispatch(addItemToFavStocks(symbol));
        }
        addStockToFavCallback();
    };

    const { symbol, companyName } = company || {};

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

    return (
        <div className="alert-contaıner">
            <Alert type="info" message="No result found." />
        </div>
    );
};

export default FavoriteStocksSearchDropdown;

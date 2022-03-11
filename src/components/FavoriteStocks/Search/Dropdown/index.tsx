import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks';
import Alert from '../../../common/Alert';
import { addItemToFavStocks } from '../../../../core/reducers/userReducer';
import Icons from '../../../common/Icons';
import ShimmerLoading from './ShimmerLoading';
import fetchSearch from '../SearchAPI';
import { IQuote } from '../../../../core/types';
import { addItemToQuotes } from '../../FavoriteStocksSlice';
import './Style.scss';

type Props = {
    keyword: string;
    addStockToFavCallback: () => void;
};

const FavoriteStocksSearchDropdown = ({ keyword, addStockToFavCallback }: Props) => {
    const dispatch = useAppDispatch();
    const { quote, isLoading, error } = useAppSelector(redux => redux.search);
    const { favStocks } = useAppSelector(redux => redux.user);

    useEffect(() => {
        if (keyword) {
            void dispatch(fetchSearch(keyword));
        }
    }, [dispatch, keyword]);

    const addStockToFavHandler = (payload: IQuote) => {
        dispatch(addItemToQuotes(payload));
        dispatch(addItemToFavStocks(payload.symbol));
        addStockToFavCallback();
    };

    if (error) {
        return (
            <div className="error-contaıner">
                <Alert type="error" message={error} />
            </div>
        );
    }

    if (isLoading) return <ShimmerLoading />;

    if (quote?.symbol) {
        return (
            <button type="button" className="company-btn" onClick={() => addStockToFavHandler(quote)}>
                <div className="symbol">{quote.symbol}</div>
                {quote.companyName && <div className="separator" />}
                <div className="ui-text-muted company">{quote.companyName}</div>
                <div className="fav-icon">
                    <Icons name={favStocks.indexOf(quote.symbol) > -1 ? 'check-circle' : 'plus-circle'} />
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

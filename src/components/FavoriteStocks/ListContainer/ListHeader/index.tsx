import React from 'react';
import Icons from '../../../common/Icons';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks';
import { setListingType } from '../../../../core/reducers/userReducer';
import { IListingType } from '../../../../core/types';
import './Style.scss';

const FavoriteStocksListHeader = () => {
    const { listingType } = useAppSelector(redux => redux.user);
    const dispatch = useAppDispatch();

    const changeListingType = (type: IListingType) => {
        dispatch(setListingType(type));
    };
    return (
        <div className="favorite-stocks-list-header">
            <h3>My Favorites</h3>
            <div className="sort-icon">
                <button
                    type="button"
                    onClick={() => changeListingType('list')}
                    className={`ui-icon-button ${listingType === 'list' ? 'active' : ''}`}
                >
                    <Icons name="list" />
                </button>
                <div className="separator" />
                <button
                    type="button"
                    onClick={() => changeListingType('grid')}
                    className={`ui-icon-button ${listingType === 'grid' ? 'active' : ''}`}
                >
                    <Icons name="grid" />
                </button>
            </div>
        </div>
    );
};

export default FavoriteStocksListHeader;

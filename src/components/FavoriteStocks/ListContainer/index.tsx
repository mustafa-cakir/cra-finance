import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { removeItemFromFavStocks } from '../../../core/reducers/userReducer';
import Icons from '../../common/Icons';

const ListContainer = () => {
    const { favStocks } = useAppSelector(redux => redux.user);
    const dispatch = useAppDispatch();

    const removeStockHandler = (favStock: string) => {
        dispatch(removeItemFromFavStocks(favStock));
    };

    return (
        <div style={{ marginTop: 100 }}>
            <ul>
                {favStocks?.map((favStock: string) => (
                    <li key={favStock}>
                        <button type="button" onClick={() => removeStockHandler(favStock)}>
                            {favStock} <Icons name="x" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListContainer;

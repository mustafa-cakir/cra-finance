import React, { FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { addItemToFavStocks, removeItemFromFavStocks } from '../../core/reducers/userReducer';

const Homepage = () => {
    const { favStocks } = useAppSelector(redux => redux.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
        document.title = 'Favorite Stocks';
    }, []);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const favStock = formData.get('stock') as string;
        dispatch(addItemToFavStocks(favStock));
    };

    const removeStockHandler = (favStock: string) => {
        dispatch(removeItemFromFavStocks(favStock));
    };

    return (
        <div className="container ui-min-h-500">
            <div>homepage will</div>
            <div>here</div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" name="stock" className="ui-input" />
                </div>
                <button type="submit" className="ui-buton">
                    Submit
                </button>
            </form>

            <div style={{ marginTop: 100 }}>
                <ul>
                    {favStocks?.map((favStock: string) => (
                        <li key={favStock}>
                            <button type="button" onClick={() => removeStockHandler(favStock)}>
                                {favStock}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Homepage;

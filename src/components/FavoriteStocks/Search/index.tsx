import React, { useRef, useState } from 'react';
import Icons from '../../common/Icons';
import WithAnimaation from '../../common/WithAnimation';
import FavoriteStocksSearchDropdown from './Dropdown';
import useCloseOnClickOutside from '../../../core/hooks/useCloseOnClickOutside';
import { debounce } from '../../../core/utils';
import './Style.scss';

const FavoriteStocksSearch = () => {
    const elInput = useRef<HTMLInputElement>(null);
    const [el, isDropdown, setIsDropdown] = useCloseOnClickOutside();
    const [keyword, setKeyword] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value = '' } = event?.target || {};
        setKeyword(value);
        // wait until user enters at least 2 letters before opening the dropdonw and start fetching
        setIsDropdown(value.length > 1);
    };

    const onFocusHandler = () => {
        if (keyword?.length > 1) {
            // if keyword existed, it should have at least 2 letters to open the dropdown
            setIsDropdown(true);
        }
    };

    const addStockToFavCallback = () => {
        // upon adding any stock to favList, close the dropdown, reset the input
        setIsDropdown(false);
        setKeyword('');
        if (elInput?.current) elInput.current.value = '';
    };

    return (
        <div className="favorite-stock-search" ref={el}>
            <div className="ui-input-wrapper has-icon">
                <Icons name="search" />
                <input
                    ref={elInput}
                    type="text"
                    placeholder="Search stock symbol"
                    className="ui-input"
                    onChange={debounce(onChangeHandler)}
                    onFocus={onFocusHandler}
                />
            </div>

            <WithAnimaation isShow={isDropdown}>
                <div className="favorite-stock-search-dropdown">
                    <FavoriteStocksSearchDropdown keyword={keyword} addStockToFavCallback={addStockToFavCallback} />
                </div>
            </WithAnimaation>
        </div>
    );
};

export default FavoriteStocksSearch;

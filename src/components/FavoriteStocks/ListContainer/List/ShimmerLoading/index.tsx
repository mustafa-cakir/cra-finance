import React from 'react';
import Shimmer from '../../../../common/Shimmer';
import ShimmerItem from '../../../../common/Shimmer/ShimmerItem';
import './Style.scss';

const ShimmerLoading = () => {
    return (
        <div className="ui-box favorite-stocks-list-shimmer">
            <Shimmer>
                <div className="favorite-stocks-list-shimmer-inner">
                    <ShimmerItem height={30} width={50} />
                    <ShimmerItem height={20} width={3} className="dropdown-shimmer-sep" />
                    <ShimmerItem height={20} width={200} />
                </div>
            </Shimmer>
        </div>
    );
};

export default ShimmerLoading;

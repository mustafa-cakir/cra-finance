import React from 'react';
import Shimmer from '../../../../../../common/components/Shimmer';
import ShimmerItem from '../../../../../../common/components/Shimmer/ShimmerItem';
import './Style.scss';

const ShimmerLoading = () => {
    return (
        <div className="ui-box favorite-stocks-list-table-shimmer">
            <Shimmer>
                <ShimmerItem height={30} width={50} />
                <ShimmerItem height={20} width={3} className="dropdShimmerLoadingown-shimmer-sep" />
                <ShimmerItem height={20} width={200} />
            </Shimmer>
        </div>
    );
};

export default ShimmerLoading;

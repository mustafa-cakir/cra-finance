import React from 'react';
import ShimmerContainer from '../../../../common/Shimmer';
import ShimmerItem from '../../../../common/Shimmer/ShimmerItem';
import './Style.scss';

const ShimmerLoading = () => {
    return (
        <div className="dropdown-shimmer">
            <ShimmerContainer>
                <div className="dropdown-shimmer-inner">
                    <ShimmerItem height={26} width={50} />
                    <ShimmerItem height={20} width={3} className="dropdown-shimmer-sep" />
                    <ShimmerItem height={20} width={200} />
                </div>
            </ShimmerContainer>
        </div>
    );
};

export default ShimmerLoading;

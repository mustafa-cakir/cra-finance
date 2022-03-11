import React from 'react';
import Shimmer from '../../../../common/Shimmer';
import ShimmerItem from '../../../../common/Shimmer/ShimmerItem';
import './Style.scss';

const ShimmerLoading = () => {
    return (
        <Shimmer>
            <ShimmerItem height={30} width="25%" marginBottom={15} />
            <ShimmerItem height={20} width="25%" marginBottom={15} />
            <ShimmerItem height={20} width="50%" marginBottom={15} />
            <ShimmerItem height={20} width="50%" marginBottom={15} />
            <ShimmerItem height={20} width="50%" />
        </Shimmer>
    );
};

export default ShimmerLoading;

import React from 'react';

type Prop = {
    width?: undefined | number;
    height?: undefined | number;
    className?: undefined | string;
};

const ShimmerItem = ({ height, width, className }: Prop) => {
    return <div className={`shimmer-item ${className || ''}`} style={{ width, height }} />;
};

ShimmerItem.defaultProps = {
    width: undefined,
    height: undefined,
    className: null,
};

export default ShimmerItem;

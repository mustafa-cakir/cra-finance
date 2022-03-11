import React from 'react';

type Props = {
    name: string;
    customClassName?: string;
};

const Icons = ({ name, customClassName }: Props) => {
    if (!name) return null;
    return <i className={`icons icons-${name} ${customClassName || ''}`} />;
};

Icons.defaultProps = {
    customClassName: null,
};

export default Icons;

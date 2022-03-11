import React, { useMemo } from 'react';
import Icons from '../Icons';
import './Style.scss';

type Props = {
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
};

const Alert = ({ type, message }: Props) => {
    const iconName = useMemo<string>(() => {
        switch (type) {
            case 'info':
                return 'info';
            case 'success':
                return 'check-circle';
            case 'error':
            case 'warning':
                return 'alert-octagon';
            default:
                return '';
        }
    }, [type]);

    if (!type || !message) return null;

    return (
        <div className={`alert type-${type}`}>
            <Icons name={iconName} customClassName="ui-text-size-20 mr-2dot5" />
            <div className="message">{message}</div>
        </div>
    );
};

export default Alert;

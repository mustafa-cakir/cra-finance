import React, { useEffect, useState } from 'react';
import { ICompany } from '../../../core/types';
import { GET_STOCK_COMPANY_BY_SYMBOL } from '../../../core/constants/apis';
import { fetchIEX } from '../FavoriteStocksAPI';
import Alert from '../../common/Alert';
import Shimmer from '../../common/Shimmer';
import ShimmerItem from '../../common/Shimmer/ShimmerItem';
import './Style.scss';

type Prop = {
    symbol: string;
};

const Details = ({ symbol }: Prop) => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany] = useState<ICompany | null>(null);

    useEffect(() => {
        fetchIEX(GET_STOCK_COMPANY_BY_SYMBOL.replace('{symbol}', symbol))
            .then(async res => {
                if (res.ok) {
                    setIsLoading(false);
                    const stocksData = (await res.json()) as ICompany;
                    setCompany(stocksData);
                } else {
                    const text = await res.text();
                    setError(text);
                }
            })
            .catch(() => {
                setError('Opps there seems to be an error. Please try again.');
            });
    }, [symbol]);

    return (
        <div className="company-details">
            {isLoading && (
                <Shimmer>
                    <ShimmerItem height={20} width="50%" marginBottom={15} />
                    <ShimmerItem height={20} width="75%" marginBottom={15} />
                    <ShimmerItem height={20} width="75%" marginBottom={15} />
                </Shimmer>
            )}
            {error && <Alert type="error" message={error} />}
            {company && <div className="ui-text-muted">{company.description}</div>}
        </div>
    );
};

export default Details;

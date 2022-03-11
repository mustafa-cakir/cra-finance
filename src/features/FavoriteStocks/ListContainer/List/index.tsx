import React from 'react';
import { useAppSelector } from '../../../../common/hooks';
import Alert from '../../../../common/components/Alert';
import TableLayout from './TableLayout';
import GridLayout from './GridLayout';
import ShimmerLoading from './ShimmerLoading';
import EmptyState from './EmptyState';

const FavoriteStocksList = () => {
    const { listingType } = useAppSelector(redux => redux.user);
    const { error, isLoading, quotes } = useAppSelector(redux => redux.favoriteStocks);

    if (isLoading) return <ShimmerLoading />;
    if (quotes?.length === 0) return <EmptyState />;

    return (
        <>
            {error && (
                <div className="ui-mb-15">
                    <Alert type="error" message={error} />
                </div>
            )}
            {listingType === 'table' && <TableLayout />}
            {listingType === 'grid' && <GridLayout />}
        </>
    );
};

export default FavoriteStocksList;

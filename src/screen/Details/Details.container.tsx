/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from 'react';
import DetailsScreen from './Details.view';
import {useSelector} from 'react-redux';
import {Store} from 'types/Store';

const DetailsContainer = (props: any) => {
  const detailsId =
    useSelector((state: Store) => state.detail?.detailsId) || '';
  const breweries =
    useSelector((state: Store) => state.brewery.breweries) || [];
  const details = useMemo(
    () => breweries.find(list => list.id === detailsId),
    [detailsId, breweries],
  );
  console.log({details, breweries, detailsId});

  const generatedProps = {details};

  return <DetailsScreen {...generatedProps} {...props} />;
};
export default DetailsContainer;

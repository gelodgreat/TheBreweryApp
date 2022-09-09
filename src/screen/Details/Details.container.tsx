/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import DetailsScreen from './Details.view';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from 'types/Store';
import {addBookmarks} from 'redux/actions';
import {Bookmarks} from 'types/Bookmarks';
import {DetailsPrivateProps} from './Details.props';
import {Brewery} from 'types/Brewery';
import {showToast} from 'utils/showToast';

const DetailsContainer = (props: any) => {
  const dispatch = useDispatch();
  const detailsId =
    useSelector((state: Store) => state.detail?.detailsId) || '';
  const breweries =
    useSelector((state: Store) => state.brewery.breweries) || [];
  const bookmarks =
    useSelector((state: Store) => state.bookmarks.bookmarks) || [];

  const onBookmark = (bookmark: Bookmarks) => {
    if (bookmarks.find(i => i.id === bookmark.id)) {
      showToast('error', 'This was already in the bookrmark');
    } else {
      dispatch(addBookmarks(bookmark));
    }
  };

  const details: Brewery = useMemo(
    () => breweries.find(list => list.id === detailsId),
    [detailsId, breweries],
  );

  const generatedProps: DetailsPrivateProps = {details, bookmarks, onBookmark};

  return <DetailsScreen {...generatedProps} {...props} />;
};
export default DetailsContainer;

/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import BookmarksView from './Bookmarks.view';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from 'types/Store';
import {addBookmarks, deleteBookmarks} from 'redux/actions';
import {Bookmarks} from 'types/Bookmarks';
import {BookmarksPrivateProps} from './Bookmarks.props';
import {Brewery} from 'types/Brewery';
import {showToast} from 'utils/showToast';

const BookmarksContainer = (props: any) => {
  const dispatch = useDispatch();

  const bookmarks =
    useSelector((state: Store) => state.bookmarks.bookmarks) || [];

  const onBookmark = (bookmark: Bookmarks) => {
    if (bookmarks.find(i => i.id === bookmark.id)) {
      dispatch(deleteBookmarks(bookmark.id));
      // showToast('error', 'This was already in the bookrmark');
    } else {
      dispatch(addBookmarks(bookmark));
    }
  };

  const generatedProps: BookmarksPrivateProps = {bookmarks, onBookmark};

  return <BookmarksView {...generatedProps} {...props} />;
};
export default BookmarksContainer;

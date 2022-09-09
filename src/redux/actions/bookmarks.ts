import {Bookmarks} from 'types/Bookmarks';

export const addBookmarks = (bookmarks: Bookmarks) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'LOAD_BOOKMARKS_SUCCESS',
        payload: [bookmarks],
      });
    } catch (error) {
      dispatch({type: 'LOAD_BOOKMARKS_FAILURE', payload: error});
    }
  };
};

export const editBookmarks = (
  oldBookmarks: Bookmarks,
  updatedBookmarks: Bookmarks,
) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'LOAD_BOOKMARKS_UPDATE_SUCCESS',
        payload: {
          old: oldBookmarks,
          updated: updatedBookmarks,
        },
      });
    } catch (error) {
      dispatch({type: 'LOAD_BOOKMARKS_FAILURE', payload: error});
    }
  };
};

export const deleteBookmarks = (id: string) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'DELTE_BOOKMARKS',
        payload: {id},
      });
    } catch (error) {
      console.log(error);
    }
  };
};

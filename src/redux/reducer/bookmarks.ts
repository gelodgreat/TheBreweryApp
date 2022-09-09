import {Bookmarks} from 'types/Bookmarks';

export const BookmarksReducer = (
  state = {
    bookmarks: [] as Bookmarks[],
    isLoading: false,
    error: null,
  },
  action: any,
) => {
  switch (action.type) {
    case 'LOAD_BOOKMARKS_START':
      return {...state, isLoading: true};
    case 'LOAD_BOOKMARKS_SUCCESS':
      const localBookmarks = state?.bookmarks || [];
      //handling of adding the Bookmarks
      return {
        ...state,
        bookmarks: [...action.payload, ...localBookmarks],
        isLoading: false,
      };
    case 'LOAD_BOOKMARKS_UPDATE_SUCCESS':
      const localBookmarksUpdate = state?.bookmarks || [];
      //handling of updating the Bookmarks
      return {
        ...state,
        bookmark: localBookmarksUpdate.map(bookmark =>
          bookmark.id === action.payload.old.id
            ? {...bookmark, bookmark: action.payload.updated.bookmark}
            : bookmark,
        ),
        isLoading: false,
      };
    case 'DELTE_BOOKMARKS':
      const localBookmarksLoaded = state?.bookmarks || [];
      //handling of updating the Bookmarks
      return {
        ...state,
        bookmarks: localBookmarksLoaded.filter(
          bookmark => bookmark.id !== action.payload.id,
        ),
        isLoading: false,
      };
    case 'LOAD_BOOKMARKS_FAILURE':
      return {...state, error: action.payload, isLoading: false};
    case 'UPDATE_BOOKMARKS_RESULT': {
      return {...state, bookmarks: action.bookmark};
    }
    case 'CLEAR_BOOKMARKS_LIST': {
      return {};
    }
    default:
      return state;
  }
};

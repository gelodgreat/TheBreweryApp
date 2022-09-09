import {combineReducers} from 'redux';
import {breweryListReducer} from './brewery';
import {currentBreweryReducer} from './currentBrewery';
import {BookmarksReducer} from './bookmarks';
export default combineReducers({
  detail: currentBreweryReducer,
  brewery: breweryListReducer,
  bookmarks: BookmarksReducer,
});

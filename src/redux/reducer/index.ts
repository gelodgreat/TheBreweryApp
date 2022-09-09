import {combineReducers} from 'redux';
import {breweryListReducer} from './brewery';
import {currentBreweryReducer} from './currentBrewery';
export default combineReducers({
  detail: currentBreweryReducer,
  brewery: breweryListReducer,
});

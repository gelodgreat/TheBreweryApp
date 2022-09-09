import axios from 'axios';
import {BREWERY_API_URL} from 'const/api';

export const updateBreweryeList = (brewery: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'UPDATE_BREWERY_RESULT',
      brewery,
    });
  };
};

export const loadBreweries = (searchTerm: string, perPage: number) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type: 'LOAD_BREWERY_START'});
      const encodedSearch = encodeURI(searchTerm || '');
      const url = `${BREWERY_API_URL}?per_page=${perPage || 10}${
        encodedSearch.length > 0 && `&by_name=${encodedSearch}`
      }`;
      const breweryResults = await axios.get(url);
      dispatch({
        type: 'LOAD_BREWERY_SUCCESS',
        payload: [...breweryResults.data],
      });
    } catch (error) {
      dispatch({type: 'LOAD_BREWERY_FAILURE', payload: error});
    }
  };
};

export const clearBreweryList = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'CLEAR_BREWERY_LIST',
    });
  };
};

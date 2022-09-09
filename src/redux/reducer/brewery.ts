export const breweryListReducer = (
  state = {
    breweries: [],
    isLoading: false,
    error: null,
  },
  action: any,
) => {
  switch (action.type) {
    case 'LOAD_BREWERY_START':
      return {...state, isLoading: true};
    case 'LOAD_BREWERY_SUCCESS':
      const localBreweries = state?.breweries || [];
      return {
        ...state,
        breweries: [...action.payload, ...localBreweries],
        isLoading: false,
      };
    case 'LOAD_BREWERY_FAILURE':
      return {...state, error: action.payload, isLoading: false};
    case 'UPDATE_BREWERY_RESULT': {
      return {...state, breweries: action.breweries};
    }
    case 'CLEAR_BREWERY_LIST': {
      return {};
    }
    default:
      return state;
  }
};

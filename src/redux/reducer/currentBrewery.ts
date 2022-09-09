export const currentBreweryReducer = (
  state = {
    detailId: '',
  },
  action: any,
) => {
  switch (action.type) {
    case 'SET_BREWERY_DETAIL': {
      return {...state, detailsId: action.detail};
    }
    case 'CLEAR_CURRENT_BREWERY': {
      return {};
    }
    default:
      return state;
  }
};

export const currentBrewery = (detail: string | number) => {
  return dispatch => {
    dispatch({
      type: 'SET_BREWERY_DETAIL',
      detail,
    });
  };
};

export const clearCurrentBrewery = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_CURRENT_BREWERY',
      detail: {},
    });
  };
};

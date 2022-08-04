const initialState = {
  repo: [],
};

function repoReducers(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case 'GET_REPO':
      return {
        ...state,
        repo: action.payload,
      };
    default:
      return state;
  }
}

export default repoReducers;

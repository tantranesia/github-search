const initialState = {
  user: []
};

function userReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
}

export default userReducer;

export const handleUser = (user) => {
  return {
    type: 'GET_USER',
    payload: user,
  };
};

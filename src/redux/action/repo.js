export const handleRepo = (repo) => {
  return {
    type: 'GET_REPO',
    payload: repo,
  };
};

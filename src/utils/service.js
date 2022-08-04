import axios from './axios';

const getUser = (user) => {
  return axios.get(`/users${user}`);
};

const getRepo = (repo) => {
  return axios.get(`/repositories?${repo}`);
};

const Api = {
  getUser,
  getRepo,
};
export default Api;

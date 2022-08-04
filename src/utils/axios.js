import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;
const username = 'tantranesia';
export default axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-type': 'application/json',
   
  },
  body: {
    username,
    key,
  },
});

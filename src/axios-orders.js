import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-complete-guide-ca14d.firebaseio.com/',
});

export default instance;

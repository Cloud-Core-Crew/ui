import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4005/api/users',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;

import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4005/api/users',
  headers: {
    'Content-Type': 'application/json'
  }
});

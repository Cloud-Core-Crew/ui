import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4001/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

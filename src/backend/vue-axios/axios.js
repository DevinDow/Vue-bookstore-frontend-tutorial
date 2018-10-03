/* global localStorage */
// https://github.com/axios/axios
// Promise based HTTP client for the browser and node.js

import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})

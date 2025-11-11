import axios from 'axios'
const api = axios.create({ 
  baseURL: '/api', 
  timeout: 20000  // Extra buffer for Pakistan
})
export const getWelcome = () => api.get('/')

import axios from 'axios'

const API_BASE_URL = process.env.API_URL

const queryInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
})

export const queryGet = (url) => 
  queryInstance.get(url)


export const queryPost = (url, data = null, config = {}) => 
  queryInstance.post(url, data, { ...config })

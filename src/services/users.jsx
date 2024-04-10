

import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getMe = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.get(`${baseUrl}/me`, config)
  const data = await response.data
  return data
}

const createAccount = async (newObject) => {
  const response = await axios.post(`${baseUrl}/register`, newObject)
  const data = await response.data;
  return data;
}

const login = async (newObject) => {
    const response = await axios.post(`${baseUrl}/login`, newObject)
    const data = await response.data;
    return data;
}

const logout = async () => {
  const config = {
    headers: { Authorization: token },
  }
  console.log(config)
  const response = await axios.get(`${baseUrl}/logout`, config)
  return response;
}
export default { 
  getMe, login, createAccount, setToken, logout
}
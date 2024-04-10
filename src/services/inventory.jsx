

import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_SERVER_URL}/api`

console.log(baseUrl)
let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/items`)
  const data = await response.data
  return data
}

const addItems = async (newObject) => {
    console.log(newObject)
    const config = {
        headers: { Authorization: token },
    }
  const response = await axios.post(`${baseUrl}/items`, newObject, config )
  console.log()
  const data = await response.data;
  return data;
}

const moveItems = async (newObject, id) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.put(`${baseUrl}/items/remove/${id}`, newObject, config)
    const data = await response.data;
    return data;
}

const deleteCategory = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log(config)
  const response = await axios.delete(`${baseUrl}/items/delete/${id}`, config)
  return response;
}

export default { 
  getAll, moveItems, addItems, setToken, deleteCategory
}
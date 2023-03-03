import axios from 'axios'
import { API_BASE_URL } from './config'

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export const getTasks = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/tasks`)
    return data
}

export const getTask = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/tasks/${id}`)
    return response.data
}

export const createTask = async (task) => {
    console.log(task)
    const response = await axios.post(`${API_BASE_URL}/tasks`, task)
    console.log(response.data)
    return response.data
}

export const updateTask = async (id, task) => {
    const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, task)
    return response.data
}

export const deleteTask = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/tasks/${id}`)
    return response.data
}
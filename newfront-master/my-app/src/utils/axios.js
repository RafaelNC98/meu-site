import axios from 'axios'
import { TOKEN } from '../constants'

const createInstance = () => axios.create({
  baseURL: process.env.BACKEND || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
  }
})

export const postLogin = (form) => createInstance().post('/login', form)
export const getProduct = () => createInstance().get('/product')

export const postRegister = (form) => createInstance().post('/register', form)

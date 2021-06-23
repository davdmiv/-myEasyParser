import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
  const { data } = await $host.post('api/users/registration', {
    email,
    password,
  })
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const login = async (email, password) => {
  const { data } = await $host.post('api/users/login', {
    email,
    password,
  })
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async () => {
  const { data } = await $authHost.get('api/users/auth')
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

// user

export const fetchUser = async (id) => {
  const { user } = await $authHost.get(`api/users/${id}`)
  return user
}

export const updateUser = async (id, params) => {
  const { user } = await $authHost.put(`api/users/${id}`, params)
  return user
}

export const deleteUser = async (id) => {
  const { user } = await $authHost.delete(`api/users/${id}`)
  return user
}

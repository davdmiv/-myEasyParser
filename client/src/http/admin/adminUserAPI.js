import { $authHost } from './index'

export const adminFetchUser = async (id) => {
  const { user } = await $authHost.get(`api/admin/users/${id}`)
  return user
}

export const adminFetchUsers = async () => {
  const { users } = await $authHost.get('api/admin/users')
  return users
}

export const adminCreateUser = async (params) => {
  const { user } = await $authHost.post('api/admin/users', params)
  return user
}

export const adminUpdateUser = async (id, params) => {
  const { user } = await $authHost.put(`api/admin/users/${id}`, params)
  return user
}

export const adminDeleteUser = async (id) => {
  const { user } = await $authHost.delete(`api/admin/users/${id}`)
  return user
}

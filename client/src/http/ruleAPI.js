import { $authHost, $host } from './index'

// public

export const fetchPublicRule = async (id) => {
  const { data } = await $host.get(`api/rules/public/${id}`)
  return data.rule
}

export const fetchPublicRules = async () => {
  const { data } = await $host.get('api/rules/public')
  return data.rules
}

// user

export const fetchRule = async (id) => {
  const { data } = await $authHost.get(`api/rules/${id}`)
  return data
}

export const fetchRules = async () => {
  const { data } = await $authHost.get('api/rules')
  return data.rules
}

export const createRule = async (params) => {
  const { data } = await $authHost.post('api/rules', params)
  return data
}

export const updateRule = async (id, params) => {
  const { data } = await $authHost.put(`api/rules/${id}`, params)
  return data
}

export const deleteRule = async (id) => {
  const { data } = await $authHost.delete(`api/rules/${id}`)
  return data
}

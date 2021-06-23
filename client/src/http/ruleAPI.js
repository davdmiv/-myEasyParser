import { $authHost, $host } from './index'

// public

export const fetchPublicRule = async (id) => {
  const { rule } = await $host.get(`api/rules/public/${id}`)
  return rule
}

export const fetchPublicRules = async () => {
  const { data } = await $host.get('api/rules/public')
  return data.rules
}

// user

export const fetchRule = async (id) => {
  const { rule } = await $authHost.get(`api/rules/${id}`)
  return rule
}

export const fetchRules = async () => {
  const { rules } = await $authHost.get('api/rules')
  return rules
}

export const createRule = async (params) => {
  const { rule } = await $authHost.post('api/rules', params)
  return rule
}

export const updateRule = async (id, params) => {
  const { rule } = await $authHost.put(`api/rules/${id}`, params)
  return rule
}

export const deleteRule = async (id) => {
  const { rule } = await $authHost.delete(`api/rules/${id}`)
  return rule
}

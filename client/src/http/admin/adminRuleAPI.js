import { $authHost } from './index'

export const adminFetchRule = async (id) => {
  const { rule } = await $authHost.get(`api/admin/rules/${id}`)
  return rule
}

export const adminFetchRules = async () => {
  const { rules } = await $authHost.get('api/admin/rules')
  return rules
}

export const adminCreateRule = async (params) => {
  const { rule } = await $authHost.post('api/admin/rules', params)
  return rule
}

export const adminUpdateRule = async (id, params) => {
  const { rule } = await $authHost.put(`api/admin/rules/${id}`, params)
  return rule
}

export const adminDeleteRule = async (id) => {
  const { rule } = await $authHost.delete(`api/admin/rules/${id}`)
  return rule
}

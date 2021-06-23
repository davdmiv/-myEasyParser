import { $authHost } from './index'

// export const fetchUserRule = async (id) => {
//   const { rule } = await $authHost.get(`api/admin/userrules/${id}`)
//   return rule
// }

export const fetchUserRules = async () => {
  const { userRules } = await $authHost.get('api/admin/userrules')
  return userRules
}

export const createUserRule = async (params) => {
  const { userRule } = await $authHost.post('api/admin/userrules', params)
  return userRule
}

export const updateUserRule = async (params) => {
  const { userRule } = await $authHost.put(`api/admin/userrules`, params)
  return userRule
}

export const deleteUserRule = async (user_id, rule_id) => {
  const { userRule } = await $authHost.delete(
    `api/admin/userrules/?user_id=${user_id}&rule_id=${rule_id}`
  )
  return userRule
}

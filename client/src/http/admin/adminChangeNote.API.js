import { $authHost } from './index'

// user

export const adminFetchChangeNote = async (id) => {
  const { changeNote } = await $authHost.get(`api/admin/changenotes/${id}`)
  return changeNote
}

export const adminFetchChangeNotes = async () => {
  const { changeNotes } = await $authHost.get('api/admin/changenotes')
  return changeNotes
}

export const adminUpdateChangeNote = async (id, params) => {
  const { changeNote } = await $authHost.put(
    `api/admin/changenotes/${id}`,
    params
  )
  return changeNote
}

export const adminDeleteChangeNote = async (id) => {
  const { changeNote } = await $authHost.delete(`api/admin/changenotes/${id}`)
  return changeNote
}

import { $authHost, $host } from './index'

// public

export const fetchPublicChangeNote = async (id) => {
  const { changeNote } = await $host.get(`api/changenotes/public/${id}`)
  return changeNote
}

// user

export const fetchChangeNote = async (id) => {
  const { changeNote } = await $authHost.get(`api/changenotes/${id}`)
  return changeNote
}

export const fetchChangeNotes = async () => {
  const { changeNotes } = await $authHost.get('api/changenotes')
  return changeNotes
}

export const updateChangeNote = async (id, params) => {
  const { changeNote } = await $authHost.put(`api/changenotes/${id}`, params)
  return changeNote
}

export const deleteChangeNote = async (id) => {
  const { changeNote } = await $authHost.delete(`api/changenotes/${id}`)
  return changeNote
}

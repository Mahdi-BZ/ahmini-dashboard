import axios from 'axios'
import { AdminModel } from './AdminModel'

const API_URL = process.env.REACT_APP_API_URL || 'api'
export const REGISTER_URL = `${API_URL}/admin/register`
export const BASE_URL = `${API_URL}/admin/`

export function getAdmin(adminId: string) {
    return axios.get<AdminModel>(BASE_URL + adminId);
}
// Server should return AdminModel
export function add(admin: AdminModel) {
  return axios.post(REGISTER_URL, admin)
}

// Server should return AdminModel
export function update(admin: AdminModel) {
  return axios.put(BASE_URL + admin.id, admin)
}
// Server should return operation result
export function deleteAdmin(adminId: number) {
  return axios.delete(BASE_URL + adminId)
}
import axios from 'axios'
import { WomanModel } from './WomanModel'

const API_URL = process.env.REACT_APP_API_URL || 'api'
export const REGISTER_URL = `${API_URL}/registered-woman/register`
export const BASE_URL = `${API_URL}/registered-woman/`

export function getWoman(womanId: string) {
    return axios.get<WomanModel>(BASE_URL + womanId);
}
// Server should return WomanModel
export function add(woman: WomanModel) {
  return axios.post(REGISTER_URL, woman)
}

// Server should return WomanModel
export function update(woman: WomanModel) {
  return axios.put(BASE_URL + woman.id, woman)
}
// Server should return operation result
export function deleteWoman(womanId: number) {
  return axios.delete(BASE_URL + womanId)
}
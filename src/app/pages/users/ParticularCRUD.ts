import axios from 'axios'
import { ParticularModel } from './ParticularModel'

const API_URL = process.env.REACT_APP_API_URL || 'api'
export const REGISTER_URL = `${API_URL}/particular/register`
export const BASE_URL = `${API_URL}/particular/`

export function getParticular(particularId: string) {
    return axios.get<ParticularModel>(BASE_URL + particularId);
}
// Server should return ParticularModel
export function add(particular: ParticularModel) {
  return axios.post(REGISTER_URL, particular)
}

// Server should return ParticularModel
export function update(particular: ParticularModel) {
  return axios.put(BASE_URL + particular.id, particular)
}
// Server should return operation result
export function deleteParticular(particularId: number) {
  return axios.delete(BASE_URL + particularId)
}
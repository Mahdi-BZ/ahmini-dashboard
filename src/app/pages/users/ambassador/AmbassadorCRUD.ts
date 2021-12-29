import axios from 'axios'
import { AmbassadorModel } from './AmbassadorModel'

const API_URL = process.env.REACT_APP_API_URL || 'api'
export const REGISTER_URL = `${API_URL}/ambassador/register`
export const BASE_URL = `${API_URL}/ambassador/`

export function getAmbassador(ambassadorId: string) {
    return axios.get<AmbassadorModel>(BASE_URL + ambassadorId);
}
// Server should return AmbassadorModel
export function add(ambassador: AmbassadorModel) {
  return axios.post(REGISTER_URL, ambassador)
}

// Server should return AmbassadorModel
export function update(ambassador: AmbassadorModel) {
  return axios.put(BASE_URL + ambassador.id, ambassador)
}
// Server should return operation result
export function deleteAmbassador(ambassadorId: number) {
  return axios.delete(BASE_URL + ambassadorId)
}
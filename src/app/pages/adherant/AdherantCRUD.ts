import axios from 'axios'
import {AdherantModel} from './AdherantModel'

const API_URL = process.env.REACT_APP_API_URL || 'api'
export const BASE_URL = `${API_URL}/adherant/`

export function getAdherant(adherantId: string) {
  return axios.get(BASE_URL + adherantId)
}
// Server should return AdherantModel
export function add(adherant: {data: AdherantModel}) {
  
  return axios.post(BASE_URL+`/${adherant.data.passedBy.id}`, adherant)
}

// Server should return AdherantModel
export function update(adherant: {data: AdherantModel}) {
  const id = adherant.data.id;
  delete adherant.data['id'];

  return axios.put(BASE_URL + id, adherant)
}
// Server should return operation result
export function deleteAdherant(adherantId: number) {
  return axios.delete(BASE_URL + adherantId)
}

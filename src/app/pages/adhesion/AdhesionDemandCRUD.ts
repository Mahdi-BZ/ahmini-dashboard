import axios from 'axios'
import { AdhesionDemandModel } from './AdhesionDemandModel'

const API_URL = process.env.REACT_APP_API_URL || 'api'
export const BASE_URL = `${API_URL}/adhesion-demand/`

export function getAdhesionDemand(adhesionDemandId: string) {
    return axios.get(BASE_URL + adhesionDemandId);
}
// Server should return AdhesionDemandModel
export function add(adhesionDemand: {data: AdhesionDemandModel}) {
  return axios.post(BASE_URL, adhesionDemand)
}

// Server should return AdhesionDemandModel
export function update(adhesionDemand: {data: AdhesionDemandModel}) {
  const id = adhesionDemand.data.id;
  delete adhesionDemand.data['id'];

  return axios.put(BASE_URL + id, adhesionDemand)
}
// Server should return operation result
export function deleteAdhesionDemand(adhesionDemandId: number) {
  return axios.delete(BASE_URL + adhesionDemandId)
}
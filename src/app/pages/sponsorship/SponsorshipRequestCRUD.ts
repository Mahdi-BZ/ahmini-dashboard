import axios from 'axios'
import { SponsorshipRequestModel } from './SponsorshipRequestModel'

const API_URL = process.env.REACT_APP_API_URL || 'api'
export const REGISTER_URL = `${API_URL}/sponsorship-request/single`
export const BASE_URL = `${API_URL}/sponsorship-request/`

export function add(sponsorshipRequest: SponsorshipRequestModel) {
    return axios.post(REGISTER_URL, {data: sponsorshipRequest})
}

//DELETES SPONSO REQUEST WITH CORRESPONDING ID
export const deleteSponsorshipRequest = (id: number) => axios.delete(BASE_URL + id);
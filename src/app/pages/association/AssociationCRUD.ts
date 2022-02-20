import axios from "axios";
import { AssociationModel } from "./AssociationModel";

const API_URL = process.env.REACT_APP_API_URL || 'api'
export const BASE_URL = `${API_URL}/association/`
export const REGISTER_URL = `${API_URL}/association/register`

export function add(association: AssociationModel){
    return axios.post(REGISTER_URL,association);
}
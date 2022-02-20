import { AssociationModel } from "./AssociationModel";

export interface AssociationPagination {
    data: AssociationModel[]
    totalElements: number
    page: number
    pageNumber: number
  }
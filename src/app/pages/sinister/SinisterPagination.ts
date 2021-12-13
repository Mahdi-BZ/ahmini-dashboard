export interface ModifcationMeta {
  deletedDate?: any
  updatedDate: Date
  createdDate: Date
}

export interface Datum {
  id: number
  name: string
  definition: string
  modifcationMeta: ModifcationMeta
}

export interface SinisterPagination {
  data: Datum[]
  totalElements: number
  page: number
  pageNumber: number
}

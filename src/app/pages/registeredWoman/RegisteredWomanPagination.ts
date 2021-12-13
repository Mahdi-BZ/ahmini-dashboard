export interface ModificationMeta {
  deletedDate?: any
  updatedDate: Date
  createdDate: Date
}

export interface Datum {
  id: number
  womanCode: string
  firstName: string
  lastName: string
  governorate: string
  cin: string
  work: string
  postalCode: number
  modificationMeta: ModificationMeta
}

export interface RegisteredWomanPagination {
  data: Datum[]
  totalElements: number
  page: number
  pageNumber: number
}

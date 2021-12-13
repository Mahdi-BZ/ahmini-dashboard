export interface ModificationMeta {
  deletedDate?: any
  updatedDate: Date
  createdDate: Date
}

export interface Datum {
  id: number
  phoneNumber: string
  email: string
  password: string
  firstName: string
  lastName: string
  roles?: any
  accountType?: any
  userName: string
  hasValidAccount: boolean
  permanant: boolean
  modificationMeta: ModificationMeta
}

export interface AmbassadorPagination {
  data: Datum[]
  totalElements: number
  page: number
  pageNumber: number
}

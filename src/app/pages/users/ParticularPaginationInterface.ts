export interface ModificationMeta {
  deletedDate?: any
  updatedDate: Date
  createdDate: Date
}

export interface Particular {
  id: number
  phoneNumber: string
  email: string
  password: string
  firstName: string
  lastName: string
  roles?: any
  accountType?: any
  userName: string
  modificationMeta: ModificationMeta
}

export interface ParticularPagination {
  data: Particular[]
  totalElements: number
  page: number
  pageNumber: number
}

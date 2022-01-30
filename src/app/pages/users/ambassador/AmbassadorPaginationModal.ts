export interface ModificationMeta {
  deletedDate?: any
  updatedDate: Date
  createdDate: Date
}

export interface Ambassador {
  id: number
  phoneNumber: string
  email: string
  password: string
  firstName: string
  lastName: string
  roles?: any
  governorate: string
  accountType?: any
  userName: string
  hasValidAccount: boolean
  permanant: boolean
  modificationMeta: ModificationMeta
}

export interface AmbassadorPagination {
  data: Ambassador[]
  totalElements: number
  page: number
  pageNumber: number
}

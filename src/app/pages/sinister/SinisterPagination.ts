export interface ModifcationMeta {
  deletedDate?: any
  updatedDate: Date
  createdDate: Date
}

export interface SinisterPagination {
  data: Sinister[]
  totalElements: number
  page: number
  pageNumber: number
}
// Generated by https://quicktype.io

export interface Sinister {
  id: number
  name: string
  isValid: boolean
  definition: string
  modifcationMeta: ModifcationMeta
  type: Type
  declaredBy: DeclaredBy
}

export interface DeclaredBy {
  id: number
  phoneNumber: string
  email: string
  password: string
  firstName: string
  lastName: string
  roles: null
  accountType: null
  userName: string
  hasValidAccount: boolean
  permanant: boolean
  modificationMeta: ModifcationMeta
}

export interface Type {
  id: number
  name: string
  modifcationMeta: ModifcationMeta
}

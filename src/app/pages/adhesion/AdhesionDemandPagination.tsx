export interface AssuranceData {
  number: string
  company: string
}

export interface Data {
  clientCodeAhmini: string
  firstName: string
  lastName: string
  birthDate: Date
  birthPlace: string
  nationality: string
  identityCardNature: string
  identityCardNumber: string
  identityCardDeliveryDate: Date
  familtySituation: string
  street: string
  governorate: string
  town: string
  postalCode: number
  phone: number
  childCount: number
  activity: string
  adhesionDate: Date
  codeTypeOperation: string
  operationDate: Date
  assuranceData: AssuranceData
}

export interface Meta {
  deletedDate?: any
  updatedDate: Date
  createdDate: Date
}

export interface Datum {
  id: number
  processingState: string
  data: Data
  meta: Meta
}

export interface AdhesionDemandPagination {
  data: Datum[]
  totalElements: number
  page: number
  pageNumber: number
}

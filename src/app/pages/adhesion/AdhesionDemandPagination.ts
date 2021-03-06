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

interface Document {
  id: number
  mimetype: string
  originalname: string
  filename: string
  size: number
  meta: Meta2
}

export interface Meta2 {
  deletedDate?: any
  updatedDate: Date
  createdDate: Date
}

export interface AdhesionDemand {
  id: number
  processingState: string
  data: Data
  meta: Meta
  documents: Document[]
}

export interface AdhesionDemandPagination {
  data: AdhesionDemand[]
  totalElements: number
  page: number
  pageNumber: number
}

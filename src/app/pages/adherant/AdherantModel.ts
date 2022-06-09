export interface AdherantModel {
  id?: number
  firstName: string
  lastName: string,
  clientCodeAhmini: string,
  familtySituation: string
  nationality: string
  phone: number
  activity: string
  childCount: number
  identityCardNature: string
  identityCardNumber: number
  identityCardDeliveryDate: string
  birthDate: string
  birthPlace: string
  governorate: string
  town: string
  street: string
  postalCode: number
  passedBy?: {id: number}
}

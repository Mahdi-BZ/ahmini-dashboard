export interface AdhesionDemandModel {
    id: number
    firstName: string;
    lastName: string;
    birthDate: Date;
    birthPlace: string;
    nationality: string;
    identityCardNature: string;
    identityCardNumber: number;
    identityCardDeliveryDate: Date;
    familtySituation: string;
    street: string;
    governorate: string;
    town: string;
    postalCode: number;
    phone: number;
    childCount: number;
    activity: string;
}
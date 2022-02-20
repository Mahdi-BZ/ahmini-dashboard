  export interface Meta {
    deletedDate?: any
    updatedDate: Date
    createdDate: Date
  }
  
  export interface Meta2 {
    deletedDate?: any
    updatedDate: Date
    createdDate: Date
  }
  
  export interface SponsorshipRequest {
    id: number,
    governorate: string,
    womenCount: number,
    processingState: string
    meta: Meta
  }
  
  export interface SponsorshipRequestPagination {
    data: SponsorshipRequest[]
    totalElements: number
    page: number
    pageNumber: number
  }
  
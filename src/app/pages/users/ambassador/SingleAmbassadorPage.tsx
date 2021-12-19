import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useParams} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'
import HeaderComponent from '../../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import {Ambassador, AmbassadorPagination} from './AmbassadorPaginationModal'

type Props = {
  className: string
}
const SingleAmbassadorPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<Ambassador>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()

  useEffect(() => {
    if (!id) return
    axios.get(`/ambassador/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: Ambassador}> = ({data}) => {
    if (!data) return null
    else
      return (
        <div>
          <div>
            <h4> ID </h4>
            <p> {data.id} </p>
          </div>
          <div>
            <h4> First Name</h4>
            <p> {data.firstName} </p>
          </div>
          <div>
            <h4> Last Name</h4>
            <p> {data.lastName} </p>
          </div>
          <div>
            <h4> Email</h4>
            <p> {data.email} </p>
          </div>
          <div>
            <h4> Phone Number</h4>
            <p> {data.phoneNumber} </p>
          </div>
          <div>
            <h4> Permanent </h4>
            <p> {data.permanant ? 'Yes' : 'No'} </p>
          </div>

          <div>
            <h4> Valid Account </h4>
            <p> {data.hasValidAccount ? 'Yes' : 'No'} </p>
          </div>
        </div>
      )
  }

  const validateApiFunc = (e: boolean) => {
    axios
      .patch(`/ambassador/${e ? 'verify' : 'deny'}/${id}`)
      .then((e) => setValidateApi(e.data.hasValidAccount))
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Ambassador </span>
          <span className='text-muted mt-1 fw-bold fs-7'> Detailed Ambassador information </span>
        </h3>
        <div className='card-toolbar'>
          {particularsApiData && (
            <Button
              onClick={() => validateApiFunc(!particularsApiData.hasValidAccount)}
              variant={particularsApiData.hasValidAccount ? 'danger' : 'success'}
            >
              {particularsApiData.hasValidAccount ? 'unvalidate account' : 'Validate Account'}{' '}
            </Button>
          )}
        </div>
      </div>
      {/* end::Header */}
      <div className='card-body py-3'>
        <div className='mt-4'>
          <Cmp data={particularsApiData}> </Cmp>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}
export default SingleAmbassadorPage
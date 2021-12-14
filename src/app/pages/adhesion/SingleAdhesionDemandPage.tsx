import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useParams} from 'react-router-dom'
import {AdhesionDemand} from './AdhesionDemandPagination'

type Props = {
  className: string
}
const SingleAdhesionDemandPage: React.FC<Props> = ({className}) => {
  const [apiData, setParticulars] = useState<AdhesionDemand>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()

  useEffect(() => {
    if (!id) return
    axios.get(`/adhesion-demand/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: AdhesionDemand}> = ({data}) => {
    if (!data) return null
    else
      return (
        <div>
          <div>
            <h4> ID </h4>
            <p> {data.id} </p>

            <h4> State </h4>
            <p> {data.processingState} </p>

            <h4> first name </h4>
            <p> {data.data.firstName} </p>

            <h4> last name </h4>
            <p> {data.data.lastName} </p>

            <h4> phone </h4>
            <p> {data.data.phone} </p>

            <h4> activity </h4>
            <p> {data.data.activity} </p>

            <h4> child count </h4>
            <p> {data.data.childCount} </p>

            <h4> Birth Date </h4>
            <p> {data.data.birthDate} </p>

            <h4> governorate </h4>
            <p> {data.data.governorate} </p>

            <h4> identity card delivery date </h4>
            <p> {data.data.identityCardDeliveryDate} </p>

            <h4> family situation </h4>
            <p> {data.data.familtySituation} </p>

            <h4> postal code </h4>
            <p> {data.data.postalCode} </p>

            <h4> street </h4>
            <p> {data.data.street} </p>

            <h4> town </h4>
            <p> {data.data.town} </p>

            <h4> Client code ahmini </h4>
            <p> {data.data.clientCodeAhmini} </p>

            <h4> Documents </h4>
            <p> TODO </p>
          </div>
        </div>
      )
  }

  const validateApiFunc = (e: boolean) => {
    axios
      .patch(`/adhesion-demand/${e ? 'verify' : 'deny'}/${id}`)
      .then((e) => setValidateApi(e.data.processingState === 'accepted'))
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
          {apiData && (
            <Button
              onClick={() => validateApiFunc('accepted' !== apiData.processingState)}
              variant={'accepted' === apiData.processingState ? 'danger' : 'success'}
            >
              {'accepted' === apiData.processingState ? 'Unvalidate demand' : 'Validate demand'}
            </Button>
          )}
        </div>
      </div>
      {/* end::Header */}
      <div className='card-body py-3'>
        <div className='mt-4'>
          <Cmp data={apiData}> </Cmp>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}
export default SingleAdhesionDemandPage

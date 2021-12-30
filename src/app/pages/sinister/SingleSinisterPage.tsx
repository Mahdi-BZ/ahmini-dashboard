import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import {createFalse} from 'typescript'
import {Sinister} from './SinisterPagination'

type Props = {
  className: string
}
const SingleSinisterPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<Sinister>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()
  const history = useHistory()

  useEffect(() => {
    if (!id) return
    axios.get(`/sinister/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: Sinister}> = ({data}) => {
    if (!data) return null
    else
      return (
        <div>
          <div>
            <h4> ID </h4>
            <p> {data.id} </p>
          </div>
          <div>
            <h4> Definition de sinistre</h4>
            <p> {data.definition} </p>
          </div>

          <div>
            <h4> Nom</h4>
            <p> {data?.name} </p>
          </div>

          <div>
            <h4> type de sinistre </h4>
            <p> {data?.type?.name} </p>
          </div>

          <div>
            <h4> passe par </h4>
            <p>
              {data?.declaredBy?.firstName} {data?.declaredBy?.lastName}{' '}
            </p>
          </div>

          <div>
            <h4> valide </h4>
            <p>{data.isValid ? 'Oui' : 'Non'}</p>
          </div>
        </div>
      )
  }

  const validateApiFunc = () => {
    axios.patch(`/sinister/validate/${id}`).then((e) => setValidateApi(true))
  }

  const unValidateApiFunc = () => {
    axios.patch(`/sinister/unvalidate/${id}`).then((e) => setValidateApi(false))
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Sinistre </span>
          <span className='text-muted mt-1 fw-bold fs-7'>Informations de Sinistre détailées</span>
        </h3>
        <div className='card-toolbar' style={{width: '35%'}}>
          {particularsApiData && (
            <div className='d-flex w-100 justify-content-around'>
              <Button
                onClick={() =>
                  !particularsApiData?.isValid ? validateApiFunc() : unValidateApiFunc()
                }
                variant={particularsApiData?.isValid ? 'danger' : 'success'}
              >
                {particularsApiData?.isValid
                  ? 'annuler la demande de sinistre'
                  : 'valider la demande de sinistre'}
              </Button>
            </div>
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
export default SingleSinisterPage

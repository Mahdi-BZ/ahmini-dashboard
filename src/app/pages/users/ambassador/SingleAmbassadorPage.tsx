import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {Link, useHistory, useParams} from 'react-router-dom'
import {deleteAmbassador} from './AmbassadorCRUD'
import DeleteButton from '../../../shared/buttons/deleteButton'
import EditButton from '../../../shared/buttons/editButton'
import {Ambassador} from './AmbassadorPaginationModal'

type Props = {
  className: string
}
const SingleAmbassadorPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<Ambassador>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const [adherantCount, setadherantCount] = useState(0)
  const {id} = useParams<{id: string}>()
  const history = useHistory()

  const getAdherantCount = async (id: string) => {
    axios.get(`/ambassador/count-adherant/${id}`).then((e) => setadherantCount(e.data.count))
  }

  useEffect(() => {
    if (!id) return
    axios.get(`/ambassador/${id}`).then((e) => setParticulars(e.data))
    getAdherantCount(id)
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
            <h4> Nom utilisateur </h4>
            <p> {data.userName} </p>
          </div>
          <div>
            <h4> Nom</h4>
            <p> {data.firstName} </p>
          </div>
          <div>
            <h4> Prénom</h4>
            <p> {data.lastName} </p>
          </div>

          <div>
            <h4> gouvernorat</h4>
            <p> {data.governorate} </p>
          </div>

          <div>
            <h4> Email</h4>
            <p> {data.email} </p>
          </div>
          <div>
            <h4> Téléphone</h4>
            <p> {data.phoneNumber} </p>
          </div>
          <div>
            <h4> Permanent </h4>
            <p> {data.permanant ? 'Yes' : 'No'} </p>
          </div>

          <div>
            <h4> Compte validé </h4>
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
  const deleteParticular = (id: number) => {
    deleteAmbassador(id).then((response) => {
      history.push('/crafted/users/ambassador')
    })
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Ambassadeur </span>
          <span className='text-muted mt-1 fw-bold fs-7'>Informations d'ambassadeur détailées</span>
        </h3>
        <div className='card-toolbar' style={{width: '35%'}}>
          {particularsApiData && (
            <div className='d-flex w-100 justify-content-around'>
              {/* Begin Edit Button  */}
              <EditButton
                clickHandler={() => history.push(`/crafted/users/ambassador/update/${id}`)}
              />
              {/* End Edit Button  */}
              {/* Begin Delete Button  */}

              <DeleteButton clickHandler={() => deleteParticular(particularsApiData.id)} />
              {/* End Delete Button  */}
              <Button
                onClick={() => validateApiFunc(!particularsApiData.hasValidAccount)}
                variant={particularsApiData.hasValidAccount ? 'danger' : 'success'}
              >
                {particularsApiData.hasValidAccount ? 'Annuler le compte' : 'Valider le compte'}{' '}
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* end::Header */}
      <div className='card-body py-3'>
        <div className='mt-4'>
          <Cmp data={particularsApiData}> </Cmp>
          <div>
            <h4> Nombre D'adherantes </h4>
            <p> {adherantCount} </p>
          </div>

          <Link to={`/crafted/users/ambassador/${id}/sinisters`}>
            <h3 className=' py-4 link-primary  '>
              Liste des sinistres declarés{' '}
              <i className='bi h-full text-center text-primary bi-link fs-1 ml-3 '></i>
            </h3>
          </Link>
          <div className='pb-8'></div>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}
export default SingleAmbassadorPage

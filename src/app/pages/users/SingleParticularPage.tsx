import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import DeleteButton from '../../shared/buttons/deleteButton'
import EditButton from '../../shared/buttons/editButton'
import { deleteParticular } from './ParticularCRUD'
import {Particular} from './ParticularPaginationInterface'

type Props = {
  className: string
}
const SingleParticularPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<Particular>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()
  const history = useHistory();

  useEffect(() => {
    if (!id) return
    axios.get(`/particular/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: Particular}> = ({data}) => {
    if (!data) return null
    else
      return (
        <div>
          <div>
            <h4> ID </h4>
            <p> {data.id} </p>
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
            <h4> Email</h4>
            <p> {data.email} </p>
          </div>
          <div>
            <h4> Téléphone</h4>
            <p> {data.phoneNumber} </p>
          </div>
        </div>
      )
  }
  const deleteParticularHandler = (id: number) => {
    deleteParticular(id).then(response => {
        history.push('/crafted/users/particular');
    })
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Particulaire </span>
          <span className='text-muted mt-1 fw-bold fs-7'>Informations de particulaire détailées</span>
        </h3>
        <div className='card-toolbar' style={{width: '35%'}}>
          {particularsApiData && (
            <div className='d-flex w-100 justify-content-around'>
              {/* Begin Edit Button  */}
              <EditButton clickHandler={() => history.push(`/crafted/users/particular/update/${id}`)} />
              {/* End Edit Button  */}
              {/* Begin Delete Button  */}
              
            <DeleteButton clickHandler={() => deleteParticularHandler(particularsApiData.id)}/>
              {/* End Delete Button  */}
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
export default SingleParticularPage

import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import DeleteButton from '../../shared/buttons/deleteButton'
import EditButton from '../../shared/buttons/editButton'
import { deleteAdmin } from './AdminCRUD'
import { Datum } from './AdminPaginationInterface'

type Props = {
  className: string
}
const SingleAdminPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<Datum>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()
  const history = useHistory();

  useEffect(() => {
    if (!id) return
    axios.get(`/admin/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: Datum}> = ({data}) => {
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

  const deleteParticular = (id: number) => {
    deleteAdmin(id).then(response => {
        history.push('/crafted/users/admin');
    })
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Admin </span>
          <span className='text-muted mt-1 fw-bold fs-7'>Informations d'admin détailées</span>
        </h3>
        <div className='card-toolbar w-25'>
          {particularsApiData && (
            <div className='d-flex w-50 justify-content-around'>
              {/* Begin Edit Button  */}
              <EditButton clickHandler={() => history.push(`/crafted/users/admin/update/${id}`)} />
              {/* End Edit Button  */}
              {/* Begin Delete Button  */}
              
              <DeleteButton clickHandler={() => deleteParticular(particularsApiData.id)}/>
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
export default SingleAdminPage
